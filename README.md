# Votación Balón de Oro 2026 🏆

Aplicación web responsive en **HTML5, CSS3 y JavaScript puro** para que los lectores de un diario digital voten a su candidato favorito al Balón de Oro 2026. Diseñada específicamente para insertarse de manera fluida como `<iframe>` dentro de cualquier sitio web, CMS o nota periodística.

---

## 🌟 Características Principales

1. **Título Oficial**:
   - Cumple con la indicación exacta:  
     `"Votá al jugador que querés que gane el Balón de oro 2026"`
2. **Formato de Tarjetas Responsive**:
   - Grid adaptable a móviles, tablets y computadoras de escritorio.
   - Cada tarjeta contiene:
     - Foto de alta calidad con licencia libre (Wikimedia Commons) con fallback SVG en caso de problemas de red.
     - Nombre del jugador.
     - Club o clubes correspondientes.
     - Biografía breve y atractiva destacando su rendimiento y estilo de juego.
     - Botón interactivo de votación.
     - Barra dinámica de porcentaje de votos post-votación.
3. **Bloqueo de Voto Único por IP**:
   - Detección automática de la IP pública del lector mediante endpoint seguro HTTPS (`api64.ipify.org`).
   - Almacenamiento y bloqueo en `localStorage` tanto a nivel de IP como de huella de dispositivo.
   - Si el lector ya votó, el sistema deshabilita nuevos votos, resalta su elección y despliega las tendencias.
4. **Gráfico de Tendencia de Votos**:
   - Renderizado con **Chart.js**.
   - Gráfico de barras horizontales optimizado para pantallas estrechas e iframes.
   - Pestañas para alternar entre el **Top 10** y los **30 nominados completos**.
   - Métricas en tiempo real: Total de votos, líder actual y jugador votado por el usuario.
5. **Botón para Compartir al Final**:
   - Integración con la **Web Share API** nativa en dispositivos móviles (Android / iOS).
   - Modal de respaldo para computadoras de escritorio con enlaces directos a **WhatsApp**, **X (Twitter)**, **Facebook** y botón para **Copiar Enlace** con confirmación visual.
6. **Optimizado para Iframe (Embed)**:
   - Envío de mensajes `window.parent.postMessage` con la altura real (`balon_oro_resize`) para que el sitio padre adapte la altura automáticamente sin barras de scroll desagradables.
   - Búsqueda en tiempo real y filtro por club para facilitar la navegación rápida entre los 30 candidatos.

---

## 📋 Lista Oficial de los 30 Nominados Incluidos

1. Jude Bellingham *(Real Madrid)*
2. Pau Cubarsí *(Barcelona)*
3. Marc Cucurella *(Chelsea/Real Madrid)*
4. Ousmane Dembélé *(PSG)*
5. Luis Díaz *(Bayern Múnich)*
6. Bruno Fernandes *(Manchester United)*
7. Erling Haaland *(Manchester City)*
8. Gabriel *(Arsenal)*
9. Harry Kane *(Bayern Múnich)*
10. Achraf Hakimi *(PSG)*
11. Lamine Yamal *(Barcelona)*
12. Khvicha Kvaratskhelia *(PSG)*
13. Marquinhos *(PSG)*
14. Sadio Mané *(Al Nassr)*
15. Lautaro Martínez *(Inter)*
16. Kylian Mbappé *(Real Madrid)*
17. Nuno Mendes *(PSG)*
18. Lionel Messi *(Inter Miami)*
19. Michael Olise *(Bayern Múnich)*
20. Joao Neves *(PSG)*
21. Willian Pacho *(PSG)*
22. Julián Quiñones *(Al Qadsiah)*
23. Declan Rice *(Arsenal)*
24. Rodri *(Manchester City/Barcelona)*
25. Fabián Ruiz *(PSG)*
26. Ferrán Torres *(Barcelona/PSG)*
27. William Saliba *(Arsenal)*
28. Dayot Upamecano *(Bayern Múnich)*
29. Vinicius Jr *(Real Madrid)*
30. Vitinha *(PSG)*

---

## 🚀 Cómo Ejecutar y Probar Localmente

Podés abrir directamente el archivo `index.html` en cualquier navegador web moderno (haciendo doble clic en él o arrastrándolo a Chrome, Edge, Firefox, Safari).

Para simular el entorno de servidor (recomendado para verificar el comportamiento de iframe y llamadas HTTPS):

### Opción 1: Con Python (si está instalado)
```bash
python -m http.server 8000
```
Y abrir en el navegador: `http://localhost:8000/index.html`

### Opción 2: Con Node.js (npx serve)
```bash
npx serve .
```

### Opción 3: Probar la integración en un sitio web de ejemplo
Abrí `embed-example.html` para ver cómo se comporta dentro de un artículo de noticias.

---

## 🚀 Despliegue Seguro en Vercel (Sin exponer claves en GitHub)

Este proyecto está configurado para Vercel con **Serverless Functions** y **Variables de Entorno**:

1. Subí el código a un repositorio **Privado** en GitHub (las claves **no** están en el código gracias a `.gitignore`).
2. En [Vercel](https://vercel.com), hacé clic en **Add New...** -> **Project** e importá tu repositorio privado.
3. En la sección **Environment Variables**, agregá:
   * `FIREBASE_API_KEY`: Tu API Key de Firebase
   * `FIREBASE_AUTH_DOMAIN`: `balondeoro2026-ac02d.firebaseapp.com`
   * `FIREBASE_PROJECT_ID`: `balondeoro2026-ac02d`
   * `FIREBASE_STORAGE_BUCKET`: `balondeoro2026-ac02d.appspot.com`
   * `FIREBASE_MESSAGING_SENDER_ID`: Tu Messaging Sender ID
   * `FIREBASE_APP_ID`: Tu App ID
4. Hacé clic en **Deploy**. ¡Listo! Vercel servirá la app de forma segura, detectará la IP de los lectores en sus servidores edge y permitirá incrustarla como iframe en cualquier web de noticias.

---

## 💻 Código para Incrustar en tu CMS / Web (Iframe)

Para insertar el widget en una nota de WordPress, Ghost o tu CMS habitual:

```html
<iframe 
  id="balonOroIframe" 
  src="https://tu-sitio.com/ruta-a/index.html" 
  width="100%" 
  height="900" 
  frameborder="0" 
  scrolling="auto" 
  allow="clipboard-write">
</iframe>

<script>
  // Ajuste automático de la altura del iframe según el contenido
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'balon_oro_resize') {
      var iframe = document.getElementById('balonOroIframe');
      if (iframe && typeof e.data.height === 'number') {
        iframe.style.height = (e.data.height + 30) + 'px';
      }
    }
  });
</script>
```
