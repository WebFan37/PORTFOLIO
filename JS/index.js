//================
//=============== THIS ONE IS FOR THE OLD VERSION =====//
//*******WON'T BE USED IN THE NEWLY CONFIGURED VERSION */
//********SERVE AS A MEMORY  */


//ALL WEB PAGES
let mainPage = document.querySelector(".mainmenu");

let photosPage = document.querySelector(".photos");

let videoPage = document.querySelector(".videos");

let webPage = document.querySelector(".web");

let contactPage = document.querySelector(".contact");

let designPage = document.querySelector(".design");



//ELEMENTS IN MENU BAR
let buttonMain = document.querySelector(".menu > div:nth-of-type(1)");
let buttonPhotos = document.querySelector(".menu > div:nth-of-type(2)");
let buttonVideos = document.querySelector(".menu > div:nth-of-type(3)");
let buttonWeb = document.querySelector(".menu > div:nth-of-type(4)");
let buttonContact = document.querySelector(".menu > div:nth-of-type(5)");
let buttonDesign = document.querySelector(".menu > div:nth-of-type(6)");



//LOAD PAGE STEP BEFORE FUNCTION
buttonMain.addEventListener("click", loadMainPage);
buttonPhotos.addEventListener("click", loadPhotosPage);
buttonVideos.addEventListener("click", loadVideosPage);
buttonWeb.addEventListener("click", loadWebPage);
buttonContact.addEventListener("click", loadContactPage);
buttonDesign.addEventListener("click", loadDesignPage);




//FUNCTION TO CHANGE THE PAGES
function loadMainPage(){
   mainPage.style.display = "flex";
   webPage.style.display = "none";
   photosPage.style.display = "none";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
   designPage.style.display = "none";
}
function loadPhotosPage(){
    mainPage.style.display = "none";
   webPage.style.display = "none";
   photosPage.style.display = "flex";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
   designPage.style.display = "none";
}
function loadVideosPage(){
    mainPage.style.display = "none";
   webPage.style.display = "none";
   photosPage.style.display = "none";
   videoPage.style.display = "flex";
   contactPage.style.display = "none";
   designPage.style.display = "none";
}
function loadWebPage(){
    mainPage.style.display = "none";
   webPage.style.display = "flex";
   photosPage.style.display = "none";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
   designPage.style.display = "none";
}

function loadContactPage(){
    mainPage.style.display = "none";
    webPage.style.display = "none";
    photosPage.style.display = "none";
    videoPage.style.display = "none";
    contactPage.style.display = "flex";
    designPage.style.display = "none";
}
function loadDesignPage(){
    mainPage.style.display = "none";
    webPage.style.display = "none";
    photosPage.style.display = "none";
    videoPage.style.display = "none";
    contactPage.style.display = "none";
    designPage.style.display = "flex";
}

