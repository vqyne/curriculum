var body = document.body;
var bodyStyle = window.getComputedStyle(body, null);
bgColor = bodyStyle.backgroundColor;

var isDarkMode;
const toggleButton = document.getElementById("toggle").addEventListener('click', function () {
    body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    body.classList.toggle('body');
    body.classList.toggle('body.dark-mode');
    
    bodyStyle = window.getComputedStyle(body, null);
    bgColor = bodyStyle.backgroundColor;

    if(bgColor == (0,0,0) ){
        isDarkMode = 1;
    }
    else {
        isDarkMode = 0;
    }

});


var activePage = window.location.pathname;
activePage = activePage.split("/");
activePage = activePage[activePage.length - 1];
activePage = activePage.substring(0, activePage.lastIndexOf("."));
activePage = activePage.replace(new RegExp("(%20|_|-)", "g"), "");
console.log(activePage);




const homeButton = document.getElementById("home").addEventListener("click", function () {
    window.toggle("/home.html", "_self");
    body.classList.toggle('active');
});
const aboutButton = document.getElementById("aboutme").addEventListener("click", function () {
    window.open("pages/about.html", "_self");
    body.classList.toggle('active');
});
const contactButton = document.getElementById("contact").addEventListener("click", function () {
    window.open("pages/contact.html", "_self");
    body.classList.toggle('active');
});
const projectsButton = document.getElementById("projects").addEventListener("click", function () {
    window.open("pages/projects.html", "_self");
    body.classList.toggle('active');
});


