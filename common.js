const sets = {
    set1: {
        title: "1 - Opinions & Preferences",
        cards: [
            { es: "Prefiero", en: "I prefer" },
            { es: "Me interesa", en: "I'm interested in" },
            { es: "Me encanta", en: "I love" },
            { es: "Me fascina", en: "I'm fascinated by" },
            { es: "Me gusta mucho", en: "I really like" },
            { es: "Me gusta bastante", en: "I quite like" },
            { es: "Me gusta", en: "I like" },
            { es: "Me da igual", en: "I don't mind" },
            { es: "No me gusta", en: "I don't like" },
            { es: "No me gusta nada", en: "I don't like at all" },
            { es: "No soporto", en: "I can't stand" },
            { es: "Odio", en: "I hate" },
            { es: "Es", en: "He/she/it is" },
            { es: "No es", en: "He/she/it isn't" },
        ]
    },
    set2: {
        title: "2 - Free Time Questions",
        cards: [
            { es: "¿Qué te gusta hacer en tu tiempo libre?", en: "What do you like to do in your free time?" },
            { es: "¿Qué no te gusta hacer en tu tiempo libre?", en: "What do you not like to do in your free time?" },
            { es: "¿Prefieres ir al cine o leer?", en: "Do you prefer to go to the cinema or read?" },
            { es: "¿Qué deporte te gusta hacer? ¿Por qué?", en: "What sport do you like to do? Why?" },
            { es: "¿Eres deportista?", en: "Are you sporty?" }
        ]
    },
    set3: {
        title: "3 - Frequency Phrases",
        cards: [
            { es: "Los lunes", en: "On Mondays" },
            { es: "Los martes", en: "On Tuesdays" },
            { es: "Los miércoles", en: "On Wednesdays" },
            { es: "Los jueves", en: "On Thursdays" },
            { es: "Los viernes", en: "On Fridays" },
            { es: "Los lunes por la mañana", en: "On Monday mornings" },
            { es: "Los lunes por la tarde", en: "On Monday afternoons" },
            { es: "Todos los días", en: "Every day" },
            { es: "Todos los lunes", en: "Every Monday" },
            { es: "Cada día", en: "Every day" }
        ]
    }
};

const praises = [
    "Increíble! You're a natural!",
    "Fantastic work! You learned them all!",
    "You're a Spanish Superstar! 🌟",
    "High Five! You finished the set!",
    "Magnífico! Your Spanish is growing!"
];

const hubGames = [
    {
        title: "Spanish Flashcards",
        description: "Master vocabulary with interactive cards, audio, and fun fireworks!",
        badge: "Active",
        href: "flash_card1.htm",
        icon: '<path d="M4 6h16v12H4zm0-2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 4h12v2H6V8zm0 4h8v2H6v-2z" />',
        iconBg: "var(--pink-primary)"
    },
    {
        title: "Sentence Builder",
        description: "Construct complex Spanish sentences and master grammar with interactive blocks!",
        badge: "New",
        href: "learn_sentence.htm",
        icon: '<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />',
        iconBg: "#f72585"
    },
    {
        title: "Duck Math",
        description: "Quack your way through times tables in this fun math adventure!",
        badge: "Math",
        href: "duck_math_timestable.html",
        icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />',
        iconBg: "#4cc9f0"
    },
    {
        title: "Cyber Defender",
        description: "Protect the galaxy by solving multiplication problems fast!",
        badge: "Math",
        href: "times_table_missile.html",
        icon: '<path d="M13.13 22.19L11.5 18.35L9.87 22.19L11.5 21L13.13 22.19M13 2H10V10H13V2M15.5 12H13V14H15.5C16.33 14 17 14.67 17 15.5V17H19V15.5C19 13.57 17.43 12 15.5 12M7.5 12C5.57 12 4 13.57 4 15.5V17H6V15.5C6 14.67 6.67 14 7.5 14H10V12H7.5Z" />',
        iconBg: "#7209b7"
    },
    {
        title: "Speed Number",
        description: "Test your numeric memory and reaction speed in this challenge!",
        badge: "Speed",
        href: "speed_number_challenge.html",
        icon: '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 20 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />',
        iconBg: "#4361ee"
    }
];

// Achievement System
function recordGamePlay() {
    const today = new Date().toISOString().split('T')[0];
    let playDays = JSON.parse(localStorage.getItem('playDays')) || [];

    if (!playDays.includes(today)) {
        playDays.push(today);
        localStorage.setItem('playDays', JSON.stringify(playDays));
    }
}

// Auto-record if loaded on a game page (not hub or root)
(function () {
    const path = window.location.pathname;
    const isHub = path.endsWith('index.htm') || path.endsWith('/') || path === '';
    if (!isHub) {
        recordGamePlay();
    }
})();

function getStats() {
    const rawDays = JSON.parse(localStorage.getItem('playDays')) || [];
    const uniqueDays = [...new Set(rawDays)].sort();

    if (uniqueDays.length === 0) return { streak: 0, totalDays: 0, badges: 0 };

    const todayStr = new Date().toISOString().split('T')[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const playDaysSet = new Set(uniqueDays);

    // Streak logic: check if played today or yesterday to continue
    let streak = 0;
    let checkDate = new Date();

    if (!playDaysSet.has(todayStr)) {
        if (playDaysSet.has(yesterdayStr)) {
            checkDate = yesterday;
        } else {
            return { streak: 0, totalDays: uniqueDays.length, badges: Math.floor(uniqueDays.length / 3) };
        }
    }

    while (playDaysSet.has(checkDate.toISOString().split('T')[0])) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
    }

    return {
        streak: streak,
        totalDays: uniqueDays.length,
        badges: Math.floor(uniqueDays.length / 3)
    };
}
