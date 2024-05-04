{

}
//開いたときに実行される関数

{
	let random = Math.trunc(Math.random()*Math.pow(10,Math.trunc(Math.random()*10)+1));
	document.getElementById("rand").innerHTML = random;
}

function reloadSite() {
	window.location.reload();
}

function reloadSiteToClick() {
	window.alert("クリックされたため、リロードします。");
	window.location.reload();
}
