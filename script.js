{

}
//開いたときに実行される関数

{
	let random = Math.trunc(Math.random()*Math.pow(10,Math.trunc(Math.random()*10)));
	document.getElementById("rand").innerHTML = random;
	if(random == 0){
		window.alert("おめでとう!\n君が初めてのサイト訪問者だ!再読み込みするね!");
		window.location.reload();
	}
}

function reloadSite() {
	window.location.reload();
}

function reloadSiteToClick() {
	window.alert("クリックされたため、リロードします。");
	window.location.reload();
}
