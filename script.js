// ======================================================
// BANANARECIPES MAIN SCRIPT
// Optimized & Clean JavaScript
// ======================================================



// ===== MOBILE MENU =====

// document.addEventListener("DOMContentLoaded", function () {

//     const menuToggle = document.getElementById('menuToggle');
//     const menuIcon = document.getElementById('menuIcon');
//     const navMenu = document.getElementById('navMenu');

//     if (!menuToggle || !navMenu) {
//         console.error("Menu elements not found!");
//         return;
//     }

//     function toggleMobileMenu() {
//         navMenu.classList.toggle('active');

//         if (navMenu.classList.contains('active')) {
//             menuIcon.classList.remove('fa-bars');
//             menuIcon.classList.add('fa-times');
//             document.body.style.overflow = 'hidden';
//         } else {
//             menuIcon.classList.remove('fa-times');
//             menuIcon.classList.add('fa-bars');
//             document.body.style.overflow = 'visible';
//         }
//     }

//     // Click Event
//     menuToggle.addEventListener('click', toggleMobileMenu);

//     // Close menu when any link is clicked
//     document.querySelectorAll('.nav-menu a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (navMenu.classList.contains('active')) {
//                 toggleMobileMenu();
//             }
//         });
//     });

//     // Close on resize (if user switches to desktop)
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 991 && navMenu.classList.contains('active')) {
//             toggleMobileMenu();
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {

//     const menuToggle = document.getElementById('menuToggle');
//     const menuIcon = document.getElementById('menuIcon');
//     const navMenu = document.getElementById('navMenu');

//     if (!menuToggle || !navMenu) {
//         console.error("❌ Menu elements not found! Check IDs.");
//         return;
//     }

//     function toggleDrawer() {
//         navMenu.classList.toggle('active');

//         if (navMenu.classList.contains('active')) {
//             menuIcon.classList.remove('fa-bars');
//             menuIcon.classList.add('fa-times');
//             document.body.style.overflow = 'hidden';
//         } else {
//             menuIcon.classList.remove('fa-times');
//             menuIcon.classList.add('fa-bars');
//             document.body.style.overflow = 'visible';
//         }
//     }

//     menuToggle.addEventListener('click', toggleDrawer);

//     // Link click karne pe drawer band ho jaaye
//     document.querySelectorAll('.nav-menu a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (navMenu.classList.contains('active')) {
//                 toggleDrawer();
//             }
//         });
//     });

// });




// ===== SEARCH OVERLAY =====

function toggleSearch() {

    const overlay = document.getElementById("searchOverlay");

    if (!overlay) return;

    overlay.style.display =
        overlay.style.display === "flex"
        ? "none"
        : "flex";

}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    navMenu.classList.toggle('active');

    const menuIcon = document.querySelector('.nav-icons .icon-btn i.fa-bars, .nav-icons .icon-btn i.fa-times');
    if (menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    }

    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
}

function toggleMenu() {
    toggleMobileMenu();
}



// ===== SEARCH RECIPES =====

function searchRecipes() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(
        ".recipe-card, .meal-card, .ingredient-card, .ingredient-box"
    );

    cards.forEach((card) => {

        const title =
            card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}



// ===== VIEW RECIPE =====

function viewRecipe(recipeName) {

    alert("🍽️ Opening Recipe: " + recipeName);

}



// ===== SCROLL TO RECIPES =====

function scrollToRecipes() {

    const section =
        document.getElementById("recipesSection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// ===== AI CHEF MODAL =====

function openChefModal() {

    const modal =
        document.getElementById("chefModal");

    if (modal) {

        modal.style.display = "flex";

    } else {

        alert("👨‍🍳 AI Chef Coming Soon!");

    }

}


function closeChefModal() {

    const modal =
        document.getElementById("chefModal");

    if (modal) {

        modal.style.display = "none";

    }

}



// ===== AI CHEF CHAT =====

function sendChefMessage() {

    const input =
        document.getElementById("chatInput");

    const chatMessages =
        document.getElementById("chatMessages");

    if (!input || !chatMessages) return;

    const userMessage = input.value.trim();

    if (userMessage === "") return;



    // USER MESSAGE

    const userDiv = document.createElement("div");

    userDiv.classList.add("message", "user");

    userDiv.innerText = userMessage;

    chatMessages.appendChild(userDiv);



    // BOT MESSAGE

    const botDiv = document.createElement("div");

    botDiv.classList.add("message", "bot");



    let reply = "";

    const message = userMessage.toLowerCase();



    if (message.includes("banana")) {

        reply =
        "🍌 Try Banana Pancakes, Banana Shake, and Banana Cake.";

    }

    else if (message.includes("paneer")) {

        reply =
        "🧀 Paneer Butter Masala and Chilli Paneer are great options.";

    }

    else if (message.includes("chicken")) {

        reply =
        "🍗 Try Butter Chicken or Chinese Chilli Chicken.";

    }

    else if (message.includes("breakfast")) {

        reply =
        "🥞 Healthy breakfast ideas: Oats, Sandwich & Pancakes.";

    }

    else {

        reply =
        "👨‍🍳 Delicious idea! Explore more recipes on BananaRecipes.";

    }



    setTimeout(() => {

        botDiv.innerText = reply;

        chatMessages.appendChild(botDiv);

        chatMessages.scrollTop =
        chatMessages.scrollHeight;

    }, 700);



    input.value = "";

}



// ===== ENTER KEY SUPPORT =====

const chatInput =
document.getElementById("chatInput");

if (chatInput) {

    chatInput.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            sendChefMessage();

        }

    });

}



// ===== NEWSLETTER =====

const subscribeBtn =
document.querySelector(".newsletter-box button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        const email =
        document.querySelector(".newsletter-box input").value;

        if (email === "") {

            alert("📧 Please enter your email");

        } else {

            alert("🎉 Thanks for subscribing!");

            document.querySelector(".newsletter-box input").value = "";

        }

    });

}



