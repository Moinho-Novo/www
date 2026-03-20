const langToggle = document.getElementById("lang-toggle");

let currentLang = localStorage.getItem("lang") || "en";

function applyTranslations(lang) {
  document.body.classList.add("lang-switch");

  setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");

      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Toggle button text
    langToggle.textContent = lang === "en" ? "PT" : "EN";

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem("lang", lang);

    document.body.classList.remove("lang-switch");
  }, 150);
}

// Toggle language
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pt" : "en";
  applyTranslations(currentLang);
});

// Init
applyTranslations(currentLang);
