// ============================================================
// GOALREPLICA - Script principal (COMPLETO Y FUNCIONAL)
// ============================================================

const teamsData = [
    // La Liga 2025/2026
    { name: 'Real Madrid', league: 'La Liga' },
    { name: 'Barcelona', league: 'La Liga' },
    { name: 'Atlético Madrid', league: 'La Liga' },
    { name: 'Sevilla', league: 'La Liga' },
    { name: 'Real Betis', league: 'La Liga' },
    { name: 'Villarreal', league: 'La Liga' },
    { name: 'Real Sociedad', league: 'La Liga' },
    { name: 'Athletic Club', league: 'La Liga' },
    { name: 'Valencia', league: 'La Liga' },
    { name: 'Osasuna', league: 'La Liga' },
    { name: 'Celta Vigo', league: 'La Liga' },
    { name: 'Mallorca', league: 'La Liga' },
    { name: 'Getafe', league: 'La Liga' },
    { name: 'Rayo Vallecano', league: 'La Liga' },
    { name: 'Alavés', league: 'La Liga' },
    { name: 'Girona', league: 'La Liga' },
    { name: 'Espanyol', league: 'La Liga' },
    { name: 'Levante UD', league: 'La Liga' },
    { name: 'Elche', league: 'La Liga' },
    { name: 'Real Oviedo', league: 'La Liga' },

    // Premier League
    { name: 'Manchester City', league: 'Premier League' },
    { name: 'Arsenal', league: 'Premier League' },
    { name: 'Liverpool', league: 'Premier League' },
    { name: 'Chelsea', league: 'Premier League' },
    { name: 'Tottenham', league: 'Premier League' },
    { name: 'Manchester United', league: 'Premier League' },
    { name: 'Newcastle', league: 'Premier League' },
    { name: 'Aston Villa', league: 'Premier League' },
    { name: 'Brighton', league: 'Premier League' },
    { name: 'West Ham', league: 'Premier League' },
    { name: 'Crystal Palace', league: 'Premier League' },
    { name: 'Bournemouth', league: 'Premier League' },
    { name: 'Fulham', league: 'Premier League' },
    { name: 'Wolves', league: 'Premier League' },
    { name: 'Everton', league: 'Premier League' },
    { name: 'Brentford', league: 'Premier League' },
    { name: 'Nottingham Forest', league: 'Premier League' },
    { name: 'Leicester City', league: 'Premier League' },
    { name: 'Ipswich Town', league: 'Premier League' },
    { name: 'Southampton', league: 'Premier League' },

    // Serie A
    { name: 'Inter Milan', league: 'Serie A' },
    { name: 'AC Milan', league: 'Serie A' },
    { name: 'Juventus', league: 'Serie A' },
    { name: 'Napoli', league: 'Serie A' },
    { name: 'Roma', league: 'Serie A' },
    { name: 'Lazio', league: 'Serie A' },
    { name: 'Atalanta', league: 'Serie A' },
    { name: 'Fiorentina', league: 'Serie A' },
    { name: 'Bologna', league: 'Serie A' },
    { name: 'Torino', league: 'Serie A' },
    { name: 'Genoa', league: 'Serie A' },
    { name: 'Monza', league: 'Serie A' },
    { name: 'Udinese', league: 'Serie A' },
    { name: 'Lecce', league: 'Serie A' },
    { name: 'Empoli', league: 'Serie A' },
    { name: 'Cagliari', league: 'Serie A' },
    { name: 'Verona', league: 'Serie A' },
    { name: 'Como', league: 'Serie A' },
    { name: 'Parma', league: 'Serie A' },
    { name: 'Venezia', league: 'Serie A' },

    // Bundesliga
    { name: 'Bayern Munich', league: 'Bundesliga' },
    { name: 'Borussia Dortmund', league: 'Bundesliga' },
    { name: 'RB Leipzig', league: 'Bundesliga' },
    { name: 'Bayer Leverkusen', league: 'Bundesliga' },
    { name: 'Eintracht Frankfurt', league: 'Bundesliga' },
    { name: 'Wolfsburg', league: 'Bundesliga' },
    { name: 'Borussia Mönchengladbach', league: 'Bundesliga' },
    { name: 'Stuttgart', league: 'Bundesliga' },
    { name: 'Freiburg', league: 'Bundesliga' },
    { name: 'Hoffenheim', league: 'Bundesliga' },
    { name: 'Werder Bremen', league: 'Bundesliga' },
    { name: 'Augsburg', league: 'Bundesliga' },
    { name: 'Union Berlin', league: 'Bundesliga' },
    { name: 'Mainz 05', league: 'Bundesliga' },
    { name: 'St. Pauli', league: 'Bundesliga' },
    { name: 'Holstein Kiel', league: 'Bundesliga' },
    { name: 'Heidenheim', league: 'Bundesliga' },
    { name: 'Bochum', league: 'Bundesliga' },

    // Ligue 1
    { name: 'PSG', league: 'Ligue 1' },
    { name: 'Marseille', league: 'Ligue 1' },
    { name: 'Lyon', league: 'Ligue 1' },
    { name: 'Monaco', league: 'Ligue 1' },
    { name: 'Lille', league: 'Ligue 1' },
    { name: 'Nice', league: 'Ligue 1' },
    { name: 'Lens', league: 'Ligue 1' },
    { name: 'Rennes', league: 'Ligue 1' },
    { name: 'Strasbourg', league: 'Ligue 1' },
    { name: 'Nantes', league: 'Ligue 1' },
    { name: 'Montpellier', league: 'Ligue 1' },
    { name: 'Brest', league: 'Ligue 1' },
    { name: 'Reims', league: 'Ligue 1' },
    { name: 'Le Havre', league: 'Ligue 1' },
    { name: 'Toulouse', league: 'Ligue 1' },
    { name: 'Auxerre', league: 'Ligue 1' },
    { name: 'Saint-Étienne', league: 'Ligue 1' },
    { name: 'Angers', league: 'Ligue 1' },

    // Mundial 2026
    { name: 'Canadá', league: 'Mundial 2026' },
    { name: 'México', league: 'Mundial 2026' },
    { name: 'Estados Unidos', league: 'Mundial 2026' },
    { name: 'Australia', league: 'Mundial 2026' },
    { name: 'Irán', league: 'Mundial 2026' },
    { name: 'Japón', league: 'Mundial 2026' },
    { name: 'Jordania', league: 'Mundial 2026' },
    { name: 'República de Corea', league: 'Mundial 2026' },
    { name: 'Catar', league: 'Mundial 2026' },
    { name: 'Arabia Saudí', league: 'Mundial 2026' },
    { name: 'Uzbekistán', league: 'Mundial 2026' },
    { name: 'Irak', league: 'Mundial 2026' },
    { name: 'Argelia', league: 'Mundial 2026' },
    { name: 'Cabo Verde', league: 'Mundial 2026' },
    { name: 'Costa de Marfil', league: 'Mundial 2026' },
    { name: 'Egipto', league: 'Mundial 2026' },
    { name: 'Ghana', league: 'Mundial 2026' },
    { name: 'Marruecos', league: 'Mundial 2026' },
    { name: 'Senegal', league: 'Mundial 2026' },
    { name: 'Sudáfrica', league: 'Mundial 2026' },
    { name: 'Túnez', league: 'Mundial 2026' },
    { name: 'RD Congo', league: 'Mundial 2026' },
    { name: 'Curazao', league: 'Mundial 2026' },
    { name: 'Haití', league: 'Mundial 2026' },
    { name: 'Panamá', league: 'Mundial 2026' },
    { name: 'Argentina', league: 'Mundial 2026' },
    { name: 'Brasil', league: 'Mundial 2026' },
    { name: 'Colombia', league: 'Mundial 2026' },
    { name: 'Ecuador', league: 'Mundial 2026' },
    { name: 'Paraguay', league: 'Mundial 2026' },
    { name: 'Uruguay', league: 'Mundial 2026' },
    { name: 'Nueva Zelanda', league: 'Mundial 2026' },
    { name: 'Austria', league: 'Mundial 2026' },
    { name: 'Bélgica', league: 'Mundial 2026' },
    { name: 'Bosnia y Herzegovina', league: 'Mundial 2026' },
    { name: 'Croacia', league: 'Mundial 2026' },
    { name: 'República Checa', league: 'Mundial 2026' },
    { name: 'Inglaterra', league: 'Mundial 2026' },
    { name: 'Francia', league: 'Mundial 2026' },
    { name: 'Alemania', league: 'Mundial 2026' },
    { name: 'Países Bajos', league: 'Mundial 2026' },
    { name: 'Noruega', league: 'Mundial 2026' },
    { name: 'Portugal', league: 'Mundial 2026' },
    { name: 'Escocia', league: 'Mundial 2026' },
    { name: 'España', league: 'Mundial 2026' },
    { name: 'Suecia', league: 'Mundial 2026' },
    { name: 'Suiza', league: 'Mundial 2026' },
    { name: 'Turquía', league: 'Mundial 2026' },
];

