window.onload = pageLoad;
function pageLoad() {
    var clickbutton = document.getElementById("button1");
    clickbutton.onclick = project; 

    var instagrambutton = document.getElementById("instagram");
    instagrambutton.onclick = instagram;

    var facebookbutton = document.getElementById("facebook");
    facebookbutton.onclick = facebook;

    var githubbutton = document.getElementById("github");
    githubbutton.onclick = github;

    var linkass6 = document.getElementById("ass4");
    linkass6.onclick = Assignment4; 

    var linkass7 = document.getElementById("ass5");
    linkass7.onclick = Assignment5;

    var linkass4 = document.getElementById("ass6");
    linkass4.onclick = Assignment6;

    var linkass5 = document.getElementById("ass7");
    linkass5.onclick = Assignment7;

}
function project(){
    location.href = "project.html";
}
function facebook() {
    location.href = "https://www.facebook.com/profile.php?id=100010865527813";
}
function github() {
    location.href = " ";
}
function instagram() {
    location.href = "https://www.instagram.com/gracetnp_/";
}
function Assignment4()
{
    location.href = "https://thanaporn002.github.io/ass4/recipe.html";
}
function Assignment5()
{
    location.href = "https://thanaporn002.github.io/ass5/";
}
function Assignment6(){
    location.href = "https://thanaporn002.github.io/ass6/register.html";
}
function Assignment7(){
    location.href = "https://thanaporn002.github.io/ass7/" ; 
}