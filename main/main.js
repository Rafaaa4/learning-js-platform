//show password on login
const showPasswordLogin = document.getElementById("showPassword");
if (showPasswordLogin) {
  showPasswordLogin.addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput) {
      passwordInput.type = this.checked ? "text" : "password";
    }
  });
}

//show password on signup
const showPasswordSignup = document.getElementById("showPassword");
if (showPasswordSignup) {
  showPasswordSignup.addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirmPassword");
    if (passwordInput && confirmInput) {
      const type = this.checked ? "text" : "password";
      passwordInput.type = type;
      confirmInput.type = type;
    }
  });
}

const email = document.getElementById("email");
const pass = document.getElementById("password");

// Handle login form submission
function login(event) {
  event.preventDefault(); 

  if (email.value && pass.value.length >= 6) {
    
    window.location.href = "home.html";
  } else {
    alert("Veuillez entrer des informations valides.");
  }
}

function openCourse(courseID) {
  window.location.href = `course.html?id=${courseID}`;
}

//slide show
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlideIndex = index;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  startSlideshow();
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 4000); 
}

startSlideshow();