const BASE_PRICE = 25;
const DISCOUNT_THRESHOLD = 2;
const DISCOUNT_AMOUNT = 5;
const PERSONALIZATION_COST = 5;
const WHATSAPP_NUMBER = '34637871592';
const TELEGRAM_USERNAME = 'GoalReplicaBot';

let cart = [];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';

// ---------- UTILIDADES ----------
function getImageBaseName(teamName) {
    return teamName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
}

function getImagePaths(teamName, kitNum, league, isKid = false) {
    const base = getImageBaseName(teamName) + (isKid ? 'kid' : '');
    const leagueFolder = league;
    return {
        jpg: `images/${leagueFolder}/${base}${kitNum}.jpg`,
        png: `images/${leagueFolder}/${base}${kitNum}.png`
    };
}

function kitLabel(kitNum) {
    return { '1': 'Local', '2': 'Visitante', '3': 'Tercera' }[kitNum] || kitNum;
}

const ADULT_SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
const KIDS_SIZES = ['3-4','4-5','5-6','7-8','8-9','10-11','12-13'];

// ---------- MODO OSCURO ----------
const themeToggle = document.getElementById('themeToggle');
function applyTheme() {
    const isDark = localStorage.getItem('goalreplica_dark') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('goalreplica_dark', 'false');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('goalreplica_dark', 'true');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
applyTheme();

// ---------- TOASTS ----------
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ---------- NOTIFICACIÓN DE ACTIVIDAD ----------
function simulateRecentActivity() {
    const randomTeam = teamsData[Math.floor(Math.random() * teamsData.length)];
    showToast(`⚡ ¡${randomTeam.name} vendido hace un momento!`, 'info');
}
setInterval(simulateRecentActivity, 25000);
setTimeout(simulateRecentActivity, 8000);

// ---------- FILTROS Y ORDENACIÓN ----------
function getUniqueLeagues() {
    return [...new Set(teamsData.map(t => t.league))];
}

function getFilteredTeams() {
    let filtered = teamsData;
    if (currentFilter !== 'all') filtered = filtered.filter(t => t.league === currentFilter);
    if (currentSearch.trim()) {
        const q = currentSearch.toLowerCase().trim();
        filtered = filtered.filter(t => t.name.toLowerCase().includes(q));
    }
    switch (currentSort) {
        case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
        case 'league-asc': filtered.sort((a, b) => a.league.localeCompare(b.league)); break;
        case 'league-desc': filtered.sort((a, b) => b.league.localeCompare(a.league)); break;
    }
    return filtered;
}

function renderFilters() {
    const container = document.getElementById('filters');
    let html = '<button class="filter-btn active" data-league="all">Todos</button>';
    getUniqueLeagues().forEach(league => html += `<button class="filter-btn" data-league="${league}">${league}</button>`);
    container.innerHTML = html;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.league;
            renderProducts();
            scrollToCatalog();
        });
    });
}