// ===== HERO BUTTONS =====

const heroButtons =
document.querySelectorAll(".primary-btn, .secondary-btn");

heroButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        if (btn.classList.contains("primary-btn")) {

            window.scrollTo({
                top: 700,
                behavior: "smooth"
            });

        } else {

            alert("🎥 Recipe videos coming soon!");

        }

    });

});



// ===== READ MORE BUTTONS =====

const readButtons =
document.querySelectorAll(".ingredient-info button");

readButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const ingredient =
        btn.parentElement.querySelector("h3").innerText;

        alert("📖 Opening details for " + ingredient);

    });

});



// ===== BUTTON CLICK EFFECT =====

const buttons =
document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});



// ===== CARD HOVER EFFECT =====

const cards =
document.querySelectorAll(
".recipe-card, .meal-card, .category-card, .ingredient-card, .ingredient-box"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = ".4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// ===== SOCIAL ICON EFFECT =====

const socialIcons =
document.querySelectorAll(".social-icons i");

socialIcons.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-5px)";
        icon.style.transition = ".3s";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0px)";

    });

});



// ===== CLOSE OVERLAY / MODAL =====

window.addEventListener("click", (e) => {

    const searchOverlay =
    document.getElementById("searchOverlay");

    const chefModal =
    document.getElementById("chefModal");

    if (e.target === searchOverlay) {

        searchOverlay.style.display = "none";

    }

    if (e.target === chefModal) {

        chefModal.style.display = "none";

    }

});



// ===== NAVBAR SCROLL EFFECT =====

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
        "rgba(255,255,255,0.98)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.1)";

    }

    else {

        navbar.style.background =
        "rgba(255,255,255,0.95)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    }

});



// ===== PAGE LOAD EFFECT =====

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ======================================================
// EXTRA FEATURES FOR BANANARECIPES
// Add below main script.js
// ======================================================



