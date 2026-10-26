/**
 * Balón de Oro 2026 - Aplicación Web Responsive para Diarios Digitales
 * Votación oficial con formato de tarjetas, bloqueo por IP y gráficos interactivos.
 */

// Lista oficial de los 30 nominados al Balón de Oro 2026 con metadatos para fotos libres
const NOMINEES_DATA = [
  {
    id: "jude-bellingham",
    name: "Jude Bellingham",
    club: "Real Madrid",
    bio: "Mediocampista todoterreno inglés. Combina despliegue físico, lectura táctica privilegiada y una extraordinaria llegada al área rival con goles decisivos.",
    wikiSlug: "Jude_Bellingham",
    wikiSlugEs: "Jude_Bellingham",
    fileName: "Jude_Bellingham_2024.jpg"
  },
  {
    id: "pau-cubarsi",
    name: "Pau Cubarsí",
    club: "Barcelona",
    bio: "Zaguero central de pulida técnica y precisión milimétrica en salida de balón. Una de las mayores joyas defensivas surgidas de La Masia con madurez de veterano.",
    wikiSlug: "Pau_Cubarsí",
    wikiSlugEs: "Pau_Cubarsí",
    fileName: "Pau_Cubarsi_2024_(cropped).jpg"
  },
  {
    id: "marc-cucurella",
    name: "Marc Cucurella",
    club: "Chelsea/Real Madrid",
    bio: "Lateral izquierdo incansable, de despliegue vertiginoso por la banda, solvencia en los duelos individuales y un temperamento competitivo ganador.",
    wikiSlug: "Marc_Cucurella",
    wikiSlugEs: "Marc_Cucurella",
    fileName: "Marc_Cucurella_2024.jpg"
  },
  {
    id: "ousmane-dembele",
    name: "Ousmane Dembélé",
    club: "PSG",
    bio: "Extremo desequilibrante, ambidiestro y puro regate. Su capacidad para desbordar y asistir genera constante peligro en el ataque del París Saint-Germain.",
    wikiSlug: "Ousmane_Dembélé",
    wikiSlugEs: "Ousmane_Dembélé",
    fileName: "Ousmane_Dembélé_2018.jpg"
  },
  {
    id: "luis-diaz",
    name: "Luis Díaz",
    club: "Bayern Múnich",
    bio: "Atacante colombiano veloz y punzante. Maestro en el mano a mano y de definición contundente que marca la diferencia en las grandes citas europeas.",
    wikiSlug: "Luis_Díaz_(footballer,_born_1997)",
    wikiSlugEs: "Luis_Díaz",
    fileName: "Luis_Díaz_2023.jpg"
  },
  {
    id: "bruno-fernandes",
    name: "Bruno Fernandes",
    club: "Manchester United",
    bio: "Capitán y cerebro creativo de los Red Devils. Especialista en pases entre líneas, lanzamientos de media distancia y un liderazgo vocal infatigable.",
    wikiSlug: "Bruno_Fernandes",
    wikiSlugEs: "Bruno_Fernandes",
    fileName: "Bruno_Fernandes_2023.jpg"
  },
  {
    id: "erling-haaland",
    name: "Erling Haaland",
    club: "Manchester City",
    bio: "Letal ariete noruego y demoledor goleador de área. Potencia física abrumadora y un instinto asesino para pulverizar récords en Premier League y Champions.",
    wikiSlug: "Erling_Haaland",
    wikiSlugEs: "Erling_Haaland",
    fileName: "Erling_Haaland_2023_(cropped-v2).jpg"
  },
  {
    id: "gabriel",
    name: "Gabriel",
    club: "Arsenal",
    bio: "Pilar de la sólida defensa de los Gunners. Destaca por su poderío aéreo en ambas áreas, solvencia en la marca y jerarquía en momentos de alta tensión.",
    wikiSlug: "Gabriel_Magalhães",
    wikiSlugEs: "Gabriel_Magalhães",
    fileName: "Gabriel_Magalhães_2023.jpg"
  },
  {
    id: "harry-kane",
    name: "Harry Kane",
    club: "Bayern Múnich",
    bio: "Centrodelantero de jerarquía mundial. Además de su letal puntería frente a los tres palos, actúa como armador y eje con una visión de juego excelsa.",
    wikiSlug: "Harry_Kane",
    wikiSlugEs: "Harry_Kane",
    fileName: "Harry_Kane_2023.jpg"
  },
  {
    id: "achraf-hakimi",
    name: "Achraf Hakimi",
    club: "PSG",
    bio: "Uno de los laterales derechos más veloces e influyentes del planeta. Imparable en transiciones rápidas y clave en el circuito ofensivo y defensivo.",
    wikiSlug: "Achraf_Hakimi",
    wikiSlugEs: "Achraf_Hakimi",
    fileName: "Achraf_Hakimi_2022.jpg"
  },
  {
    id: "lamine-yamal",
    name: "Lamine Yamal",
    club: "Barcelona",
    bio: "El prodigio zurdo del fútbol mundial. Desparrama rivales con fantasía, visión periférica y madurez precoz que encandila a los aficionados del planeta.",
    wikiSlug: "Lamine_Yamal",
    wikiSlugEs: "Lamine_Yamal",
    fileName: "Lamine_Yamal_2024_(cropped).jpg"
  },
  {
    id: "khvicha-kvaratskhelia",
    name: "Khvicha Kvaratskhelia",
    club: "PSG",
    bio: "Habilidoso extremo georgiano de regate impredecible y cambio de ritmo infernal. Dueño de una pegada temible con ambos perfiles.",
    wikiSlug: "Khvicha_Kvaratskhelia",
    wikiSlugEs: "Khvicha_Kvaratskhelia",
    fileName: "Khvicha_Kvaratskhelia_2023.jpg"
  },
  {
    id: "marquinhos",
    name: "Marquinhos",
    club: "PSG",
    bio: "Capitán y baluarte de la zaga parisina. Referente de liderazgo, anticipación, quite limpio y templanza en competiciones internacionales de élite.",
    wikiSlug: "Marquinhos",
    wikiSlugEs: "Marquinhos",
    fileName: "Marquinhos_2018.jpg"
  },
  {
    id: "sadio-mane",
    name: "Sadio Mané",
    club: "Al Nassr",
    bio: "Estrella senegalesa consagrada. Fuerza física, aceleración letal y un compromiso colectivo que sigue deslumbrando y marcando época.",
    wikiSlug: "Sadio_Mané",
    wikiSlugEs: "Sadio_Mané",
    fileName: "Sadio_Mané_2022.jpg"
  },
  {
    id: "lautaro-martinez",
    name: "Lautaro Martínez",
    club: "Inter",
    bio: "Goleador y líder indiscutido del Inter y la Selección Argentina. Férreo en el cuerpo a cuerpo, definidor voraz y capitán ejemplar en citas cumbres.",
    wikiSlug: "Lautaro_Martínez",
    wikiSlugEs: "Lautaro_Martínez",
    fileName: "Lautaro_Martínez_2022.jpg"
  },
  {
    id: "kylian-mbappe",
    name: "Kylian Mbappé",
    club: "Real Madrid",
    bio: "Velocidad explosiva y definición quirúrgica. El astro francés deslumbra con su capacidad para definir partidos en un instante de genialidad pura.",
    wikiSlug: "Kylian_Mbappé",
    wikiSlugEs: "Kylian_Mbappé",
    fileName: "2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank–129_(cropped).jpg"
  },
  {
    id: "nuno-mendes",
    name: "Nuno Mendes",
    club: "PSG",
    bio: "Marcador de punta portugués de altísima velocidad, solidez en el retroceso defensivo y gran capacidad para asociarse y centrar con precisión.",
    wikiSlug: "Nuno_Mendes_(footballer,_born_2002)",
    wikiSlugEs: "Nuno_Mendes",
    fileName: "Nuno_Mendes_2022.jpg"
  },
  {
    id: "lionel-messi",
    name: "Lionel Messi",
    club: "Inter Miami",
    bio: "El máximo ganador histórico del Balón de Oro. Su magia incombustible, visión panorámica del juego y tiro libre impecable continúan deleitando al mundo.",
    wikiSlug: "Lionel_Messi",
    wikiSlugEs: "Lionel_Messi",
    fileName: "Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg"
  },
  {
    id: "michael-olise",
    name: "Michael Olise",
    club: "Bayern Múnich",
    bio: "Extremo exquisito dotado de una zurda de seda. Desborde, pausa elegante y pegada en pelota parada que aporta frescura y vértigo ofensivo.",
    wikiSlug: "Michael_Olise",
    wikiSlugEs: "Michael_Olise",
    fileName: "Michael_Olise_2023.jpg"
  },
  {
    id: "joao-neves",
    name: "Joao Neves",
    club: "PSG",
    bio: "Volante central dinámico e inteligente. Recuperador feroz, seguro en la distribución corta y con despliegue incansable a lo largo de los 90 minutos.",
    wikiSlug: "João_Neves_(footballer)",
    wikiSlugEs: "João_Neves",
    fileName: "Joao_Neves_2024.jpg"
  },
  {
    id: "willian-pacho",
    name: "Willian Pacho",
    club: "PSG",
    bio: "Central ecuatoriano de enorme fortaleza física, corte limpio y templanza para neutralizar a los atacantes más temibles de Europa.",
    wikiSlug: "Willian_Pacho",
    wikiSlugEs: "Willian_Pacho",
    fileName: "Willian_Pacho_2023.jpg"
  },
  {
    id: "julian-quinones",
    name: "Julián Quiñones",
    club: "Al Qadsiah",
    bio: "Delantero de potencia deslumbrante, capacidad goleadora y gran entrega táctica que continúa dejando su huella internacional con determinación.",
    wikiSlug: "Julián_Quiñones",
    wikiSlugEs: "Julián_Quiñones",
    fileName: "Julián_Quiñones_2023.jpg"
  },
  {
    id: "declan-rice",
    name: "Declan Rice",
    club: "Arsenal",
    bio: "Mediocampista británico con dominio absoluto de la zona medular. Gran quite, balance táctico impecable e imponente zancada box-to-box.",
    wikiSlug: "Declan_Rice",
    wikiSlugEs: "Declan_Rice",
    fileName: "Declan_Rice_2023.jpg"
  },
  {
    id: "rodri",
    name: "Rodri",
    club: "Manchester City/Barcelona",
    bio: "El director de orquesta por excelencia del fútbol contemporáneo. Inteligencia posicional, jerarquía, golazos desde fuera del área y dueño de los tiempos.",
    wikiSlug: "Rodri_(footballer,_born_1996)",
    wikiSlugEs: "Rodrigo_Hernández_Cascante",
    fileName: "Rodri_2024.jpg"
  },
  {
    id: "fabian-ruiz",
    name: "Fabián Ruiz",
    club: "PSG",
    bio: "Volante estilista con zurda privilegiada. Manejo sutil del balón, llegada al gol desde segunda línea y consagrado en las citas internacionales de gala.",
    wikiSlug: "Fabián_Ruiz",
    wikiSlugEs: "Fabián_Ruiz",
    fileName: "Fabian_Ruiz_2024.jpg"
  },
  {
    id: "ferran-torres",
    name: "Ferrán Torres",
    club: "Barcelona/PSG",
    bio: "Atacante versátil capaz de desempeñarse en todo el frente ofensivo. Destaca por sus diagonales inteligentes, instinto de gol y sacrificio de presión.",
    wikiSlug: "Ferran_Torres",
    wikiSlugEs: "Ferran_Torres",
    fileName: "Ferran_Torres_2022.jpg"
  },
  {
    id: "william-saliba",
    name: "William Saliba",
    club: "Arsenal",
    bio: "Uno de los defensores más elegantes y efectivos de Europa. Rápido en la cobertura, sereno bajo presión e inquebrantable en el uno contra uno.",
    wikiSlug: "William_Saliba",
    wikiSlugEs: "William_Saliba",
    fileName: "William_Saliba_2023.jpg"
  },
  {
    id: "dayot-upamecano",
    name: "Dayot Upamecano",
    club: "Bayern Múnich",
    bio: "Zaguero de gran presencia física, veloz en distancias largas y con una sólida anticipación en la última línea defensiva bávara.",
    wikiSlug: "Dayot_Upamecano",
    wikiSlugEs: "Dayot_Upamecano",
    fileName: "Dayot_Upamecano_2022.jpg"
  },
  {
    id: "vinicius-jr",
    name: "Vinicius Jr",
    club: "Real Madrid",
    bio: "Acrobático y punzante extremo brasileño. Su desequilibrio individual, velocidad pura y protagonismo en las finales lo sitúan en la cúspide mundial.",
    wikiSlug: "Vinícius_Júnior",
    wikiSlugEs: "Vinícius_Júnior",
    fileName: "Vinicius_Junior_2021.jpg"
  },
  {
    id: "vitinha",
    name: "Vitinha",
    club: "PSG",
    bio: "Brújula del mediocampo parisino. Protege la posesión bajo cualquier presión, aporta ritmo dinámico y claridad magistral en la creación de juego.",
    wikiSlug: "Vitinha_(footballer,_born_2000)",
    wikiSlugEs: "Vitinha",
    fileName: "Vitinha_2022.jpg"
  }
];