// ---------- RENDER ----------
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const teams = getFilteredTeams();

    if (teams.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    grid.innerHTML = teams.map((team, idx) => {
        const safe = team.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
        const stockAlert = Math.random() < 0.3 ? `<span class="stock-alert">⚡ Solo quedan ${Math.floor(Math.random()*5)+1}</span>` : '';
        return `
        <div class="product-card" data-team="${team.name}" data-league="${team.league}">
            <div class="product-card__image-wrapper">
                <span class="product-card__league-badge">${team.league}</span>
                <img src="${getImagePaths(team.name, '1', team.league, false).jpg}" alt="${team.name}" class="product-image"
                     id="img-${safe}" onerror="handleImageFallback(this, '${team.name}', '1', '${team.league}', false)">
                <span class="product-card__image-fallback" style="display:none;">👕</span>
            </div>
            <div class="product-card__kit-selector">
                <button class="kit-btn active" data-kit="1" data-team="${safe}">Local</button>
                <button class="kit-btn" data-kit="2" data-team="${safe}">Visitante</button>
                <button class="kit-btn" data-kit="3" data-team="${safe}">Tercera</button>
            </div>
            <div class="product-card__adult-sizes">
                <label>📏 Talla:</label>
                ${ADULT_SIZES.map(size => `<button class="size-btn adult-size-btn" data-size="${size}" data-team="${safe}">${size}</button>`).join('')}
            </div>
            <div class="product-card__kids-section">
                ${['1','2','3'].map(kitNum => `
                <div class="kids-row" data-kit="${kitNum}">
                    <label>
                        <input type="checkbox" class="kids-check" data-team="${safe}" data-kit="${kitNum}">
                        👶 ${kitLabel(kitNum)} infantil
                    </label>
                    <div class="kids-sizes" id="sizes-${safe}-${kitNum}">
                        ${KIDS_SIZES.map(size =>
                            `<button class="size-btn kid-size-btn" data-size="${size}" data-team="${safe}" data-kit="${kitNum}">${size}</button>`
                        ).join('')}
                    </div>
                </div>`).join('')}
            </div>
            <div class="product-card__body">
                <h3 class="product-card__team-name">${team.name}</h3>
                <p class="product-card__price">${BASE_PRICE}€</p>
                ${stockAlert}
                <label class="product-card__personalize">
                    <input type="checkbox" class="personalize-toggle" data-team="${team.name}">
                    <span>✏️ Personalizar (+${PERSONALIZATION_COST}€)</span>
                </label>
                <div class="product-card__personalize-fields" id="fields-${safe}">
                    <input type="text" class="input-player-name" placeholder="Nombre (ej: MESSI)" maxlength="20" data-team="${team.name}">
                    <input type="text" class="input-player-number" placeholder="Número (ej: 10)" maxlength="2" data-team="${team.name}">
                </div>
                <div class="product-card__quantity">
                    <label>Cantidad:</label>
                    <div class="qty-control">
                        <button class="qty-minus" data-team="${team.name}">−</button>
                        <span class="qty-value" id="qty-${safe}">1</span>
                        <button class="qty-plus" data-team="${team.name}">+</button>
                    </div>
                </div>
                <button class="product-card__add-btn" data-team="${team.name}" data-league="${team.league}">
                    <i class="fas fa-cart-plus"></i> Añadir al carrito
                </button>
            </div>
        </div>`;
    }).join('');

    attachProductEvents();
}

