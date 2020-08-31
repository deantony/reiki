const home = "/C:/xampp/htdocs/upload/reiki/index.html";
const about = "/C:/xampp/htdocs/upload/reiki/about.html";
const book = "/C:/xampp/htdocs/upload/reiki/book.html"

const nav_home = document.getElementById("nav_home");

let url = window.location.pathname;

if (url === home){
    nav_home.style.backgroundColor = "rgb(25, 15, 25)";
    nav_home.style.boxShadow = "inset 0 4px 12px 0 rgba(0, 0, 0, .5)"
    nav_home.onclick = function(){
        return false;
    }
    nav_home.onmouseenter = function(){
        nav_home.style.cursor = "default";
    }
}