// Constantes de almacenamiento (Versión limpia sin datos ficticios)
const STORAGE_KEYS = {
  VOTES_DATA: "balondeoro_2026_real_votes_v2",
  USER_IP: "balondeoro_2026_client_ip",
  VOTED_IPS: "balondeoro_2026_blocked_ips",
  HAS_VOTED: "balondeoro_2026_voted_player_id",
  VOTE_TIMESTAMP: "balondeoro_2026_vote_time",
  PHOTOS_CACHE: "balondeoro_2026_photos_cache"
};

// Utilidad para verificar si Firebase está configurado con credenciales válidas
function hasValidFirebase() {
  return typeof isFirebaseAvailable !== "undefined" && 
         isFirebaseAvailable && 
         db && 
         typeof firebaseConfig !== "undefined" && 
         firebaseConfig.apiKey && 
         !firebaseConfig.apiKey.includes("PEGA_AQUI");
}

function sanitizeIpForFirestore(ip) {
  if (!ip) return "ip_unknown";
  return "ip_" + ip.replace(/[\.\:\/\s]/g, "_");
}

// Estado global
const state = {
  userIp: null,
  hasVoted: false,
  votedPlayerId: null,
  votes: {},
  photosCache: {},
  filterClub: "ALL",
  searchTerm: "",
  chartRange: "top10",
  chartInstance: null
};

