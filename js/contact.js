document.addEventListener("DOMContentLoaded", function () {

  const OWNER_WHATSAPP = "919600177749";

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccess");
  const successName = document.getElementById("successName");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cfName").value.trim();
    const phone = document.getElementById("cfPhone").value.trim();
    const email = document.getElementById("cfEmail").value.trim();
    const subject = document.getElementById("cfSubject").value;
    const message = document.getElementById("cfMessage").value.trim();

    const waMessage =
      "New Contact Form Enquiry \u2014 MPS Realty Website\n" +
      "Looking To: " + subject + "\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone +
      (email ? "\nEmail: " + email : "") +
      (message ? "\n\nMessage: " + message : "");

    const waUrl = "https://wa.me/" + OWNER_WHATSAPP + "?text=" + encodeURIComponent(waMessage);
    window.open(waUrl, "_blank");

    if (successName) successName.textContent = name || "there";
    form.classList.add("hide");
    successMsg.classList.add("show");
  });

});