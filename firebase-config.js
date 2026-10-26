/**
 * Configuración Segura de Firebase para Vercel
 * Proyecto: balondeoro2026-ac02d
 * 
 * En Vercel, las credenciales se cargan de forma segura desde las Variables de Entorno vía /api/config
 * sin exponer las claves en el repositorio de GitHub.
 */

let firebaseConfig = {
  apiKey: "",
  authDomain: "balondeoro2026-ac02d.firebaseapp.com",
  projectId: "balondeoro2026-ac02d",
  storageBucket: "balondeoro2026-ac02d.appspot.com",
  messagingSenderId: "",
  appId: ""
};

let db = null;
let isFirebaseAvailable = false;

// Función para inicializar Firebase con la configuración provista
function setupFirebase(config) {
  try {
    if (typeof firebase !== "undefined" && firebase.apps) {
      if (firebase.apps.length) {
        // Si ya había una instancia, reutilizarla o reconfigurar
        db = firebase.firestore();
        isFirebaseAvailable = true;
        return true;
      }

      if (config && config.apiKey && !config.apiKey.includes("PEGA_AQUI")) {
        firebase.initializeApp(config);
        db = firebase.firestore();
        isFirebaseAvailable = true;
        console.log("🔥 Firebase inicializado con éxito para el proyecto:", config.projectId);
        return true;
      }
    }
  } catch (error) {
    console.warn("⚠️ Error al inicializar Firebase:", error);
  }
  return false;
}

// Carga asíncrona de credenciales desde Vercel Serverless Function (/api/config)
async function loadFirebaseConfig() {
  // 1. Intentar cargar desde el endpoint serverless de Vercel
  try {
    const res = await fetch("/api/config", { cache: "no-store" });
    if (res.ok) {
      const serverConfig = await res.json();
      if (serverConfig.apiKey) {
        firebaseConfig = serverConfig;
        return setupFirebase(firebaseConfig);
      }
    }
  } catch (e) {
    // Modo local estático sin servidor
  }

  // 2. Si no hay endpoint serverless, intentar con la configuración directa
  return setupFirebase(firebaseConfig);
}

// Iniciar intento de carga inmediato
const firebaseReadyPromise = loadFirebaseConfig();