/**
 * Generador de avatar SVG en Base64 infalible
 */
function createFallbackAvatarSvg(name, club) {
  const initials = name
    .split(" ")
    .filter(n => n.length > 0)
    .slice(0, 2)
    .map(n => n[0].toUpperCase())
    .join("");

  const safeClub = (club || "BALÓN DE ORO 2026").replace(/&/g, "&amp;");
  const safeName = name.replace(/&/g, "&amp;");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#141e33"/>
        <stop offset="50%" stop-color="#0e1526"/>
        <stop offset="100%" stop-color="#080c16"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fae298"/>
        <stop offset="50%" stop-color="#d4af37"/>
        <stop offset="100%" stop-color="#a47b19"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg)"/>
    <circle cx="200" cy="115" r="58" fill="#1b253d" stroke="url(#gold)" stroke-width="3"/>
    <text x="200" y="128" font-family="'Cinzel', Georgia, serif" font-size="34" font-weight="900" fill="url(#gold)" text-anchor="middle">${initials}</text>
    <text x="200" y="210" font-family="'Montserrat', sans-serif" font-size="16" font-weight="700" fill="#f8fafc" text-anchor="middle">${safeName}</text>
    <text x="200" y="235" font-family="'Montserrat', sans-serif" font-size="12" font-weight="600" fill="#d4af37" text-anchor="middle">${safeClub}</text>
    <text x="200" y="260" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" fill="#64748b" letter-spacing="1.5" text-anchor="middle">NOMINADO OFICIAL</text>
  </svg>`;

  try {
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
  } catch (e) {
    return "";
  }
}

/**
 * Obtener la mejor URL de foto para el jugador
 */
function getPlayerPhotoUrl(player) {
  // 1. Revisar caché en memoria/localStorage
  if (state.photosCache[player.id]) {
    return state.photosCache[player.id];
  }

  // 2. Usar Special:FilePath de Wikimedia Commons con ancho optimizado
  const encodedFile = encodeURIComponent(player.fileName);
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodedFile}?width=500`;
}

