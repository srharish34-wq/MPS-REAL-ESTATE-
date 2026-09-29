document.addEventListener("DOMContentLoaded", function () {

  /* ---- Scroll reveal for cards, timeline items, testimonials ---- */
  const revealSelectors = [
    ".foundation-card",
    ".timeline-item",
    ".standard-card",
    ".voice-card",
    ".responsibility-list li"
  ];
  const revealEls = document.querySelectorAll(revealSelectors.join(","));

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            // small stagger so cards in the same row don't all pop at once
            setTimeout(function () {
              entry.target.classList.add("in-view");
            }, (index % 4) * 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---- Client Voices carousel ---- */
  const track = document.getElementById("voicesTrack");
  const prevBtn = document.getElementById("voicePrev");
  const nextBtn = document.getElementById("voiceNext");

  function scrollByCard(direction) {
    if (!track) return;
    const card = track.querySelector(".voice-card");
    if (!card) return;
    const gap = 24; // must match the CSS gap on .voices-track
    const amount = card.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { scrollByCard(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { scrollByCard(1); });

  /* ---- "Book Free Consultation" opens the shared enquiry popup ---- */
  const bookBtn = document.getElementById("ctaBookConsult");
  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      const fab = document.getElementById("enquireFab");
      if (fab) fab.click();
    });
  }

});