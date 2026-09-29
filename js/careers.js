document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("applyOverlay");
  const closeBtn = document.getElementById("applyClose");
  const roleLabel = document.getElementById("applyRoleLabel");
  const positionField = document.getElementById("applyPositionField");
  const form = document.getElementById("applyForm");
  const successMsg = document.getElementById("applySuccess");
  const applyButtons = document.querySelectorAll(".apply-btn");

  function openApply(role) {
    if (roleLabel) roleLabel.innerHTML = "Applying for: <strong>" + role + "</strong>";
    if (positionField) positionField.value = role;

    // reset to a fresh form each time it's opened
    if (form) {
      form.reset();
      form.classList.remove("hide");
    }
    if (successMsg) successMsg.classList.remove("show");
    if (positionField) positionField.value = role;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeApply() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  applyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openApply(btn.getAttribute("data-role") || "General Application");
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeApply);

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeApply();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay && overlay.classList.contains("open")) {
      closeApply();
    }
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // No backend connected yet — this just confirms receipt in the UI.
      // Wire this up to your email/ATS endpoint when ready.
      form.classList.add("hide");
      successMsg.classList.add("show");
    });
  }

});