/**
 * Resolver dinámicamente imágenes de Wikipedia si falla el FilePath
 */
async function resolvePlayerPhoto(player) {
  if (state.photosCache[player.id]) return state.photosCache[player.id];

  const slugsToTry = [player.wikiSlug, player.wikiSlugEs, player.name.replace(/ /g, "_")].filter(Boolean);

  for (const slug of slugsToTry) {
    try {
      const endpoints = [
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
        `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`
      ];

      for (const endpoint of endpoints) {
        const res = await fetch(endpoint, { cache: "force-cache" });
        if (res.ok) {
          const data = await res.json();
          const imgUrl = (data.thumbnail && data.thumbnail.source) || (data.originalimage && data.originalimage.source);
          if (imgUrl) {
            state.photosCache[player.id] = imgUrl;
            savePhotosCache();
            return imgUrl;
          }
        }
      }
    } catch (e) {
      // Continuar con el siguiente intento
    }
  }

  return null;
}

/**
 * Carga e inicialización
 */
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Renderizado inmediato de las 30 tarjetas de jugadores (0 ms, sin bloqueos)
  initVotesData();
  loadPhotosCache();
  populateClubFilter();
  renderCards();
  initEventListeners();
  initIframeAutoResizer();
  updateStatsAndChart();

  // 2. Verificación de IP en segundo plano
  await checkUserIpAndVoteStatus();

  // 3. Esperar inicialización de Firebase y conectar listener en tiempo real
  if (typeof firebaseReadyPromise !== "undefined") {
    try {
      await firebaseReadyPromise;
    } catch (e) {
      console.warn("Firebase promise warning:", e);
    }
  }

  initFirebaseRealtimeSync();

  // 4. Resolver fotos de Wikipedia en paralelo
  fetchMissingPhotos();
});

/**
 * Sincronización en tiempo real con Cloud Firestore
 */
function initFirebaseRealtimeSync() {
  if (!hasValidFirebase()) {
    console.log("ℹ️ Firebase Firestore en espera de credenciales. Operando con estado local.");
    return;
  }

  try {
    const totalsDocRef = db.collection("totals").doc("balondeoro2026");

    // Escuchar cambios en vivo emitidos por los votos oficiales
    totalsDocRef.onSnapshot(doc => {
      if (doc && doc.exists) {
        const data = doc.data();
        let changed = false;

        NOMINEES_DATA.forEach(player => {
          const val = typeof data[player.id] === "number" ? data[player.id] : 0;
          if (state.votes[player.id] !== val) {
            state.votes[player.id] = val;
            changed = true;
          }
        });

        if (changed || doc.metadata.hasPendingWrites) {
          saveVotesData();
          renderCards();
          updateStatsAndChart();
        }
      }
    }, error => {
      console.warn("Error en suscripción de Firestore:", error);
    });
  } catch (err) {
    console.warn("Fallo al inicializar sincronización Firebase:", err);
  }
}

function loadPhotosCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PHOTOS_CACHE);
    if (raw) state.photosCache = JSON.parse(raw);
  } catch (e) {
    state.photosCache = {};
  }
}

function savePhotosCache() {
  try {
    localStorage.setItem(STORAGE_KEYS.PHOTOS_CACHE, JSON.stringify(state.photosCache));
  } catch (e) {}
}

/**
 * Consulta la API pública de Wikipedia para asegurar fotos de alta calidad
 */
async function fetchMissingPhotos() {
  const promises = NOMINEES_DATA.map(async player => {
    const imgEl = document.getElementById(`player-img-${player.id}`);
    if (!imgEl) return;

    // Si ya tiene una foto cargada con éxito, no hacer nada
    if (imgEl.complete && imgEl.naturalWidth > 0 && !imgEl.dataset.isFallback) {
      return;
    }

    const resolvedUrl = await resolvePlayerPhoto(player);
    if (resolvedUrl && imgEl) {
      imgEl.src = resolvedUrl;
      imgEl.dataset.isFallback = "false";
    }
  });

  await Promise.allSettled(promises);
}

