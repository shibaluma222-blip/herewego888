// --- Language Switching ---
const languageSelector = document.getElementById('language-selector');

const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    updateTextContent(lang);
};

const updateTextContent = (lang) => {
    if (!window.languages || !window.languages[lang]) {
        console.warn(`Language pack for '${lang}' not found.`);
        return;
    }
    const langPack = window.languages[lang];
    Object.keys(langPack).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            // Handle specific cases like input placeholders or button text
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = langPack[key];
            } else if (key === 'speed-setting-title' && document.getElementById('speed-slider')) {
                // Special handler for counting trainer speed label
                const speed = parseFloat(document.getElementById('speed-slider').value);
                element.textContent = langPack[key].replace('{0}', speed.toFixed(1));
            }
            else {
                element.innerHTML = langPack[key]; // Using innerHTML to support potential HTML tags in translations
            }
        }
    });
    // Update active button style
    document.querySelectorAll('#language-selector button').forEach(btn => {
        btn.classList.toggle('ring-2', btn.dataset.lang === lang);
        btn.classList.toggle('ring-yellow-400', btn.dataset.lang === lang);
    });
};

languageSelector.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && button.dataset.lang) {
        setLanguage(button.dataset.lang);
    }
});

// Load language on initial page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);

    // --- Dropdown Menu Logic ---
    const toolsToggle = document.getElementById('nav-tools-toggle');
    const toolsDropdown = document.getElementById('nav-tools-dropdown');

    if (toolsToggle && toolsDropdown) {
        toolsToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the window click listener from firing immediately
            toolsDropdown.classList.toggle('hidden');
        });

        // Close dropdown if clicking outside
        window.addEventListener('click', (event) => {
            if (!toolsDropdown.classList.contains('hidden') && !toolsToggle.contains(event.target)) {
                toolsDropdown.classList.add('hidden');
            }
        });
    }
});
