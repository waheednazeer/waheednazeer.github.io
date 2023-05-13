function showContent() {
    var temp=document.getElementById("template");
    var clon= temp.content.cloneNode(true);
    document.body.appendChild(clon);
    
}