function initVotesData() {
  const savedVotes = localStorage.getItem(STORAGE_KEYS.VOTES_DATA);
  if (savedVotes) {
    try {
      state.votes = JSON.parse(savedVotes);
    } catch (e) {
      state.votes = {};
    }
  }

  // Todos los jugadores inician estrictamente en 0 votos (sin datos simulados)
  NOMINEES_DATA.forEach(player => {
    if (typeof state.votes[player.id] !== "number") {
      state.votes[player.id] = 0;
    }
  });

  saveVotesData();
}

function saveVotesData() {
  localStorage.setItem(STORAGE_KEYS.VOTES_DATA, JSON.stringify(state.votes));
}

/**
 * Verificación de IP y bloqueo de votos
 */
async function checkUserIpAndVoteStatus() {
  const statusText = document.getElementById("statusText");
  const statusDot = document.getElementById("statusDot");

  try {
    // 1. Intentar obtener la IP real a través de la función Serverless de Vercel
    try {
      const vercelIpRes = await fetch("/api/get-ip");
      if (vercelIpRes.ok) {
        const ipData = await vercelIpRes.json();
        if (ipData.ip && ipData.ip !== "127.0.0.1") {
          state.userIp = ipData.ip;
          localStorage.setItem(STORAGE_KEYS.USER_IP, state.userIp);
        }
      }
    } catch (e) {
      // Entorno local sin endpoint serverless activo
    }

    // 2. Si aún no tenemos IP, consultar servicio externo con timeout
    if (!state.userIp || state.userIp === "127.0.0.1") {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch("https://api64.ipify.org?format=json", {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        state.userIp = data.ip;
        localStorage.setItem(STORAGE_KEYS.USER_IP, state.userIp);
      }
    }
  } catch (err) {
    console.warn("Detección de IP externa:", err);
  }

  if (!state.userIp) {
    let cachedIp = localStorage.getItem(STORAGE_KEYS.USER_IP);
    if (!cachedIp) {
      cachedIp = "local-" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem(STORAGE_KEYS.USER_IP, cachedIp);
    }
    state.userIp = cachedIp;
  }

  let blockedIps = {};
  try {
    blockedIps = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTED_IPS) || "{}");
  } catch (e) {
    blockedIps = {};
  }

  const directVotedPlayer = localStorage.getItem(STORAGE_KEYS.HAS_VOTED);
  let ipVoteRecord = blockedIps[state.userIp];

  // Si Firebase está activo, verificar si la IP ya votó en la base de datos central
  if (hasValidFirebase() && !ipVoteRecord && !directVotedPlayer) {
    try {
      const sanitizedDocId = sanitizeIpForFirestore(state.userIp);
      const voteDoc = await db.collection("votes").doc(sanitizedDocId).get();
      if (voteDoc.exists) {
        const data = voteDoc.data();
        ipVoteRecord = {
          playerId: data.playerId,
          playerName: data.playerName,
          timestamp: data.timestamp
        };
        // Sincronizar al storage local
        blockedIps[state.userIp] = ipVoteRecord;
        localStorage.setItem(STORAGE_KEYS.VOTED_IPS, JSON.stringify(blockedIps));
        localStorage.setItem(STORAGE_KEYS.HAS_VOTED, data.playerId);
      }
    } catch (e) {
      console.warn("Consulta de voto previo en Firestore:", e);
    }
  }

  if (ipVoteRecord || directVotedPlayer) {
    state.hasVoted = true;
    state.votedPlayerId = (ipVoteRecord && ipVoteRecord.playerId) || directVotedPlayer;

    statusDot.classList.add("voted");
    const votedPlayer = NOMINEES_DATA.find(p => p.id === state.votedPlayerId);
    const playerName = votedPlayer ? votedPlayer.name : "tu candidato";
    statusText.innerHTML = `Ya votaste por <strong>${playerName}</strong>. Voto registrado por tu IP.`;
    
    const shortcutBtn = document.getElementById("viewChartShortcutBtn");
    if (shortcutBtn) shortcutBtn.style.display = "inline-block";
  } else {
    state.hasVoted = false;
    statusText.textContent = `IP verificada (${formatIpDisplay(state.userIp)}). Podés emitir tu voto una única vez.`;
  }

  renderCards();
  updateUserVotePill();
}

