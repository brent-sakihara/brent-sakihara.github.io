var upbutton = document.getElementById('arrow');
var body = document.body;
var documentElement = document.documentElement;
var offset = 100, scrollPos, docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, documentElement.clientHeight, documentElement.scrollHeight, documentElement.offsetHeight);
if(docHeight != 'undefined'){
    offset = docHeight / 5;
}

window.addEventListener("scroll", function(event){
    scrollPos = body.scrollTop || documentElement.scrollTop;

    upbutton.className = (scrollPos > offset) ? 'visible' : "";
});

upbutton.addEventListener('click', function(event){
    event.preventDefault();
    documentElement.scrollTop = 0;
})