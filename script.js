// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderCurrentSquad();
    renderSquadHistory();
    renderRecords();
    renderSeasonRecords();
    renderTrophies();
    setupEventListeners();
});

// Render Current Squad
function renderCurrentSquad() {
    const squadGrid = document.getElementById('currentSquad');

    if (!squadGrid) {
        console.error("❌ #currentSquad div not found");
        return;
    }

    squadGrid.innerHTML = "";

    currentSquad.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';

        const playerImage = player.image
            ? `<img src="${player.image}" class="player-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div class="player-image-placeholder" style="display:none;">
                    ${player.name.charAt(0)}
               </div>`
            : `<div class="player-image-placeholder">${player.name.charAt(0)}</div>`;

            playerCard.innerHTML = `
            <div class="card-inner">
        
                <!-- FRONT -->
                <div class="card-front">
                    ${playerImage}
                    <span class="player-category">${player.category}</span>
        
                    <div class="player-info">
                        <h3 class="player-name">${player.name}</h3>
                        <p class="player-role">${player.role}</p>
                        <div class="player-details">
                            <span>${player.country}</span>
                            <span>#${player.jersey}</span>
                        </div>
                    </div>
                </div>
        
                <!-- BACK -->
                <div class="card-back">
                    <div class="stats-loading">
                        <span>🏏</span>
                        <p>Tap to view stats</p>
                    </div>
                </div>
        
            </div>
        `;

        playerCard.addEventListener('click', () => {
            playerCard.classList.toggle('flip');
        
            const cleanName = player.name.replace(" (C)", "");
            const back = playerCard.querySelector('.card-back');
        
            const stats = playerStats[cleanName];
        
            // 🔥 LOADING FEEL (LIKE ESPN)
            back.innerHTML = `<p>Loading stats...</p>`;
        
            setTimeout(() => {
        
                if (stats) {
                    back.innerHTML = `
                        <h3>${cleanName}</h3>
        
                        <div class="stats-grid">
                            <div class="stat-box">
                                <span>${stats.matches}</span>
                                <p>Matches</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.runs}</span>
                                <p>Runs</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.average}</span>
                                <p>Average</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.strikeRate}</span>
                                <p>Strike Rate</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.sixes}</span>
                                <p>Sixes</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.fours}</span>
                                <p>Fours</p>
                            </div>
        
                            <div class="stat-box">
                                <span>${stats.highest}</span>
                                <p>Highest</p>
                            </div>
                        </div>
                    `;
                } else {
                    back.innerHTML = `<p>No stats available</p>`;
                }
        
            }, 300); // smooth delay
        });
        squadGrid.appendChild(playerCard);
    });
}