function handleImageFallback(img, teamName, kitNum, league, isKid) {
    const paths = getImagePaths(teamName, kitNum, league, isKid);
    if (img.src.endsWith('.jpg')) {
        img.src = paths.png;
        img.onerror = () => {
            img.style.display = 'none';
            img.nextElementSibling.style.display = 'block';
        };
    } else {
        img.style.display = 'none';
        img.nextElementSibling.style.display = 'block';
    }
}

function switchKit(teamSafe, kitNum, teamName, league, isKid) {
    const img = document.getElementById('img-' + teamSafe);
    if (!img) return;
    const paths = getImagePaths(teamName, kitNum, league, isKid);
    img.src = paths.jpg;
    img.style.display = 'block';
    img.nextElementSibling.style.display = 'none';
    img.onerror = function() { handleImageFallback(img, teamName, kitNum, league, isKid); };
}

// ---------- EVENTOS ----------
function attachProductEvents() {
    // Kit buttons
    document.querySelectorAll('.kit-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const teamSafe = this.dataset.team;
            const kitNum = this.dataset.kit;
            const card = this.closest('.product-card');
            const teamName = card.dataset.team;
            const league = card.dataset.league;
            const kidsCheck = card.querySelector(`.kids-check[data-kit="${kitNum}"]`);
            const isKid = kidsCheck ? kidsCheck.checked : false;
            switchKit(teamSafe, kitNum, teamName, league, isKid);
            card.querySelectorAll('.kit-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Tallas adultas
    document.querySelectorAll('.adult-size-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const teamSafe = this.dataset.team;
            const card = this.closest('.product-card');
            card.querySelectorAll('.adult-size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Checkboxes infantiles
    document.querySelectorAll('.kids-check').forEach(check => {
        check.addEventListener('change', function() {
            const teamSafe = this.dataset.team;
            const kitNum = this.dataset.kit;
            const card = this.closest('.product-card');
            const teamName = card.dataset.team;
            const league = card.dataset.league;
            const sizesDiv = document.getElementById(`sizes-${teamSafe}-${kitNum}`);
            const isKid = this.checked;

            if (isKid) {
                sizesDiv.classList.add('active');
                if (!sizesDiv.querySelector('.kid-size-btn.active')) {
                    const first = sizesDiv.querySelector('.kid-size-btn');
                    if (first) first.classList.add('active');
                }
            } else {
                sizesDiv.classList.remove('active');
                sizesDiv.querySelectorAll('.kid-size-btn').forEach(b => b.classList.remove('active'));
            }

            const activeKitBtn = card.querySelector('.kit-btn.active');
            if (activeKitBtn && activeKitBtn.dataset.kit === kitNum) {
                switchKit(teamSafe, kitNum, teamName, league, isKid);
            }
        });
    });

    // Tallas infantiles
    document.querySelectorAll('.kid-size-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const teamSafe = this.dataset.team;
            const kitNum = this.dataset.kit;
            const sizesDiv = document.getElementById(`sizes-${teamSafe}-${kitNum}`);
            sizesDiv.querySelectorAll('.kid-size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Personalización
    document.querySelectorAll('.personalize-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const team = this.dataset.team;
            const safe = team.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const fields = document.getElementById('fields-' + safe);
            if (this.checked) fields.classList.add('active');
            else {
                fields.classList.remove('active');
                const card = this.closest('.product-card');
                card.querySelector('.input-player-name').value = '';
                card.querySelector('.input-player-number').value = '';
            }
        });
    });

    // Cantidad
    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const safe = this.dataset.team.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const span = document.getElementById('qty-' + safe);
            let qty = parseInt(span.textContent);
            if (qty > 1) span.textContent = --qty;
        });
    });
    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const safe = this.dataset.team.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const span = document.getElementById('qty-' + safe);
            let qty = parseInt(span.textContent);
            if (qty < 99) span.textContent = ++qty;
        });
    });

    // Añadir al carrito
    document.querySelectorAll('.product-card__add-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const team = card.dataset.team;
            const league = card.dataset.league;
            const safe = team.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const qty = parseInt(document.getElementById('qty-' + safe).textContent);

            const activeAdultSize = card.querySelector('.adult-size-btn.active');
            if (!activeAdultSize) {
                alert('Selecciona una talla (S, M, L, XL, XXL, 3XL, 4XL).');
                return;
            }
            const adultSize = activeAdultSize.dataset.size;

            const persToggle = card.querySelector('.personalize-toggle');
            const isPers = persToggle.checked;
            const pName = isPers ? card.querySelector('.input-player-name').value.trim() : '';
            const pNum = isPers ? card.querySelector('.input-player-number').value.trim() : '';
            if (isPers && (!pName || !pNum)) {
                alert('Introduce nombre y número para personalizar.');
                return;
            }

            const activeKitBtn = card.querySelector('.kit-btn.active');
            const kit = activeKitBtn ? activeKitBtn.dataset.kit : '1';
            const kidsCheck = card.querySelector(`.kids-check[data-kit="${kit}"]`);
            const isKid = kidsCheck ? kidsCheck.checked : false;
            let kidSize = null;
            if (isKid) {
                const activeKidSize = card.querySelector(`#sizes-${safe}-${kit} .kid-size-btn.active`);
                if (!activeKidSize) {
                    alert(`Selecciona una talla para el kit ${kitLabel(kit)} infantil.`);
                    return;
                }
                kidSize = activeKidSize.dataset.size;
            }

            addToCart(team, league, qty, isPers, pName, pNum, kit, isKid, kidSize, adultSize);
            showToast(`✅ ${team} añadido al carrito`);
            this.classList.add('added');
            this.innerHTML = '<i class="fas fa-check"></i> ¡Añadido!';
            setTimeout(() => {
                this.classList.remove('added');
                this.innerHTML = '<i class="fas fa-cart-plus"></i> Añadir al carrito';
            }, 1500);
            document.getElementById('qty-' + safe).textContent = '1';
        });
    });
}

