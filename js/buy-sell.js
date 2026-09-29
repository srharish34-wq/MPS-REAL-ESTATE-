/* =========================================================
   MPS REALTY — Buy or Sell a Home page logic
   ========================================================= */

// Business WhatsApp number that enquiries are sent to.
// NOTE: this is MPS Realty's own number, not a per-property owner
// number — we don't have individual owner contacts for each listing.
const OWNER_WHATSAPP = "919600177749";

const PROPERTIES = [

  {
    id: "res-dr-ranga",
    title: "Compact City Bungalow with Guest Apartments",
    location: "Dr. Ranga Road, Chennai",
    type: "sale",
    image: "images/res-ranga-road-1.jpg",
    specs: [
      { label: "Built-Up Area", value: "10,000 Sq.ft" },
      { label: "Land Area", value: "1.5 Grounds" },
      { label: "Configuration", value: "G+3, 3\u00d72BHK + 1\u00d73BHK" },
      { label: "Facing", value: "North" },
      { label: "Rental Income", value: "\u20B93.50 Lakhs/Month" }
    ],
    price: "\u20B99 Crores (Negotiable)"
  },
  {
    id: "res-nolambur",
    title: "Premium 3BHK Flat \u2014 Jains Sunderbans",
    location: "Nolambur, Chennai",
    type: "sale",
    image: "images/res-sunderbans-1.jpg",
    specs: [
      { label: "Super Built-up", value: "1,285 Sq.ft" },
      { label: "UDS", value: "735.54 Sq.ft" },
      { label: "Facing", value: "South" },
      { label: "Floor", value: "3rd of 4, Parking Included" }
    ],
    price: "\u20B995 Lakhs (Negotiable)"
  },
  {
    id: "res-mahalingapuram",
    title: "Prime Land \u2014 Near Sree Ayyappan Guruvayoorappan Temple",
    location: "Mahalingapuram, Chennai",
    type: "sale",
    image: "images/Mahalingapuram_03.jpg",
    specs: [
      { label: "Land Area", value: "5,480 Sq.ft" },
      { label: "Dimensions", value: "40 x 137" },
      { label: "Facing", value: "South" },
      { label: "Road Access", value: "40 Feet" }
    ],
    price: "\u20B917 Crores (Negotiable)"
  },
  {
    id: "res-maduravoyal",
    title: "Premium 3 BHK Flat \u2014 Pallavan Nagar",
    location: "Maduravoyal, Chennai",
    type: "sale",
    image: "images/res-pallavan-nagar-2.jpg",
    specs: [
      { label: "Built-up", value: "1,150 Sq.ft" },
      { label: "UDS", value: "514 Sq.ft" },
      { label: "Facing", value: "East" },
      { label: "Floor", value: "2nd, Lift Available" }
    ],
    price: "\u20B91.10 Crores (Negotiable)"
  },
  {
    id: "res-mogappair",
    title: "Prime Land \u2014 JJ Nagar (Residential / Commercial)",
    location: "Mogappair East, Chennai",
    type: "sale",
    image: "images/res-mogappair-east-2.jpg",
    specs: [
      { label: "Land Area", value: "2,100 Sq.ft" },
      { label: "Dimensions", value: "30 x 70" },
      { label: "Facing", value: "South" },
      { label: "Road Access", value: "33 Feet" }
    ],
    price: "\u20B94.75 Crores (Negotiable)"
  },
  {
    id: "com-anna-nagar",
    title: "Fully Commercial Building for Sale",
    location: "Anna Nagar West Extension (Behind VGN, Near VR Mahal), Chennai",
    type: "sale",
    image: "images/res-anna-nagar-2.jpg",
    specs: [
      { label: "Built-up Area", value: "4,354 Sq.ft" },
      { label: "Land Area", value: "1,453 Sq.ft" },
      { label: "Building", value: "Ground + 3 Floors" },
      { label: "Road Width", value: "24 Feet" },
      { label: "Rental Income", value: "\u20B92.50 Lakhs/Month" }
    ],
    price: "\u20B94.50 Crores (Negotiable)"
  },
  {
    id: "com-adambakkam",
    title: "Prime Commercial Property \u2014 100 Ft Road",
    location: "Adambakkam, Chennai",
    type: "sale",
    image: "images/res-adambakkam-2.jpg",
    specs: [
      { label: "Total Area", value: "4,283.49 Sq.ft" },
      { label: "Carpet Shop Area", value: "3,166.53 Sq.ft" },
      { label: "Floor", value: "2nd Floor" },
      { label: "Lift & Parking", value: "Available" },
      { label: "Rental Income", value: "\u20B94\u20135 Lakhs/Month" }
    ],
    price: "\u20B99 Crores"
  },
  {
    id: "com-koyambedu",
    title: "Prime Commercial Space \u2014 Ten Square Mall",
    location: "Koyambedu, Chennai",
    type: "sale",
    image: "images/koyambedu-ten-square-1.jpg",
    specs: [
      { label: "Built-Up Area", value: "6,029 Sq.ft" },
      { label: "UDS", value: "2,411 Sq.ft" },
      { label: "Floor", value: "2nd Floor" },
      { label: "Parking", value: "5 Cars + 20 Bikes" }
    ],
    price: "\u20B912,000/Sq.ft (Slightly Negotiable)"
  },
  {
    id: "com-parrys",
    title: "Commercial Office Space \u2014 SMJ Plaza",
    location: "2nd Lane, Beach Road, Parrys, Chennai",
    type: "sale",
    image: "images/com-smj-plaza-3.jpg",
    specs: [
      { label: "Area", value: "1,712 Sq.ft" },
      { label: "Floor", value: "First Floor" },
      { label: "Facing", value: "East" },
      { label: "Road Width", value: "40 Feet" },
      { label: "Guideline Value", value: "\u20B915,900/Sq.ft" }
    ],
    price: "\u20B911,500/Sq.ft"
  },
  {
    id: "com-mahalingapuram-office",
    title: "Corporate Office Space for Rent",
    location: "Mahalingapuram, Chennai (Near HP Petrol Bunk)",
    type: "rent",
    image: "images/mahalingapuram-office-1.jpg",
    specs: [
      { label: "Area", value: "2,200 Sq.ft" },
      { label: "Status", value: "Fully Furnished" },
      { label: "Includes", value: "Custom Cabins & Workstations" },
      { label: "Parking", value: "Available" },
      { label: "Maintenance", value: "\u20B97/Sq.ft + GST" }
    ],
    price: "\u20B92,00,000 + GST /month"
  },
  {
    id: "com-pallikaranai",
    title: "Prime Commercial Space for Rent",
    location: "Kamakoti Nagar, Pallikaranai, Chennai",
    type: "rent",
    image: "images/pallikaranai-1.jpg",
    specs: [
      { label: "Area", value: "1,700 Sq.ft" },
      { label: "Floor", value: "2nd Floor" },
      { label: "Facing", value: "East" },
      { label: "Road / Lift / Parking", value: "24 Ft, Lift & Parking" }
    ],
    price: "\u20B990,000 /month, Negotiable"
  }

];

