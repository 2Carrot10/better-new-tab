
timeUpdate()
setInterval(timeUpdate, 1000);

function timeUpdate(){
	var d = new Date();
	var s = "";
	var z = "";
	var q = "";
	q = d.getFullYear() + "-";
	if(q.length <= 2) q = "0" + q;
	s += q;

	q = d.getMonth() + 1 + "-";
	if(q.length <= 2) q = "0" + q;
	s += q;

	q = d.getDate().toString();
	if(q.length <= 1) q = "0" + q;
	s += q;

	q = d.getHours() + ":";
	if(q.length <= 2) q = "0" + q;
	z += q;
	q = d.getMinutes() + ":";
	if(q.length <= 2) q = "0" + q;
	z += q;
	q = d.getSeconds().toString();
	if(q.length == 1) q = "0" + q;
	z += q;
	document.getElementById("cal").innerText = s;
	document.getElementById("clock").innerText = z;
};

function isValid(string) {
	try {
		new URL(string);
		return true;
	} catch (error) {
		return false;
	}
}


function httpGetAsync(theUrl, callback)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}

window.clickPress = function (event) {
	if (event.key != "Enter") return;
	var search = document.getElementById("searchTerm").value;

	if(search[0] == "/" || search.search("file:///") == 0) {
		alert("searching filesystem not supported!");
		return;
	}

	if(search.search(/\w+\.\w+/)==0) {
		if(isValid(search)) {
			document.location.href = search;
			return;
		}

		if(isValid("https://" + search)){
			document.location.href = "https://" + search;
			return;
		};
	}
	var a =encodeURIComponent(search);
	if(document.getElementById("search-engine").value == "Google") {
		document.location.href = "https://google.com/search?q=" + a;	
	} else if(document.getElementById("search-engine").value == "ChatGPT") {
		document.location.href = "https://chatgpt.com/search?q=" + a;	
	}
	else {
		document.location.href = "https://duckduckgo.com/?q=" + a + "&origin=funnel_help"
	}
}
