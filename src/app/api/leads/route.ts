import { NextRequest, NextResponse } from 'next/server';
import { saveLead, Lead } from '@/lib/database';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des champs obligatoires
    const { nom, prenom, email, consentement_rgpd } = body;
    
    if (!nom || !prenom || !email) {
      return NextResponse.json(
        { message: 'Les champs nom, prénom et email sont obligatoires.' },
        { status: 400 }
      );
    }
    
    if (!consentement_rgpd) {
      return NextResponse.json(
        { message: 'Le consentement RGPD est obligatoire.' },
        { status: 400 }
      );
    }
    
    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Format d\'email invalide.' },
        { status: 400 }
      );
    }

    // Hash de l'IP pour RGPD
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || '127.0.0.1';
    const ipHash = crypto.createHash('sha256').update(ip).digest('hex');

    // Préparation des données
    const leadData: Lead = {
      nom: body.nom.trim(),
      prenom: body.prenom.trim(),
      email: body.email.trim().toLowerCase(),
      telephone: body.telephone?.trim() || undefined,
      message: body.message?.trim() || undefined,
      formation_interest: body.formation_interest?.trim() || undefined,
      region: body.region || undefined,
      centre_preference: body.centre_preference || undefined,
      consentement_rgpd: Boolean(body.consentement_rgpd),
      ip_hash: ipHash,
      source_page: body.source_page || undefined,
    };

    // Sauvegarde en base
    const leadId = await saveLead(leadData);
    
    // Log pour monitoring (sans données personnelles)
    console.log(`Nouveau lead créé: ID ${leadId}, source: ${leadData.source_page}, région: ${leadData.region}`);

    return NextResponse.json(
      { 
        message: 'Votre demande a été enregistrée avec succès. Notre équipe vous recontactera rapidement.',
        id: leadId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la sauvegarde du lead:', error);
    
    return NextResponse.json(
      { message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

// Méthode GET pour récupérer les statistiques (admin uniquement)
export async function GET(request: NextRequest) {
  // Simple protection - en production, utiliser une vraie authentification
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }

  try {
    // TODO: Implémenter les statistiques des leads
    return NextResponse.json({
      message: 'Endpoint de statistiques à implémenter'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des stats:', error);
    return NextResponse.json(
      { message: 'Erreur interne' },
      { status: 500 }
    );
  }
}