/* ---------------------------------------------------------
   RENDER
   --------------------------------------------------------- */
function renderProperties() {
  const container = document.getElementById("propertiesList");
  if (!container) return;

  const html = PROPERTIES.map(function (p) {
    const badgeLabel = p.type === "rent" ? "For Rent" : "For Sale";
    const badgeClass = p.type === "rent" ? "bp-badge rent" : "bp-badge";
    const actionLabel = p.type === "rent" ? "Rent Now" : "Buy Now";
    const actionClass = p.type === "rent" ? "btn btn-gold bp-action-btn rent" : "btn btn-gold bp-action-btn";

    const specsHtml = p.specs.map(function (s) {
      return '<li><span>' + s.label + '</span><strong>' + s.value + '</strong></li>';
    }).join("");

    return (
      '<article class="bp-row" id="' + p.id + '">' +
        '<div class="bp-details">' +
          '<span class="' + badgeClass + '">' + badgeLabel + '</span>' +
          '<h3>' + p.title + '</h3>' +
          '<p class="bp-location">\uD83D\uDCCD ' + p.location + '</p>' +
          '<ul class="bp-specs">' + specsHtml + '</ul>' +
          '<p class="bp-price">' + p.price + '</p>' +
          '<div class="bp-actions">' +
            '<button class="' + actionClass + '" data-id="' + p.id + '" data-action="enquire">' + actionLabel + '</button>' +
            '<button class="btn btn-outline-dark" data-id="' + p.id + '" data-action="pdf">Preview &amp; Download PDF</button>' +
          '</div>' +
        '</div>' +
        '<figure class="bp-media"><img src="' + p.image + '" alt="' + p.title + '"></figure>' +
      '</article>'
    );
  }).join("");

  container.innerHTML = html;
}

