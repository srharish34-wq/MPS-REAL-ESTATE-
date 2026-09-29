document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu open/close
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Dropdown menus (Services / Projects) — click on touch/mobile,
  // hover already works on desktop via CSS
  document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const parent = toggle.closest(".has-dropdown");
      const isOpen = parent.classList.contains("open");

      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        if (el !== parent) el.classList.remove("open");
      });

      parent.classList.toggle("open", !isOpen);
      toggle.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
  });

  // Close dropdowns / mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
    if (!e.target.closest(".main-nav") && !e.target.closest("#navToggle")) {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Enquiry popup ----
  const overlay = document.getElementById("enquiryOverlay");
  const openTriggers = [
    document.getElementById("enquireFab"),
    document.getElementById("openEnquiryFromFind")
  ];
  const closeBtn = document.getElementById("enquiryClose");
  const form = document.getElementById("enquiryForm");
  const successMsg = document.getElementById("enquirySuccess");

  function openEnquiry() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeEnquiry() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  openTriggers.forEach(function (btn) {
    if (btn) btn.addEventListener("click", openEnquiry);
  });

  if (closeBtn) closeBtn.addEventListener("click", closeEnquiry);

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeEnquiry();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay && overlay.classList.contains("open")) {
      closeEnquiry();
    }
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // No backend is connected yet — this just confirms receipt in the UI.
      // Wire this up to your email/CRM endpoint when ready.
      form.classList.add("hide");
      successMsg.classList.add("show");
    });
  }

});

(function () {
  const track = document.getElementById("reviewTrack");
  const dotsWrap = document.getElementById("reviewDots");
  const prevBtn = document.getElementById("reviewPrev");
  const nextBtn = document.getElementById("reviewNext");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".review-slide"));
  let current = 0;
  let timer = null;

  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.className = "review-dot";
    dot.setAttribute("aria-label", "Show review " + (i + 1));
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    render();
    restartAutoplay();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  track.addEventListener("mouseenter", () => clearInterval(timer));
  track.addEventListener("mouseleave", restartAutoplay);

  render();
  restartAutoplay();
})();

(function () {
  const amountEl = document.getElementById("emiAmount");
  const rateEl = document.getElementById("emiRate");
  const tenureEl = document.getElementById("emiTenure");
  if (!amountEl) return;

  const amountVal = document.getElementById("emiAmountVal");
  const rateVal = document.getElementById("emiRateVal");
  const tenureVal = document.getElementById("emiTenureVal");
  const resultEl = document.getElementById("emiResult");

  function formatINR(num) {
    return "₹" + Math.round(num).toLocaleString("en-IN");
  }

  function calculate() {
    const P = parseFloat(amountEl.value);
    const annualRate = parseFloat(rateEl.value);
    const years = parseInt(tenureEl.value, 10);

    amountVal.textContent = formatINR(P);
    rateVal.textContent = annualRate + "%";
    tenureVal.textContent = years + (years === 1 ? " year" : " years");

    const r = annualRate / 12 / 100;
    const n = years * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    resultEl.textContent = formatINR(emi);
  }

  [amountEl, rateEl, tenureEl].forEach((el) => el.addEventListener("input", calculate));

  const enquireBtn = document.getElementById("emiEnquireBtn");
  if (enquireBtn) {
    enquireBtn.addEventListener("click", function () {
      const fab = document.getElementById("enquireFab");
      if (fab) fab.click();
    });
  }

  calculate();
})();