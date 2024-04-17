function toggleMenu(){
    /*we are targetting these two elements*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    /*when we click it  */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function redirectToGitHubJuegodelavida() {
    
    window.open('https://github.com/paodiazs/juegodelavida.git', '_blank');
}
function redirectToGitHubTuriOax(){
    window.open('https://github.com/paodiazs/appturioax.git', '_blank');
}
function redirectToGitHubSecurityforall(){
    window.open('https://github.com/paodiazs/SecurityforAll.git', '_blank');
}
function redirectToGitHub(){
    window.open('https://github.com/paodiazs', '_blank');
}
function redirectTolinkedin(){
    window.open('https://www.linkedin.com/in/paola-diaz-ser/', '_blank');
}