// ---------- CARRITO ----------
function addToCart(teamName, league, quantity, isPersonalized, playerName, playerNumber, kit, isKid, kidSize, adultSize) {
    const unitPrice = BASE_PRICE + (isPersonalized ? PERSONALIZATION_COST : 0);
    const exist = cart.findIndex(item =>
        item.teamName === teamName && item.isPersonalized === isPersonalized &&
        item.playerName === playerName && item.playerNumber === playerNumber &&
        item.kit === kit && item.isKid === isKid && item.kidSize === kidSize &&
        item.adultSize === adultSize
    );
    if (exist >= 0) cart[exist].quantity += quantity;
    else cart.push({ teamName, league, quantity, isPersonalized, playerName, playerNumber, kit, isKid, kidSize, adultSize, unitPrice });
    updateCart();
    openCart();
}

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

function updateCart() {
    const counter = document.getElementById('cartCounter');
    const empty = document.getElementById('cartEmpty');
    const itemsContainer = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('subtotal');
    const discountRow = document.getElementById('discountRow');
    const discAmt = document.getElementById('discountAmount');
    const totalEl = document.getElementById('total');

    const totalShirts = cart.reduce((s, i) => s + i.quantity, 0);
    const subtotal = cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    const discount = totalShirts >= DISCOUNT_THRESHOLD ? DISCOUNT_AMOUNT : 0;
    const total = subtotal - discount;

    counter.textContent = totalShirts;
    counter.style.display = totalShirts > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
        empty.style.display = 'flex';
        itemsContainer.innerHTML = '';
        footer.style.display = 'none';
    } else {
        empty.style.display = 'none';
        footer.style.display = 'block';
        itemsContainer.innerHTML = cart.map((item, idx) => {
            const paths = getImagePaths(item.teamName, item.kit, item.league, item.isKid);
            const extraInfo = [`Talla ${item.adultSize}`];
            if (item.isKid) extraInfo.push(`Niño (${item.kidSize})`);
            extraInfo.push(kitLabel(item.kit));
            return `
            <div class="cart-item">
                <div class="cart-item__image">
                    <img src="${paths.jpg}" alt="${item.teamName}" 
                         onerror="handleCartImageFallback(this, '${item.teamName}', '${item.kit}', '${item.league}', ${item.isKid})">
                    <span class="fallback-icon" style="display:none;">👕</span>
                </div>
                <div class="cart-item__info">
                    <p class="cart-item__name">${item.teamName} x${item.quantity} (${extraInfo.join(', ')})</p>
                    ${item.isPersonalized ? `<p class="cart-item__personalization">✨ ${item.playerName} #${item.playerNumber}</p>` : ''}
                    <div class="cart-item__details">
                        <span>${item.unitPrice}€/ud</span>
                        <span class="cart-item__price">${item.unitPrice * item.quantity}€</span>
                    </div>
                </div>
                <button class="cart-item__remove" onclick="removeFromCart(${idx})"><i class="fas fa-trash-alt"></i></button>
            </div>`;
        }).join('');
    }

    subtotalEl.textContent = subtotal + '€';
    discountRow.style.display = discount > 0 ? 'flex' : 'none';
    if (discount > 0) discAmt.textContent = '-' + discount + '€';
    totalEl.textContent = total + '€';

    localStorage.setItem('goalreplica_cart', JSON.stringify(cart));
}

function handleCartImageFallback(img, teamName, kitNum, league, isKid) {
    const paths = getImagePaths(teamName, kitNum, league, isKid);
    if (img.src.endsWith('.jpg')) {
        img.src = paths.png;
        img.onerror = () => { img.style.display = 'none'; img.nextElementSibling.style.display = 'block'; };
    } else {
        img.style.display = 'none';
        img.nextElementSibling.style.display = 'block';
    }
}

function loadCart() {
    const saved = localStorage.getItem('goalreplica_cart');
    if (saved) { cart = JSON.parse(saved); updateCart(); }
}

// ---------- MENSAJES ----------
function generateOrderSummary() {
    const totalShirts = cart.reduce((s, i) => s + i.quantity, 0);
    const subtotal = cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    const discount = totalShirts >= DISCOUNT_THRESHOLD ? DISCOUNT_AMOUNT : 0;
    const total = subtotal - discount;
    let msg = '🛒 *NUEVO PEDIDO - GoalReplica* 🛒\n\n📋 *Resumen:*\n───────────────────\n';
    cart.forEach((item, i) => {
        let desc = `*${item.teamName}* (Talla ${item.adultSize}, ${kitLabel(item.kit)})`;
        if (item.isKid) desc += ` 👶 Niño ${item.kidSize}`;
        msg += `\n${i+1}. ${desc}\n   Cantidad: ${item.quantity} x ${item.unitPrice}€\n`;
        if (item.isPersonalized) msg += `   Personalización: ${item.playerName} #${item.playerNumber}\n`;
        msg += `   Subtotal: ${item.unitPrice * item.quantity}€\n`;
    });
    msg += '\n───────────────────\n';
    msg += `💰 Subtotal: ${subtotal}€\n`;
    if (discount > 0) msg += `🎁 Descuento (2+ camisetas): -${discount}€\n`;
    msg += `🚚 Envío: GRATIS\n📦 Entrega estimada: 15-20 días\n`;
    msg += `\n💵 *TOTAL: ${total}€*\n`;
    msg += '\n───────────────────\nPor favor, confírmenme los datos de envío y el método de pago. ¡Gracias! 🙌';
    return msg;
}