// ===== AUTO CLOSE MOBILE MENU =====

const navLinks =
document.querySelectorAll(".nav-menu a");

navLinks.forEach((link)=>{

    link.addEventListener("click",()=>{

        const menu =
        document.querySelector(".nav-menu");

        if(window.innerWidth < 1100){

            menu.style.display = "none";
            menu.classList.remove("active-menu");

        }

    });

});



// ===== ACTIVE NAV LINK =====

const currentPage =
window.location.pathname.split("/").pop();

navLinks.forEach((link)=>{

    const linkPage =
    link.getAttribute("href");

    if(linkPage === currentPage){

        link.classList.add("active");

    }

});



// ===== SMOOTH SCROLL FOR BUTTONS =====

const scrollButtons =
document.querySelectorAll(".scroll-btn");

scrollButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        const target =
        document.querySelector(btn.dataset.target);

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// ===== LAZY IMAGE ANIMATION =====

const images =
document.querySelectorAll("img");

images.forEach((img)=>{

    img.addEventListener("load",()=>{

        img.style.opacity = "1";
        img.style.transition = "0.5s";

    });

});



// ===== SIMPLE LOADER =====

window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },500);

    }

});



// ===== SEARCH ENTER SUPPORT =====

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keypress",(e)=>{

        if(e.key === "Enter"){

            searchRecipes();

        }

    });

}



// ===== RECIPE FAVORITE BUTTON =====

const favoriteButtons =
document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.classList.toggle("active-favorite");

        if(btn.classList.contains("active-favorite")){

            btn.innerHTML = "❤️";

        }else{

            btn.innerHTML = "🤍";

        }

    });

});



// ===== RECIPE SHARE BUTTON =====

const shareButtons =
document.querySelectorAll(".share-btn");

shareButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        navigator.clipboard.writeText(window.location.href);

        alert("🔗 Recipe link copied!");

    });

});



// ===== DARK MODE =====

const darkModeBtn =
document.querySelector(".dark-mode-btn");

if(darkModeBtn){

    darkModeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

    });

}



// ===== COUNTER ANIMATION =====

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter)=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});



// ===== SCROLL TO TOP BUTTON =====

const topBtn =
document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}



// ===== TYPING EFFECT =====

const typingText =
document.querySelector(".typing-text");

if(typingText){

    const words = [
        "Healthy Recipes",
        "Delicious Meals",
        "Fresh Ingredients",
        "Tasty Dinners"
    ];

    let wordIndex = 0;
    let charIndex = 0;

    function typeEffect(){

        if(charIndex < words[wordIndex].length){

            typingText.innerHTML +=
            words[wordIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeEffect,100);

        }else{

            setTimeout(eraseEffect,1500);

        }

    }

    function eraseEffect(){

        if(charIndex > 0){

            typingText.innerHTML =
            words[wordIndex].substring(0,charIndex-1);

            charIndex--;

            setTimeout(eraseEffect,50);

        }else{

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

            setTimeout(typeEffect,300);

        }

    }

    typeEffect();

}



// ===== REVEAL ON SCROLL =====

const revealElements =
document.querySelectorAll(
".recipe-card, .meal-card, .ingredient-card, .ingredient-box"
);

