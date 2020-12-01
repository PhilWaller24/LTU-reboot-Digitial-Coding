function init()
{
	var h1Tags=document.getElementsByTagName("h1");
	h1Tags[1].onclick=react;
}

function react()
{
	this.innerHTML="Clicked!";
	this.style.color="red";
}

window.onload=init;