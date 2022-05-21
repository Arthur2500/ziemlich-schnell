function sleep (time){
	return new Promise((resolve) => setTimeout(resolve, time));
}

function CopyToClipboard(id, element){
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	element.innerHTML = "copied!";
	element.classList.add("activetab");
	sleep(1500).then(() => {
    element.innerHTML = "copy";
	element.classList.remove("activetab");
	});
}