function formatIpDisplay(ip) {
  if (!ip) return "Anon";
  if (ip.startsWith("local-")) return "Dispositivo verificado";
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.*.*`;
  }
  return ip.substring(0, 8) + "...";
}

/**
 * Renderizado de Tarjetas
 */
function renderCards() {
  const grid = document.getElementById("cardsGrid");
  const countBadge = document.getElementById("playersCount");
  const noResults = document.getElementById("noResults");
  
  const totalVotes = getTotalVotes();

  const filtered = NOMINEES_DATA.filter(player => {
    const matchesClub = state.filterClub === "ALL" || player.club.includes(state.filterClub);
    const searchLow = state.searchTerm.toLowerCase().trim();
    const matchesSearch = !searchLow ||
      player.name.toLowerCase().includes(searchLow) ||
      player.club.toLowerCase().includes(searchLow) ||
      player.bio.toLowerCase().includes(searchLow);

    return matchesClub && matchesSearch;
  });

  countBadge.textContent = `Mostrando ${filtered.length} de ${NOMINEES_DATA.length} nominados`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  grid.innerHTML = filtered.map(player => {
    const isVoted = state.hasVoted && state.votedPlayerId === player.id;
    const playerVotes = state.votes[player.id] || 0;
    const percentage = totalVotes > 0 ? ((playerVotes / totalVotes) * 100).toFixed(1) : "0.0";
    const photoUrl = getPlayerPhotoUrl(player);
    const fallbackSrc = createFallbackAvatarSvg(player.name, player.club);

    return `
      <article class="player-card ${isVoted ? 'is-voted-by-user' : ''}" data-player-id="${player.id}">
        <div class="card-media">
          <img 
            id="player-img-${player.id}"
            class="player-photo" 
            src="${photoUrl}" 
            alt="Foto de ${player.name}" 
            loading="lazy"
            referrerpolicy="no-referrer"
            crossorigin="anonymous"
            data-fallback="${fallbackSrc}"
            onerror="handleImageError(this, '${player.id}')"
          >
          <div class="card-media-overlay"></div>
          <span class="club-badge">
            <span class="club-badge-icon"></span>
            ${player.club}
          </span>
        </div>

        <div class="card-body">
          <h2 class="player-name">${player.name}</h2>
          <p class="player-bio">${player.bio}</p>

          ${state.hasVoted ? `
            <div class="vote-progress-wrap" title="${playerVotes.toLocaleString()} votos (${percentage}%)">
              <div class="vote-progress-bar" style="width: ${percentage}%"></div>
              <div class="vote-progress-labels">
                <span>${percentage}%</span>
                <span>${playerVotes.toLocaleString()} votos</span>
              </div>
            </div>
          ` : ''}

          <button 
            class="vote-btn ${isVoted ? 'is-voted' : ''}" 
            data-player-id="${player.id}"
            ${state.hasVoted ? 'disabled' : ''}
          >
            ${isVoted ? `
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Votado por vos</span>
            ` : state.hasVoted ? `
              <span>Votación cerrada</span>
            ` : `
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span>Votar a este jugador</span>
            `}
          </button>
        </div>
      </article>
    `;
  }).join("");

  notifyIframeResize();
}

/**
 * Manejo de error de imagen con fallback inteligente a API de Wikipedia
 */
window.handleImageError = function(img, playerId) {
  const fallback = img.dataset.fallback;
  const player = NOMINEES_DATA.find(p => p.id === playerId);

  // Evitar bucle infinito
  img.onerror = null;

  // Si aún no hemos resuelto via API de Wikipedia, intentar resolverlo ahora
  if (player && !img.dataset.hasTriedWiki) {
    img.dataset.hasTriedWiki = "true";
    resolvePlayerPhoto(player).then(resolvedUrl => {
      if (resolvedUrl) {
        img.src = resolvedUrl;
      } else if (fallback) {
        img.src = fallback;
        img.dataset.isFallback = "true";
      }
    }).catch(() => {
      if (fallback) {
        img.src = fallback;
        img.dataset.isFallback = "true";
      }
    });
  } else if (fallback) {
    img.src = fallback;
    img.dataset.isFallback = "true";
  }
};

/**
 * Acción de Votar
 */
async function handleVote(playerId) {
  if (state.hasVoted) {
    alert("Ya has emitido tu voto desde esta dirección IP.");
    return;
  }

  const player = NOMINEES_DATA.find(p => p.id === playerId);
  if (!player) return;

  // Actualizar estado local inmediatamente
  state.votes[playerId] = (state.votes[playerId] || 0) + 1;
  saveVotesData();

  let blockedIps = {};
  try {
    blockedIps = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTED_IPS) || "{}");
  } catch (e) {
    blockedIps = {};
  }

  const now = new Date().toISOString();
  blockedIps[state.userIp] = {
    playerId: playerId,
    playerName: player.name,
    timestamp: now
  };

  localStorage.setItem(STORAGE_KEYS.VOTED_IPS, JSON.stringify(blockedIps));
  localStorage.setItem(STORAGE_KEYS.HAS_VOTED, playerId);
  localStorage.setItem(STORAGE_KEYS.VOTE_TIMESTAMP, now);

  state.hasVoted = true;
  state.votedPlayerId = playerId;

  // Registro en la base de datos de Firebase Firestore
  if (hasValidFirebase()) {
    try {
      const sanitizedDocId = sanitizeIpForFirestore(state.userIp);
      const batch = db.batch();

      // 1. Guardar documento de auditoría de voto por IP única
      const voteRef = db.collection("votes").doc(sanitizedDocId);
      batch.set(voteRef, {
        ip: state.userIp,
        playerId: playerId,
        playerName: player.name,
        club: player.club,
        userAgent: navigator.userAgent,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      // 2. Incrementar atómicamente el contador total del jugador en Firestore
      const totalsRef = db.collection("totals").doc("balondeoro2026");
      batch.set(totalsRef, {
        [playerId]: firebase.firestore.FieldValue.increment(1),
        totalVotes: firebase.firestore.FieldValue.increment(1),
        lastVoteAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      await batch.commit();
      console.log("✅ Voto registrado exitosamente en Firebase Firestore");
    } catch (firebaseErr) {
      console.error("Error al registrar voto en Firebase:", firebaseErr);
    }
  }

  const statusText = document.getElementById("statusText");
  const statusDot = document.getElementById("statusDot");
  statusDot.classList.add("voted");
  statusText.innerHTML = `¡Gracias por participar! Votaste por <strong>${player.name}</strong>.`;

  const shortcutBtn = document.getElementById("viewChartShortcutBtn");
  if (shortcutBtn) shortcutBtn.style.display = "inline-block";

  renderCards();
  updateStatsAndChart();
  showVoteConfirmationModal(player);
}

function showVoteConfirmationModal(player) {
  const modal = document.getElementById("voteModal");
  const modalPreview = document.getElementById("modalPlayerPreview");
  const modalIpInfo = document.getElementById("modalIpInfo");
  const modalVoteMessage = document.getElementById("modalVoteMessage");

  modalVoteMessage.textContent = `Tu elección por ${player.name} ha sido registrada satisfactoriamente.`;
  modalIpInfo.textContent = `Voto asegurado para la IP ${formatIpDisplay(state.userIp)}.`;

  const photoUrl = state.photosCache[player.id] || getPlayerPhotoUrl(player);
  const fallback = createFallbackAvatarSvg(player.name, player.club);

  modalPreview.innerHTML = `
    <img 
      class="modal-preview-avatar" 
      src="${photoUrl}" 
      alt="${player.name}" 
      referrerpolicy="no-referrer"
      onerror="this.onerror=null; this.src='${fallback}'"
    >
    <div class="modal-preview-info">
      <h4>${player.name}</h4>
      <p>${player.club}</p>
    </div>
  `;

  modal.style.display = "flex";
}

function closeVoteModal() {
  document.getElementById("voteModal").style.display = "none";
}

const SHARE_TARGET_URL = "https://www.lagaceta.com.ar/nota/1159704/deportes/vota-la-gaceta-elegi-entre-30-candidatos-quien-merece-ganar-balon-oro-2026.html";

function openShareDialog() {
  const shareData = {
    title: "Votá en LA GACETA: elegí quién merece ganar el Balón de Oro 2026",
    text: "¡Votá al jugador que querés que gane el Balón de Oro 2026 en LA GACETA y mirá la tendencia en vivo!",
    url: SHARE_TARGET_URL
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {
      openShareModalFallback();
    });
  } else {
    openShareModalFallback();
  }
}

function openShareModalFallback() {
  const modal = document.getElementById("shareModal");
  const currentUrl = encodeURIComponent(SHARE_TARGET_URL);
  const shareText = encodeURIComponent("Votá en LA GACETA al jugador que querés que gane el Balón de oro 2026. ¡Mirá la tendencia en vivo!");

  document.getElementById("shareWhatsapp").href = `https://api.whatsapp.com/send?text=${shareText}%20${currentUrl}`;
  document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;
  document.getElementById("shareFacebook").href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

  modal.style.display = "flex";
}

