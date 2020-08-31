const home = "/reiki/index.html";
const about = "/reiki/about.html";
const book = "/reiki/book.html"

const nav_home = document.getElementById("nav_home");
const nav_about = document.getElementById("nav_about");
const nav_book = document.getElementById("nav_book");

const scaler = 1;
const purple_hills = "rgb(50, 17, 50)";

let url = window.location.pathname;

if (url === home){
    nav_home.style.boxShadow = "inset 0 4px 12px 0 rgba(0, 0, 0, .5)";
    nav_home.onclick = function(){
        return false;
    }
    nav_home.onmouseenter = function(){
        nav_home.style.cursor = "default";
        nav_home.style.scale = scaler;
        nav_home.style.backgroundColor = purple_hills; 
    }
}else if (url === about){
    nav_about.style.boxShadow = "inset 0 4px 12px 0 rgba(0, 0, 0, .5)";
    nav_about.onclick = function(){
        return false;
    }
    nav_about.onmouseenter = function(){
        nav_about.style.cursor = "default";
        nav_about.style.scale = scaler;
        nav_about.style.backgroundColor = purple_hills;
    }
}else if (url === book){
    nav_book.style.boxShadow = "inset 0 4px 12px 0 rgba(0, 0, 0, .5)";
    nav_book.onclick = function(){
        return false;
    }
    nav_book.onmouseenter = function(){
        nav_book.style.cursor = "default";
        nav_book.style.cursor = scaler;
        nav_book.style.backgroundColor = purple_hills;
    }
}