document.addEventListener("DOMContentLoaded", function () {
  const widget = document.createElement("div");
  widget.id = "fixmyhive-widget";
  widget.innerHTML = `
    <a href="tel:+97477839040" class="call-now" title="Call Now">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Call">
    </a>
    <a href="https://wa.me/97477839040" class="whatsapp" title="WhatsApp Us" target="_blank">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="WhatsApp">
    </a>
  `;
  document.body.appendChild(widget);
});