function getPropertyById(id) {
  return PROPERTIES.find(function (p) { return p.id === id; });
}

function loadImageAsDataURL(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status + " loading " + url);
        return res.blob();
      })
      .then(function (blob) {
        const objectUrl = URL.createObjectURL(blob);
        const img = new Image();

        img.onload = function () {
          // Re-draw through a canvas to normalize the PNG encoding —
          // jsPDF's built-in PNG decoder can fail on some export formats
          // (certain color profiles / interlacing) even when the browser
          // itself displays the file with no problem. This re-encode step
          // fixes that mismatch.
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          canvas.getContext("2d").drawImage(img, 0, 0);
          URL.revokeObjectURL(objectUrl);
          try {
            resolve(canvas.toDataURL("image/png"));
          } catch (err) {
            reject(err);
          }
        };

        img.onerror = function () {
          URL.revokeObjectURL(objectUrl);
          reject(new Error("Browser could not decode the image file: " + url));
        };

        img.src = objectUrl;
      })
      .catch(function (err) {
        // Logged (not silent) so this is easy to diagnose in the browser console.
        console.warn("MPS Realty PDF: logo failed to load —", err.message || err);
        reject(err);
      });
  });
}

/* ---------------------------------------------------------
   ENQUIRY MODAL -> WHATSAPP
   --------------------------------------------------------- */
function initEnquiryModal() {
  const overlay = document.getElementById("bsOverlay");
  const closeBtn = document.getElementById("bsClose");
  const label = document.getElementById("bsPropertyLabel");
  const form = document.getElementById("bsForm");
  const successMsg = document.getElementById("bsSuccess");
  let activeProperty = null;

  function open(property) {
    activeProperty = property;
    label.innerHTML = "Property: <strong>" + property.title + "</strong>";
    form.reset();
    form.classList.remove("hide");
    successMsg.classList.remove("show");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!activeProperty) return;

    const name = document.getElementById("bsName").value.trim();
    const phone = document.getElementById("bsPhone").value.trim();
    const badgeLabel = activeProperty.type === "rent" ? "For Rent" : "For Sale";

    const message =
      "New Enquiry from MPS Realty Website\n" +
      "Property: " + activeProperty.title + "\n" +
      "Location: " + activeProperty.location + "\n" +
      "Type: " + badgeLabel + "\n" +
      "Price: " + activeProperty.price + "\n\n" +
      "Customer Name: " + name + "\n" +
      "Customer Phone: " + phone;

    const waUrl = "https://wa.me/" + OWNER_WHATSAPP + "?text=" + encodeURIComponent(message);
    window.open(waUrl, "_blank");

    form.classList.add("hide");
    successMsg.classList.add("show");
  });

  // Delegate clicks from all "enquire" buttons rendered by renderProperties()
  document.getElementById("propertiesList").addEventListener("click", function (e) {
    const btn = e.target.closest('[data-action="enquire"]');
    if (!btn) return;
    const property = getPropertyById(btn.getAttribute("data-id"));
    if (property) open(property);
  });
}

/* ---------------------------------------------------------
   PDF BUILD, PREVIEW & DOWNLOAD
   --------------------------------------------------------- */

// jsPDF's built-in fonts (helvetica/times) don't include the ₹ glyph —
// that's what was rendering as a stray superscript "1". Swap it for
// "Rs." inside the PDF only; the webpage itself still shows ₹ fine.
function pdfSafe(text) {
  return String(text).replace(/\u20B9/g, "Rs. ");
}

let currentPdfDoc = null;
let currentPdfFilename = null;
let currentPdfBlobUrl = null;

