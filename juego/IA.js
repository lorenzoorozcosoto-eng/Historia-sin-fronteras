// Base de datos de historial
let historyData = [
  {
    id: 1,
    question: "¿Cuáles fueron las causas principales de la Revolución Industrial?",
    answer: "La Revolución Industrial fue impulsada por la mecanización de la industria textil, el desarrollo de la máquina de vapor de Watt y la abundancia de carbón y hierro.",
    date: "Ayer, 14:30",
    isFav: true
  },
  {
    id: 2,
    question: "Resumen de la importancia de los códices Mayas",
    answer: "Los códices Mayas son libros jeroglíficos plegados en papel de amate que registraban datos astronómicos, rituales, genealogías e historia de los gobernantes.",
    date: "12 Oct, 10:15",
    isFav: true
  },
  {
    id: 3,
    question: "¿Qué características definieron al periodo Clásico mesoamericano?",
    answer: "El periodo Clásico estuvo caracterizado por el florecimiento de grandiosas urbes como Teotihuacán y Tikal, avances numéricos con el concepto del cero y complejas redes comerciales.",
    date: "10 Oct, 18:45",
    isFav: true
  }
];

// Variables de estado
let totalQueriesCount = 12;
let tokensUsed = 15;
const tokenLimit = 50;
let currentFilter = 'all';
let currentResponseText = '';
let currentQuestionText = '';

// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderHistory();
});

