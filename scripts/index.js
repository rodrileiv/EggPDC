function showAlert() {
  alert("¡Hola, esta es una alerta desde JavaSript!");
}

document.getElementById("myForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}

document.querySelector(".button-menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    var href = link.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
  });
});