window.addEventListener("scroll",revealOnScroll);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach((element)=>{

        const position =
        element.getBoundingClientRect().top;

        if(position < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

revealOnScroll();



// ===== ONLINE / OFFLINE STATUS =====

window.addEventListener("offline",()=>{

    alert("⚠️ You are offline!");

});

window.addEventListener("online",()=>{

    alert("✅ Internet connection restored!");

});



// ===== COPYRIGHT YEAR AUTO =====

const copyright =
document.querySelector(".copyright");

if(copyright){

    const year = new Date().getFullYear();

    copyright.innerHTML =
    `© ${year} BananaRecipes | All Rights Reserved`;

}


// ===== SCROLL FUNCTION =====

function scrollToOccasions(){

    document
    .getElementById("occasionSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


// ===== SHOW RECIPE =====

function showRecipe(name){

    alert("Opening " + name + " Recipes 🍴");

}


// ===== AI CHEF BUTTON =====

function openChef(){

    alert("AI Chef Coming Soon 🤖");

}

// SEARCH OVERLAY

function toggleSearch(){

  const overlay =
  document.getElementById("searchOverlay");

  if(overlay.style.display === "flex"){

    overlay.style.display = "none";

  }else{

    overlay.style.display = "flex";

  }

}


// MOBILE MENU

function toggleMenu(){

    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    navMenu.classList.toggle('active');

    const menuIcon = document.querySelector('.nav-icons .icon-btn i.fa-bars, .nav-icons .icon-btn i.fa-times');
    if (menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    }

    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';

}


// SCROLL

function scrollCuisine(){

  document
  .getElementById("cuisineSection")
  .scrollIntoView({
    behavior:"smooth"
  });

}


// ALERT

function showCuisine(name){

  alert("Welcome to " + name);

}

// SEARCH OVERLAY

function toggleSearch(){

    const overlay =
    document.getElementById("searchOverlay");

    if(overlay.style.display === "flex"){

        overlay.style.display = "none";

    }else{

        overlay.style.display = "flex";

    }

}


// MOBILE MENU

function toggleMenu(){

    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    navMenu.classList.toggle('active');

    const menuIcon = document.querySelector('.nav-icons .icon-btn i.fa-bars, .nav-icons .icon-btn i.fa-times');
    if (menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    }

    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';

}

// NEWS SCROLL

function scrollNews(){

    document
    .getElementById("newsSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


// NEWS ALERT

function readNews(title){

    alert("Opening: " + title);

}

function exploreFeatures(){
    alert("Explore amazing food features 🍴");
}

function tryChef(){
    alert("AI Chef is ready 👨‍🍳");
}

function subscribeFeature(){
    alert("Subscribed Successfully ✅");
}

/* SEARCH OVERLAY */

function toggleSearch(){

    const overlay = document.getElementById("searchOverlay");

    if(overlay.style.display === "flex"){
        overlay.style.display = "none";
    }
    else{
        overlay.style.display = "flex";
    }

}

/* SEARCH */

function searchRecipes(){

    const input = document
    .getElementById("searchInput")
    .value;

    if(input === ""){
        alert("Please type something");
    }
    else{
        alert("Searching for: " + input);
    }

}

/* MOBILE MENU */

function toggleMobileMenu(){
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    navMenu.classList.toggle('active');

    const menuIcon = document.querySelector('.nav-icons .icon-btn i.fa-bars, .nav-icons .icon-btn i.fa-times');
    if (menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    }

    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
}

/* AI CHEF */

function openChefModal(){
    alert("AI Chef Coming Soon 👨‍🍳");
}

/* ===== FOOTER SUBSCRIBE ===== */

const footerBtn = document.querySelector(".footer-newsletter button");

footerBtn.addEventListener("click", function () {

    const emailInput = document.querySelector(".footer-newsletter input");

    const email = emailInput.value.trim();

    if(email === ""){

        alert("Please enter your email 📧");

        return;
    }

    if(!validateEmail(email)){

        alert("Please enter a valid email ❌");

        return;
    }

    alert("Subscribed Successfully 🎉");

    emailInput.value = "";

});


/* ===== EMAIL VALIDATION ===== */

function validateEmail(email){

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return pattern.test(email);

}


/* ===== SOCIAL ICON EFFECT ===== */

const socialLinks = document.querySelectorAll(".social-icons a");

socialLinks.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-5px) scale(1.1)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0) scale(1)";

    });

});


/* ===== FOOTER LINKS CLICK ===== */

const footerLinks = document.querySelectorAll(".footer-box a");

footerLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Opening:", link.innerText);

    });

});

