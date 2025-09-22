import sqlite3 from 'sqlite3';
import path from 'path';

let db: sqlite3.Database | null = null;

export async function getDb() {
  if (!db) {
    const dbPath = path.resolve(process.cwd(), 'data', 'kassiopee.db');
    
    // Ensure data directory exists
    const fs = require('fs');
    const dataDir = path.dirname(dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    db = new sqlite3.Database(dbPath);

    // Initialize tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        nom TEXT NOT NULL,
        prenom TEXT NOT NULL,
        email TEXT NOT NULL,
        telephone TEXT,
        message TEXT,
        formation_interest TEXT,
        region TEXT,
        centre_preference TEXT,
        consentement_rgpd BOOLEAN NOT NULL DEFAULT false,
        ip_hash TEXT,
        source_page TEXT
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        consentement_rgpd BOOLEAN NOT NULL DEFAULT true
      );
    `);
  }

  return db;
}

export interface Lead {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  message?: string;
  formation_interest?: string;
  region?: string;
  centre_preference?: string;
  consentement_rgpd: boolean;
  ip_hash?: string;
  source_page?: string;
}

export async function saveLead(lead: Lead): Promise<number> {
  const database = await getDb();
  
  return new Promise((resolve, reject) => {
    database.run(
      `INSERT INTO leads (
        nom, prenom, email, telephone, message, formation_interest, 
        region, centre_preference, consentement_rgpd, ip_hash, source_page
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        lead.nom,
        lead.prenom,
        lead.email,
        lead.telephone || null,
        lead.message || null,
        lead.formation_interest || null,
        lead.region || null,
        lead.centre_preference || null,
        lead.consentement_rgpd ? 1 : 0,
        lead.ip_hash || null,
        lead.source_page || null,
      ],
      function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      }
    );
  });
}
