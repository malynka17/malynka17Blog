
function copy(){
	document.execCommand("copy");
}
$("#insta").on("click", copy);
$("#telegram").on("click", copy);
$("#gitHub").on("click", copy);