function closeShareModal() {
  document.getElementById("shareModal").style.display = "none";
  document.getElementById("copyFeedbackToast").style.display = "none";
}

async function copyPageLink() {
  const toast = document.getElementById("copyFeedbackToast");
  const copyBtnText = document.getElementById("copyLinkText");

  try {
    await navigator.clipboard.writeText(SHARE_TARGET_URL);
    copyBtnText.textContent = "¡Copiado!";
    toast.style.display = "block";
    setTimeout(() => {
      copyBtnText.textContent = "Copiar Enlace";
      toast.style.display = "none";
    }, 3000);
  } catch (err) {
    const input = document.createElement("input");
    input.value = SHARE_TARGET_URL;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    toast.style.display = "block";
  }
}

/**
 * Gráficos y Estadísticas
 */
function getTotalVotes() {
  return Object.values(state.votes).reduce((sum, v) => sum + v, 0);
}

function updateStatsAndChart() {
  const totalVotes = getTotalVotes();
  document.getElementById("totalVotesCount").textContent = totalVotes.toLocaleString();

  let maxVotes = 0;
  let leaderPlayer = null;
  NOMINEES_DATA.forEach(player => {
    const v = state.votes[player.id] || 0;
    if (v > maxVotes) {
      maxVotes = v;
      leaderPlayer = player;
    }
  });

  if (leaderPlayer && maxVotes > 0) {
    const leaderPct = totalVotes > 0 ? ((maxVotes / totalVotes) * 100).toFixed(1) : 0;
    document.getElementById("leadingPlayerName").textContent = `${leaderPlayer.name} (${leaderPct}%)`;
  } else {
    document.getElementById("leadingPlayerName").textContent = totalVotes > 0 ? "Empate técnico" : "Aún sin votos";
  }

  updateUserVotePill();
  renderChart();
}