// Generate preview stats based on player role
function generatePreviewStats(player) {
    const role = player.role.toLowerCase();
    const stats = player.stats;
    
    // Check if player is primarily a batsman/wicket-keeper
    if (role.includes('batsman') || role.includes('keeper')) {
        return `
            <div class="player-preview-stats">
                <div class="preview-stat">
                    <span class="preview-label">Matches</span>
                    <span class="preview-value">${stats.matches || 0}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Runs</span>
                    <span class="preview-value">${stats.runs || 0}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Average</span>
                    <span class="preview-value">${stats.average || '0.00'}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Strike Rate</span>
                    <span class="preview-value">${stats.strikeRate || '0.00'}</span>
                </div>
            </div>
        `;
    }
    // Check if player is primarily a bowler
    else if (role.includes('bowler')) {
        return `
            <div class="player-preview-stats">
                <div class="preview-stat">
                    <span class="preview-label">Matches</span>
                    <span class="preview-value">${stats.matches || 0}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Wickets</span>
                    <span class="preview-value">${stats.wickets || 0}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Economy</span>
                    <span class="preview-value">${stats.economy || '0.00'}</span>
                </div>
                <div class="preview-stat">
                    <span class="preview-label">Average</span>
                    <span class="preview-value">${stats.average || '0.00'}</span>
                </div>
            </div>
        `;
    }
    // All-rounders get both batting and bowling stats
    else if (role.includes('all-rounder')) {
        return `
            <div class="player-preview-stats">
                <div class="preview-stat-section">
                    <span class="preview-section-title">Batting</span>
                    <div class="preview-stat-row">
                        <div class="preview-stat-mini">
                            <span class="preview-label">Runs</span>
                            <span class="preview-value">${stats.runs || 0}</span>
                        </div>
                        <div class="preview-stat-mini">
                            <span class="preview-label">SR</span>
                            <span class="preview-value">${stats.strikeRate || '0'}</span>
                        </div>
                    </div>
                </div>
                <div class="preview-stat-section">
                    <span class="preview-section-title">Bowling</span>
                    <div class="preview-stat-row">
                        <div class="preview-stat-mini">
                            <span class="preview-label">Wickets</span>
                            <span class="preview-value">${stats.wickets || 0}</span>
                        </div>
                        <div class="preview-stat-mini">
                            <span class="preview-label">Econ</span>
                            <span class="preview-value">${stats.economy || '0.00'}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    return '';
}



// Squad History Navigation
let currentYear = 2025;
const availableYears = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2018, 2019, 2020, 2021, 2022, 2023, 2024,2025];
let currentYearIndex = availableYears.indexOf(currentYear);

function renderSquadHistory() {
    updateYearDisplay();
    renderHistorySquad();
}

function updateYearDisplay() {
    const yearDisplay = document.getElementById('yearDisplay');
    yearDisplay.textContent = currentYear;
}

function renderHistorySquad() {
    const historySquad = document.getElementById('historySquad');
    historySquad.innerHTML = '';
    
    const squad = squadHistory[currentYear];
    
    if (squad) {
        squad.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'history-player-card';
            playerCard.style.animationDelay = `${index * 0.05}s`;
            
            playerCard.innerHTML = `
                <h4 class="history-player-name">${player.name}</h4>
                <p class="history-player-role">${player.role}</p>
            `;
            
            historySquad.appendChild(playerCard);
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Year Navigation
    document.getElementById('prevYear').addEventListener('click', () => {
        if (currentYearIndex > 0) {
            currentYearIndex--;
            currentYear = availableYears[currentYearIndex];
            updateYearDisplay();
            renderHistorySquad();
        }
    });
    
    document.getElementById('nextYear').addEventListener('click', () => {
        if (currentYearIndex < availableYears.length - 1) {
            currentYearIndex++;
            currentYear = availableYears[currentYearIndex];
            updateYearDisplay();
            renderHistorySquad();
        }
    });
    
    // Season Records Navigation
    const seasonYears = Object.keys(seasonRecords).map(Number);
    let currentSeasonIndex = seasonYears.length - 1; // Start with latest season
    
    function updateSeasonDisplay() {
        const seasonDisplay = document.getElementById('seasonDisplay');
        seasonDisplay.textContent = seasonRecords[seasonYears[currentSeasonIndex]].year;
        renderSeasonRecordsContent(seasonYears[currentSeasonIndex]);
    }
    
    document.getElementById('prevSeason').addEventListener('click', () => {
        if (currentSeasonIndex > 0) {
            currentSeasonIndex--;
            updateSeasonDisplay();
        }
    });
    
    document.getElementById('nextSeason').addEventListener('click', () => {
        if (currentSeasonIndex < seasonYears.length - 1) {
            currentSeasonIndex++;
            updateSeasonDisplay();
        }
    });
    
    // Initialize season display
    updateSeasonDisplay();
    
    // Records Tabs
    const recordTabs = document.querySelectorAll('.record-tab');
    recordTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            recordTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding table
            const tabType = tab.getAttribute('data-tab');
            const allTables = document.querySelectorAll('.record-table');
            allTables.forEach(table => table.classList.remove('active'));
            document.getElementById(`${tabType}-table`).classList.add('active');
        });
    });
    
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Render Season Records
function renderSeasonRecords() {
    // Initial render handled by setupEventListeners
}

function renderSeasonRecordsContent(year) {
    const content = document.getElementById('seasonRecordsContent');
    content.innerHTML = '';
    
    const season = seasonRecords[year];
    if (!season) return;
    
    content.innerHTML = `
        <div class="season-record-card" style="animation: fadeInUp 0.6s ease-out;">
            <h3 class="season-record-title">Final Position</h3>
            <div style="text-align: center; margin-top: 20px;">
                <div class="season-stat-value" style="font-size: 48px;">${season.position}</div>
            </div>
        </div>
        
        <div class="season-record-card" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
            <h3 class="season-record-title">Top Run Scorer</h3>
            <div class="season-record-player">
                <img src="${season.topScorer.image}" alt="${season.topScorer.name}" class="season-record-player-img" onerror="this.style.display='none';">
                <div class="season-record-player-info">
                    <div class="season-record-player-name">${season.topScorer.name}</div>
                    <div class="season-record-stat">${season.topScorer.runs} runs</div>
                </div>
            </div>
        </div>
        
        <div class="season-record-card" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
            <h3 class="season-record-title">Top Wicket Taker</h3>
            <div class="season-record-player">
                <img src="${season.topWicketTaker.image}" alt="${season.topWicketTaker.name}" class="season-record-player-img" onerror="this.style.display='none';">
                <div class="season-record-player-info">
                    <div class="season-record-player-name">${season.topWicketTaker.name}</div>
                    <div class="season-record-stat">${season.topWicketTaker.wickets} wickets</div>
                </div>
            </div>
        </div>
        
        <div class="season-record-card" style="animation: fadeInUp 0.6s ease-out 0.3s backwards;">
            <h3 class="season-record-title">Season Statistics</h3>
            <div class="season-stats-grid">
                <div class="season-stat-item">
                    <div class="season-stat-label">Matches Played</div>
                    <div class="season-stat-value">${season.matches}</div>
                </div>
                <div class="season-stat-item">
                    <div class="season-stat-label">Matches Won</div>
                    <div class="season-stat-value">${season.won}</div>
                </div>
                <div class="season-stat-item">
                    <div class="season-stat-label">Matches Lost</div>
                    <div class="season-stat-value">${season.lost}</div>
                </div>
                <div class="season-stat-item">
                    <div class="season-stat-label">Win Rate</div>
                    <div class="season-stat-value">${((season.won / season.matches) * 100).toFixed(0)}%</div>
                </div>
            </div>
        </div>
    `;
}

// Render Records
function renderRecords() {
    renderRecordTable('runs', records.runs, 'Runs');
    renderRecordTable('wickets', records.wickets, 'Wickets');
    renderRecordTable('catches', records.catches, 'Catches');
    renderRecordTable('sixes', records.sixes, 'Sixes');
}

function renderRecordTable(type, data, label) {
    const tableContainer = document.getElementById(`${type}-table`);
    
    data.forEach((record, index) => {
        const recordItem = document.createElement('div');
        recordItem.className = 'record-item';
        recordItem.style.animationDelay = `${index * 0.1}s`;
        
        recordItem.innerHTML = `
            <div class="record-rank">#${record.rank}</div>
            <div class="record-player">${record.player}</div>
            <div class="record-stat">${record.stat}</div>
        `;
        
        tableContainer.appendChild(recordItem);
    });
}

// Render Trophies
function renderTrophies() {
    const trophiesGrid = document.getElementById('trophiesGrid');
    
    trophies.forEach((trophy, index) => {
        const trophyCard = document.createElement('div');
        trophyCard.className = 'trophy-card';
        trophyCard.style.animationDelay = `${index * 0.2}s`;
        
        trophyCard.innerHTML = `
            <div class="trophy-image">🏆</div>
            <div class="trophy-info">
                <h3 class="trophy-year">${trophy.year}</h3>
                <h4 class="trophy-title">${trophy.title}</h4>
                <p class="trophy-details">${trophy.details}</p>
                <p class="trophy-details"><strong>Venue:</strong> ${trophy.venue}</p>
            </div>
        `;
        
        trophiesGrid.appendChild(trophyCard);
    });
}

// Add scroll animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        
        if (scrollPosition > sectionTop + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial setup for sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 20px rgba(253, 185, 19, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation classes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .player-card,
    .history-player-card,
    .record-item,
    .trophy-card {
        animation: fadeInUp 0.6s ease-out backwards;
    }
`;
document.head.appendChild(style);

// Add particle effect to hero section
function createParticle() {
    const hero = document.querySelector('.hero');
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'var(--csk-yellow)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.opacity = '0.5';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'floatUp 8s linear';
    
    hero.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Create particles periodically
setInterval(createParticle, 500);

console.log('%c🏏 Whistle Podu! CSK Forever! 💛💙', 'font-size: 20px; font-weight: bold; color: #FDB913;');
console.log('%cChennai Super Kings - 5 Time IPL Champions', 'font-size: 14px; color: #00B5E2;');

// Player Stats Modal Functions
function openPlayerStatsModal(player) {
    const modal = document.getElementById('playerStatsModal');
    const modalPlayerImage = document.getElementById('modalPlayerImage');
    const modalPlayerName = document.getElementById('modalPlayerName');
    const modalPlayerRole = document.getElementById('modalPlayerRole');
    const modalPlayerCountry = document.getElementById('modalPlayerCountry');
    const modalPlayerJersey = document.getElementById('modalPlayerJersey');
    const statsGrid = document.getElementById('statsGrid');
    const cskStatsGrid = document.getElementById('cskStatsGrid');
    
    // Set player info
    modalPlayerImage.src = player.image;
    modalPlayerImage.alt = player.name;
    modalPlayerName.textContent = player.name;
    modalPlayerRole.textContent = player.role;
    modalPlayerCountry.textContent = player.country;
    modalPlayerJersey.textContent = `Jersey #${player.jersey}`;
    
    // Render IPL Career Stats
    statsGrid.innerHTML = renderStatsCards(player.stats, player.role);
    
    // Render CSK Stats
    cskStatsGrid.innerHTML = renderStatsCards(player.cskStats, player.role, true);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayerStatsModal() {
    const modal = document.getElementById('playerStatsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderStatsCards(stats, role, isCskStats = false) {
    let cards = '';
    
    // Common stats for all
    if (stats.matches !== undefined) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Matches</div>
                <div class="stat-value">${stats.matches}</div>
            </div>
        `;
    }
    
    // Batting stats
    if (stats.runs !== undefined && stats.runs > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Runs</div>
                <div class="stat-value">${stats.runs}</div>
            </div>
        `;
    }
    
    if (stats.average !== undefined && stats.average > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Average</div>
                <div class="stat-value">${stats.average}</div>
            </div>
        `;
    }
    
    if (stats.strikeRate !== undefined && stats.strikeRate > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Strike Rate</div>
                <div class="stat-value">${stats.strikeRate}</div>
            </div>
        `;
    }
    
    if (stats.fifties !== undefined && stats.fifties > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Fifties</div>
                <div class="stat-value">${stats.fifties}</div>
            </div>
        `;
    }
    
    if (stats.hundreds !== undefined && stats.hundreds > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Hundreds</div>
                <div class="stat-value">${stats.hundreds}</div>
            </div>
        `;
    }
    
    if (stats.highestScore !== undefined && !isCskStats) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Highest Score</div>
                <div class="stat-value">${stats.highestScore}</div>
            </div>
        `;
    }
    
    if (stats.sixes !== undefined && stats.sixes > 0 && !isCskStats) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Sixes</div>
                <div class="stat-value">${stats.sixes}</div>
            </div>
        `;
    }
    
    // Bowling stats
    if (stats.wickets !== undefined && stats.wickets > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Wickets</div>
                <div class="stat-value">${stats.wickets}</div>
            </div>
        `;
    }
    
    if (stats.economy !== undefined) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Economy</div>
                <div class="stat-value">${stats.economy}</div>
            </div>
        `;
    }
    
    if (stats.bestBowling !== undefined && !isCskStats) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Best Bowling</div>
                <div class="stat-value">${stats.bestBowling}</div>
            </div>
        `;
    }
    
    // Fielding stats
    if (stats.catches !== undefined && stats.catches > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Catches</div>
                <div class="stat-value">${stats.catches}</div>
            </div>
        `;
    }
    
    if (stats.stumpings !== undefined && stats.stumpings > 0) {
        cards += `
            <div class="stat-card">
                <div class="stat-label">Stumpings</div>
                <div class="stat-value">${stats.stumpings}</div>
            </div>
        `;
    }
    
    // If no stats available for CSK
    if (cards === '' && isCskStats) {
        cards = `
            <div class="stat-card" style="grid-column: 1 / -1;">
                <div class="stat-label">New Player</div>
                <div class="stat-value" style="font-size: 20px;">Joined CSK in 2026</div>
            </div>
        `;
    }
    
    return cards;
}

// Modal event listeners
document.getElementById('modalClose').addEventListener('click', closePlayerStatsModal);
document.getElementById('modalOverlay').addEventListener('click', closePlayerStatsModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlayerStatsModal();
    }
});
