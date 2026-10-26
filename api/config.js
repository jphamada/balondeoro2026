// Vercel Serverless Function: api/config.js
// Devuelve la configuración de Firebase de forma segura desde las Variables de Entorno de Vercel

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const config = {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "balondeoro2026-ac02d.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "balondeoro2026-ac02d",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "balondeoro2026-ac02d.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.FIREBASE_APP_ID || ""
  };

  res.status(200).json(config);
};
