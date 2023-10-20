document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".whatsapp-button");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const studentNumber = this.getAttribute("data-student-number");
      const studentName = this.getAttribute("data-student-name");

      // Include a default message if you want
      const message = "I want to Book my Appointment";

      openWhatsAppChat("+919424545903", message);
    });
  });

  function openWhatsAppChat(phone, message) {
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }
});
