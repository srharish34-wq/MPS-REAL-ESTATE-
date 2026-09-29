document.addEventListener("DOMContentLoaded", function () {

  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach(function (slider) {
    const track = slider.querySelector(".slider-track");
    const images = Array.from(track.querySelectorAll("img"));
    const prevBtn = slider.querySelector(".slider-arrow.prev");
    const nextBtn = slider.querySelector(".slider-arrow.next");
    const dotsWrap = slider.querySelector(".slider-dots");
    let index = 0;

    // Build dots
    images.forEach(function (_, i) {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", "Show image " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach(function (d, i) { d.classList.toggle("active", i === index); });
    }

    function goTo(i) {
      index = (i + images.length) % images.length;
      render();
    }

    prevBtn.addEventListener("click", function () { goTo(index - 1); });
    nextBtn.addEventListener("click", function () { goTo(index + 1); });

    render();
  });

});