function updateUserVotePill() {
  const pill = document.getElementById("userVotePill");
  const val = document.getElementById("userVoteName");
  if (state.hasVoted && state.votedPlayerId) {
    const player = NOMINEES_DATA.find(p => p.id === state.votedPlayerId);
    if (player) {
      pill.style.display = "flex";
      val.textContent = player.name;
    }
  } else {
    pill.style.display = "none";
  }
}

function renderChart() {
  const ctx = document.getElementById("votesChart");
  if (!ctx || typeof Chart === "undefined") return;

  const sorted = [...NOMINEES_DATA].sort((a, b) => {
    return (state.votes[b.id] || 0) - (state.votes[a.id] || 0);
  });

  const datasetList = state.chartRange === "top10" ? sorted.slice(0, 10) : sorted;
  const labels = datasetList.map(p => p.name);
  const data = datasetList.map(p => state.votes[p.id] || 0);
  const totalVotes = getTotalVotes();

  const backgroundColors = datasetList.map(p => {
    if (state.hasVoted && p.id === state.votedPlayerId) {
      return "#f7e089";
    }
    return "rgba(212, 175, 55, 0.75)";
  });

  const borderColors = datasetList.map(p => {
    if (state.hasVoted && p.id === state.votedPlayerId) {
      return "#ffffff";
    }
    return "#aa820a";
  });

  if (state.chartInstance) {
    state.chartInstance.destroy();
  }

  state.chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Cantidad de Votos",
        data: data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1.5,
        borderRadius: 6,
        barThickness: state.chartRange === "top10" ? 22 : 12
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#131b2f",
          titleColor: "#f7e089",
          bodyColor: "#f8fafc",
          borderColor: "#d4af37",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: function(context) {
              const val = context.raw || 0;
              const pct = totalVotes > 0 ? ((val / totalVotes) * 100).toFixed(1) : 0;
              return `${val.toLocaleString()} votos (${pct}%)`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.06)", drawBorder: false },
          ticks: {
            color: "#94a3b8",
            font: { family: "'Montserrat', sans-serif", size: 11 },
            callback: function(value) {
              return value >= 1000 ? (value / 1000) + 'k' : value;
            }
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            color: "#f8fafc",
            font: { family: "'Montserrat', sans-serif", size: 12, weight: "600" }
          }
        }
      }
    }
  });

  notifyIframeResize();
}

/**
 * Event Listeners & Filtros
 */
function populateClubFilter() {
  const select = document.getElementById("clubFilter");
  const clubs = new Set();

  NOMINEES_DATA.forEach(p => {
    p.club.split("/").forEach(c => clubs.add(c.trim()));
  });

  Array.from(clubs).sort().forEach(club => {
    const opt = document.createElement("option");
    opt.value = club;
    opt.textContent = club;
    select.appendChild(opt);
  });
}

function initEventListeners() {
  document.getElementById("cardsGrid").addEventListener("click", e => {
    const voteBtn = e.target.closest(".vote-btn");
    if (voteBtn && !voteBtn.disabled) {
      const playerId = voteBtn.dataset.playerId;
      handleVote(playerId);
    }
  });

  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", e => {
    state.searchTerm = e.target.value;
    clearBtn.style.display = state.searchTerm.length > 0 ? "block" : "none";
    renderCards();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchTerm = "";
    clearBtn.style.display = "none";
    renderCards();
    searchInput.focus();
  });

  document.getElementById("clubFilter").addEventListener("change", e => {
    state.filterClub = e.target.value;
    renderCards();
  });

  document.getElementById("resetSearchBtn").addEventListener("click", () => {
    searchInput.value = "";
    state.searchTerm = "";
    clearBtn.style.display = "none";
    document.getElementById("clubFilter").value = "ALL";
    state.filterClub = "ALL";
    renderCards();
  });

  document.querySelectorAll(".filter-tab-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      document.querySelectorAll(".filter-tab-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      state.chartRange = e.target.dataset.range;
      renderChart();
    });
  });

  document.getElementById("viewChartShortcutBtn").addEventListener("click", () => {
    document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("shareBtn").addEventListener("click", openShareDialog);

  document.getElementById("modalSeeResultsBtn").addEventListener("click", () => {
    closeVoteModal();
    document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("modalShareQuickBtn").addEventListener("click", () => {
    closeVoteModal();
    openShareDialog();
  });

  document.getElementById("closeShareModalBtn").addEventListener("click", closeShareModal);
  document.getElementById("copyLinkBtn").addEventListener("click", copyPageLink);

  window.addEventListener("click", e => {
    const voteModal = document.getElementById("voteModal");
    const shareModal = document.getElementById("shareModal");
    if (e.target === voteModal) closeVoteModal();
    if (e.target === shareModal) closeShareModal();
  });
}

function notifyIframeResize() {
  if (window.parent && window.parent !== window) {
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.parent.postMessage({
      type: "balon_oro_resize",
      height: height
    }, "*");
  }
}

function initIframeAutoResizer() {
  window.addEventListener("resize", () => {
    notifyIframeResize();
  });

  window.addEventListener("load", () => {
    setTimeout(notifyIframeResize, 500);
  });
}