function openWhatsApp() {
    if (cart.length === 0) { alert('Carrito vacío'); return; }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generateOrderSummary())}`, '_blank');
}
function openTelegram() {
    if (cart.length === 0) { alert('Carrito vacío'); return; }
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(generateOrderSummary())}`, '_blank');
}

// ---------- SCROLL ----------
function scrollToCatalog() {
    const catalog = document.getElementById('catalogo');
    if (catalog) catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- UI ----------
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ---------- INICIALIZACIÓN ----------
function init() {
    loadCart();
    renderFilters();
    renderProducts();

    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        renderProducts();
        scrollToCatalog();
    });

    const searchInput = document.getElementById('searchInput');
    function performSearch() {
        currentSearch = searchInput.value;
        renderProducts();
        scrollToCatalog();
    }
    document.querySelector('.search-btn').addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });

    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('btnWhatsapp').addEventListener('click', openWhatsApp);
    document.getElementById('btnTelegram').addEventListener('click', openTelegram);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.header__nav');
    menuToggle.addEventListener('click', () => { nav.classList.toggle('active'); menuToggle.classList.toggle('active'); });
    nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { nav.classList.remove('active'); menuToggle.classList.remove('active'); }));

    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior:'smooth' });
    }));

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let cur = '';
        sections.forEach(s => { if (scrollY >= s.offsetTop - 100) cur = s.id; });
        document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
    });
}

document.addEventListener('DOMContentLoaded', init);