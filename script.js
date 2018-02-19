(function(){
	var element = document.getElementByClassName("uni");

	element.addEventListener("click", toggleit);

	if (element.classList) {
    element.classList.toggle("activebtn");
	} else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("mystyle");

    if (i >= 0)
        classes.splice(i, 1);
    else
        classes.push("mystyle");
        element.className = classes.join(" ");
} 
})();