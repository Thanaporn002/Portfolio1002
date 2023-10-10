window.onload = pageLoad;
function pageLoad()
{
    var backbutton  = document.getElementById("button1");
    backbutton.onclick = projectpage;

}

function projectpage()
{
    location.href = "index.html"
}