// NAVEGACIÓN Y CAMBIO DE VISTA
function switchView(viewName) {
  // Ocultar todas las secciones
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  
  // Quitar estado activo del menú
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  // Mostrar la sección correspondiente
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) targetSection.classList.add('active');

  // Activar botón del menú lateral
  const activeLink = document.querySelector(`[data-view="${viewName}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Actualizar Títulos de la cabecera
  const title = document.getElementById('viewTitle');
  const subtitle = document.getElementById('viewSubtitle');

  if (viewName === 'nueva-pregunta') {
    title.innerText = 'Asistente AI: Tu Puerta al Conocimiento';
    subtitle.innerText = 'Escribe tu consulta para explorar la historia, el arte y la cultura';
  } else if (viewName === 'consultas-rapidas') {
    title.innerText = 'Consultas Rápidas por Categoria';
    subtitle.innerText = 'Selecciona una pregunta prediseñada para obtener respuestas instantáneas';
  } else if (viewName === 'consultas-pasadas') {
    title.innerText = 'Mis Consultas Pasadas';
    subtitle.innerText = 'Revisa y repasa tus búsquedas anteriores e historia explorada';
    renderHistory();
  }
}

// INSERCIÓN DE TAGS Y CONSULTA RÁPIDA
function useTag(tagText) {
  const input = document.getElementById('userInput');
  input.value = `Cuéntame sobre ${tagText}...`;
  input.focus();
}

function quickAsk(questionText) {
  switchView('nueva-pregunta');
  const input = document.getElementById('userInput');
  input.value = questionText;
  askAI();
}

// ENVIAR PREGUNTA Y RESPUESTA IA
function askAI() {
  const input = document.getElementById('userInput');
  const question = input.value.trim();

  if (!question) {
    alert('Por favor escribe una pregunta antes de enviar.');
    return;
  }

  currentQuestionText = question;
  const sendBtn = document.getElementById('sendBtn');
  const responseCard = document.getElementById('responseContainer');
  const responseBody = document.getElementById('responseBody');
  const timestamp = document.getElementById('timestamp');

  // Estado cargando
  sendBtn.disabled = true;
  sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Pensando...';

  // Incrementar uso
  totalQueriesCount++;
  tokensUsed = Math.min(tokensUsed + 3, tokenLimit);
  updateStats();

  // Simulación de respuesta IA
  setTimeout(() => {
    let answerText = `Con respecto a tu consulta sobre "<strong>${escapeHtml(question)}</strong>":<br><br>`;
    
    const qLower = question.toLowerCase();
    if (qLower.includes('maya') || qLower.includes('prehispánica') || qLower.includes('azteca')) {
      answerText += "Las civilizaciones de esta era alcanzaron notables avances urbanísticos y matemáticos. Desarrollaron sistemas de riego avanzado, centros ceremoniales monumentales y un sofisticado conocimiento del movimiento de los astros.";
    } else if (qLower.includes('maíz') || qLower.includes('gastronomía') || qLower.includes('cocina')) {
      answerText += "La domesticación del maíz representó la base del desarrollo sociocultural Mesoamericano. Se complementó con técnicas ancestrales como la nixtamalización, indispensable para enriquecer su valor nutricional.";
    } else if (qLower.includes('revolución') || qLower.includes('independencia')) {
      answerText += "Este periodo histórico estuvo marcado por profundos movimientos populares en búsqueda de justicia social, soberanía y la reestructuración de los derechos de la tierra y el trabajo.";
    } else {
      answerText += "Esta temática constituye una parte fundamental del patrimonio cultural. Permite comprender cómo se entrelazan las tradiciones del pasado con las dinámicas de la sociedad contemporánea.";
    }

    currentResponseText = answerText;
    responseBody.innerHTML = answerText;
    timestamp.innerText = "Justo ahora";
    responseCard.style.display = 'flex';

    // Guardar en Historial
    const newEntry = {
      id: Date.now(),
      question: question,
      answer: stripHtml(answerText),
      date: "Justo ahora",
      isFav: false
    };
    historyData.unshift(newEntry);

    // Restaurar botón
    sendBtn.disabled = false;
    sendBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Pregunta';
    input.value = '';

    // Scroll hacia la respuesta
    responseCard.scrollIntoView({ behavior: 'smooth' });
  }, 1200);
}

// TOGGLE FAVORITO
function toggleFavoriteCurrent() {
  const favBtn = document.getElementById('favBtn');
  favBtn.classList.toggle('active');
  
  if (historyData.length > 0) {
    historyData[0].isFav = favBtn.classList.contains('active');
  }
  updateStats();
}

function toggleFavoriteItem(id) {
  const item = historyData.find(h => h.id === id);
  if (item) {
    item.isFav = !item.isFav;
    renderHistory();
    updateStats();
  }
}

// RENDERIZAR HISTORIAL
function renderHistory() {
  const container = document.getElementById('historyListContainer');
  const searchVal = document.getElementById('historySearch')?.value.toLowerCase() || '';

  if (!container) return;

  let filtered = historyData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchVal) || item.answer.toLowerCase().includes(searchVal);
    const matchesFav = currentFilter === 'fav' ? item.isFav : true;
    return matchesSearch && matchesFav;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card text-center" style="padding: 30px; color: #8f8fa8;">
        <i class="fa-solid fa-folder-open" style="font-size: 32px; margin-bottom: 8px;"></i>
        <p>No se encontraron consultas registradas.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="history-item">
      <div class="history-item-header">
        <span class="history-q">${escapeHtml(item.question)}</span>
        <span class="history-date">${item.date}</span>
      </div>
      <p class="history-a">${escapeHtml(item.answer)}</p>
      <div class="history-item-footer">
        <button class="btn-link" onclick="quickAsk('${escapeHtml(item.question)}')">
          <i class="fa-solid fa-rotate-right"></i> Repetir consulta
        </button>
        <button class="btn-icon ${item.isFav ? 'active' : ''}" onclick="toggleFavoriteItem(${item.id})">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function filterHistory() {
  renderHistory();
}

function setHistoryFilter(filterType, btn) {
  currentFilter = filterType;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHistory();
}

// ACTUALIZAR MÉTRICAS Y BARRAS
function updateStats() {
  const savedCount = historyData.filter(h => h.isFav).length;

  document.getElementById('totalQueries').innerText = totalQueriesCount;
  document.getElementById('savedCount').innerText = savedCount;
  document.getElementById('savedItems').innerText = savedCount;
  document.getElementById('favFilterCount').innerText = savedCount;

  document.getElementById('tokenCount').innerText = `${tokensUsed}/${tokenLimit} hoy`;
  const percentage = Math.round((tokensUsed / tokenLimit) * 100);
  document.getElementById('tokenProgress').style.width = `${percentage}%`;
}

// FUNCIONALIDAD VENTANAS MODALES
function openModal(modalId) {
  document.getElementById(modalId).classList.add('open');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
}

// SIMULACIÓN BÚSQUEDA VISUAL
function simulateUpload() {
  const dropZone = document.getElementById('dropZone');
  const preview = document.getElementById('imagePreview');
  const img = document.getElementById('previewImg');

  // Imagen de prueba de una pirámide
  img.src = 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=500&q=80';
  dropZone.style.display = 'none';
  preview.style.display = 'block';
}

function processImageQuery() {
  closeModal('modal-visual');
  switchView('nueva-pregunta');
  const input = document.getElementById('userInput');
  input.value = "Identifica el monumento o zona arqueológica de la fotografía adjunta y dame su contexto histórico.";
  askAI();

  // Resetear Modal
  document.getElementById('dropZone').style.display = 'flex';
  document.getElementById('imagePreview').style.display = 'none';
}

// SIMULACIÓN ASISTENCIA DE VOZ
let isRecording = false;

function toggleRecording() {
  const mic = document.getElementById('micCircle');
  const status = document.getElementById('voiceStatus');
  const waves = document.getElementById('waveLines');
  const transcript = document.getElementById('transcriptText');
  const btnSend = document.getElementById('btnVoiceSend');

  isRecording = !isRecording;

  if (isRecording) {
    mic.classList.add('recording');
    status.innerText = "Escuchando... Di tu pregunta ahora.";
    waves.classList.add('active');
    transcript.innerText = "";
    btnSend.style.display = "none";

    // Simular transcripción de voz tras 2.5 segundos
    setTimeout(() => {
      if (isRecording) {
        transcript.innerText = '"¿Cuál era la importancia económica del cacao en Mesoamérica?"';
        status.innerText = "Transcripción completada:";
        mic.classList.remove('recording');
        waves.classList.remove('active');
        btnSend.style.display = "inline-flex";
        isRecording = false;
      }
    }, 2500);
  } else {
    mic.classList.remove('recording');
    waves.classList.remove('active');
    status.innerText = "Grabación pausada.";
  }
}

function sendVoiceQuery() {
  const text = document.getElementById('transcriptText').innerText.replace(/"/g, '');
  closeModal('modal-voz');
  quickAsk(text);

  // Limpiar modal
  document.getElementById('transcriptText').innerText = '';
  document.getElementById('voiceStatus').innerText = 'Haz clic en el micrófono para empezar a hablar...';
  document.getElementById('btnVoiceSend').style.display = 'none';
}

// COPIAR AL PORTAPAPELES
function copyResponse() {
  const text = stripHtml(currentResponseText);
  navigator.clipboard.writeText(text);
  alert('Respuesta copiada al portapapeles');
}

// UTILIDADES
function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

function stripHtml(html) {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}