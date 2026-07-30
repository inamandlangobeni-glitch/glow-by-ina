document.addEventListener("DOMContentLoaded", function () {
    alert("✨ Welcome to Glow by Ina - Luxury Hair & Nail Studio!");
});
const images = [
  "images/154b6387fdf476d2be2d20e91f649788.png",
  "images/49f872ab71777c264c731f499f41c427.png",
  "images/6e39293a0a4ace82fc4691ed75047756.png",
  "images/7114255d817afb831432bbf26f589c73.png",
  "images/FB_IMG_1785315938939.jpg",
  "images/FB_IMG_1785315951699.jpg",
  "images/FB_IMG_1785316042345.jpg",
  "images/FB_IMG_1785316048003.jpg",
  "images/FB_IMG_1785316186889.jpg",
  "images/FB_IMG_1785316223814.jpg"
];

let currentImage = 0;

const heroImage = document.querySelector(".hero-image img");

setInterval(() => {
  heroImage.style.opacity = "0";

  setTimeout(() => {
    currentImage = (currentImage + 1) % images.length;
    heroImage.src = images[currentImage];
    heroImage.style.opacity = "1";
  }, 500);

}, 3000);

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector("select").value;
    const date = this.querySelector('input[type="date"]').value;
    const time = this.querySelector('input[type="time"]').value;
    const notes = this.querySelector("textarea").value;

    const message =
`Hello Glow by Ina! 🌸

I'd like to book an appointment.

👤 Name: ${name}
📞 Phone: ${phone}
💇 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
📝 Notes: ${notes}`;

    window.open(
        `https://wa.me/27718445796?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});
