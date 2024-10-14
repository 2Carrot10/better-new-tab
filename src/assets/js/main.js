(function(){
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

	setTimeout(arguments.callee, 1000);
})();

function isValid(string) {
    try {
        new URL(string);
        return true;
    } catch (error) {
        return false;
    }
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
			return;
		}

		document.location.href = "https://duckduckgo.com/?q=" + a + "&origin=funnel_help"
}
