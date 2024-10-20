/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery(){
  const mainImg= document.querySelector('.details__img'),
  smallImg=document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) =>{
    img.addEventListener('click',function(){
      mainImg.src=this.src;
    })
  })
}

imgGallery()
/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab)=>{
  tab.addEventListener('click' , () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});

/*=================newsletter========================*/
// Function to handle newsletter subscription validation
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let newsletterEmail = document.getElementById("newsletterEmail");
  let valid = true;

  // Reset error message
  document.getElementById("newsletterEmailError").style.display = "none";
  newsletterEmail.classList.remove("error");

  // Validate Newsletter Email
  if (newsletterEmail.value === "") {
      document.getElementById("newsletterEmailError").innerText = "Email is required.";
      document.getElementById("newsletterEmailError").style.display = "block";
      newsletterEmail.classList.add("error");
      valid = false;
  } else if (!validateEmail(newsletterEmail.value)) {
      document.getElementById("newsletterEmailError").innerText = "Invalid email format.";
      document.getElementById("newsletterEmailError").style.display = "block";
      newsletterEmail.classList.add("error");
      valid = false;
  }

  if (valid) {
      alert("Subscription successful!");
      // Here you can submit the form or perform any further action
  }
});

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(String(email).toLowerCase());
}


/*=================login signup========================*/
  // Function to handle login form validation
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let valid = true;

    // Reset error messages
    document.getElementById("loginEmailError").style.display = "none";
    document.getElementById("loginPasswordError").style.display = "none";
    loginEmail.classList.remove("error");
    loginPassword.classList.remove("error");

    // Validate Login Email
    if (loginEmail.value === "") {
        document.getElementById("loginEmailError").innerText = "Email is required.";
        document.getElementById("loginEmailError").style.display = "block";
        loginEmail.classList.add("error");
        valid = false;
    }

    // Validate Login Password
    if (loginPassword.value === "") {
        document.getElementById("loginPasswordError").innerText = "Password is required.";
        document.getElementById("loginPasswordError").style.display = "block";
        loginPassword.classList.add("error");
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
        // Here you can submit the form or perform any further action
    }
});
      document.getElementById("registrationForm").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
          let username = document.getElementById("username");
          let registerEmail = document.getElementById("registerEmail");
          let registerPassword = document.getElementById("registerPassword");
          let confirmPassword = document.getElementById("confirmPassword");
          let valid = true;

          // Reset previous errors
          username.classList.remove("error");
          registerEmail.classList.remove("error");
          registerPassword.classList.remove("error");
          confirmPassword.classList.remove("error");
          document.getElementById("usernameError").style.display = "none";
          document.getElementById("registerEmailError").style.display = "none";
          document.getElementById("registerPasswordError").style.display = "none";
          document.getElementById("confirmPasswordError").style.display = "none";

          // Validate Username
          if (username.value === "") {
              document.getElementById("usernameError").innerText = "Name is required.";
              document.getElementById("usernameError").style.display = "block";
              username.classList.add("error");
              valid = false;
          }

          // Validate Email
          if (registerEmail.value === "") {
              document.getElementById("registerEmailError").innerText = "Email is required.";
              document.getElementById("registerEmailError").style.display = "block";
              registerEmail.classList.add("error");
              valid = false;
          }

          // Validate Password
          if (registerPassword.value === "") {
              document.getElementById("registerPasswordError").innerText = "Password is required.";
              document.getElementById("registerPasswordError").style.display = "block";
              registerPassword.classList.add("error");
              valid = false;
          }

          // Validate Confirm Password
          if (confirmPassword.value === "") {
              document.getElementById("confirmPasswordError").innerText = "Confirm password is required.";
              document.getElementById("confirmPasswordError").style.display = "block";
              confirmPassword.classList.add("error");
              valid = false;
          } else if (confirmPassword.value !== registerPassword.value) {
              document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
              document.getElementById("confirmPasswordError").style.display = "block";
              confirmPassword.classList.add("error");
              valid = false;
          }

          // If valid, submit the form (you can add your registration logic here)
          if (valid) {
              alert("Account create successfully!"); // Replace with your form submission logic
          }
      });




     
 