async function buildPropertyPDF(property) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 40;

  // ---- Header: logo + business name ----
  try {
    const logoData = await loadImageAsDataURL("images/logo.png");
    doc.addImage(logoData, "PNG", marginX, 30, 60, 60);
  } catch (err) {
    // Logo failed to load — see console for the reason. Two common causes:
    // 1) images/logo.png doesn't exist at that exact path/name (case-sensitive)
    // 2) the page was opened directly as a file:// path instead of through
    //    a local server or real hosting — browsers block fetch() for local
    //    files in that mode. Serve the folder (e.g. a Live Server extension,
    //    `python -m http.server`, or your actual hosting) instead of
    //    double-clicking the HTML file.
    // The PDF still generates without the logo rather than failing outright.
  }

  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.setTextColor(13, 43, 33);
  doc.text("MPS Realty", marginX + 72, 55);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(110, 110, 110);
  doc.text("Your Trusted Property Partner", marginX + 72, 70);
  doc.text("+91 96001 77749  |  www.mpsrealty.in", marginX + 72, 83);

  doc.setDrawColor(201, 160, 90);
  doc.setLineWidth(1.2);
  doc.line(marginX, 108, pageWidth - marginX, 108);

  // ---- Title / location / badge ----
  let y = 140;
  doc.setFont("times", "bold");
  doc.setFontSize(17);
  doc.setTextColor(13, 43, 33);
  doc.text(doc.splitTextToSize(pdfSafe(property.title), pageWidth - marginX * 2), marginX, y);
  y += 30;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(90, 90, 90);
  doc.text("Location: " + pdfSafe(property.location), marginX, y);
  y += 18;

  const badgeLabel = property.type === "rent" ? "FOR RENT" : "FOR SALE";
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(156, 116, 35);
  doc.text(badgeLabel, marginX, y);
  y += 30;

  // ---- Specs table ----
  doc.setDrawColor(220, 220, 220);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 24;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(13, 43, 33);
  doc.text("Property Details", marginX, y);
  y += 20;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  property.specs.forEach(function (spec) {
    doc.setTextColor(90, 90, 90);
    doc.text(spec.label + ":", marginX, y);
    doc.setTextColor(20, 32, 26);
    doc.text(doc.splitTextToSize(pdfSafe(spec.value), pageWidth - marginX - 220), 220, y);
    y += 22;
  });

  y += 14;
  doc.setDrawColor(220, 220, 220);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 30;

  // ---- Price ----
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.setTextColor(13, 43, 33);
  doc.text("Price: " + pdfSafe(property.price), marginX, y);
  y += 50;

  // ---- Footer ----
  doc.setDrawColor(220, 220, 220);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(120, 120, 120);
  doc.text("For enquiry & site visit, call/WhatsApp: 96001 77749 / 98402 15475", marginX, y);
  y += 14;
  doc.text("MPS Realty, No: 47 Kalaimani Street, Karthikeyan Nagar, Maduravoyal, Chennai - 600095", marginX, y);

  return doc;
}

async function previewPropertyPDF(property) {
  if (!window.jspdf) {
    alert("PDF library failed to load. Check your internet connection and try again.");
    return;
  }

  const overlay = document.getElementById("pdfOverlay");
  const frame = document.getElementById("pdfPreviewFrame");

  const doc = await buildPropertyPDF(property);
  const blob = doc.output("blob");

  // clean up any previous preview's object URL before creating a new one
  if (currentPdfBlobUrl) URL.revokeObjectURL(currentPdfBlobUrl);

  currentPdfDoc = doc;
  currentPdfFilename = property.id + "-mps-realty.pdf";
  currentPdfBlobUrl = URL.createObjectURL(blob);

  frame.src = currentPdfBlobUrl;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePdfPreview() {
  const overlay = document.getElementById("pdfOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function initPdfPreviewModal() {
  const overlay = document.getElementById("pdfOverlay");
  const closeBtn = document.getElementById("pdfClose");
  const cancelBtn = document.getElementById("pdfCancel");
  const downloadBtn = document.getElementById("pdfDownload");

  closeBtn.addEventListener("click", closePdfPreview);
  cancelBtn.addEventListener("click", closePdfPreview);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closePdfPreview();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) closePdfPreview();
  });

  downloadBtn.addEventListener("click", function () {
    if (currentPdfDoc && currentPdfFilename) {
      currentPdfDoc.save(currentPdfFilename);
    }
  });
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderProperties();
  initEnquiryModal();
  initPdfPreviewModal();

  document.getElementById("propertiesList").addEventListener("click", function (e) {
    const btn = e.target.closest('[data-action="pdf"]');
    if (!btn) return;
    const property = getPropertyById(btn.getAttribute("data-id"));
    if (property) previewPropertyPDF(property);
  });
});