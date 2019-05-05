var select = document.getElementById("select");
var selectMessage = document.getElementById("selectMessage");
var input = document.getElementById("input");
var btn = document.getElementById("btn");

select.onchange = function () {
	selectMessage.innerHTML = select.value;
}
select.onchange();

var last_base = 10;
btn.onclick = function func() {
	let val = input.value;
	val = inn(val, last_base, select.value);
	last_base = select.value;
	input.value = val;
}

function inn(input, from_base, to_base) {
	console.log("bases", from_base, to_base);
	if (typeof (input) == "") {
		return  "input error";
	} else (to_base >= 2 && to_base <= 10)
	output = parseInt(input, from_base).toString(to_base);
	if(isNaN(output)){
		alert("Error");
	}
	return (output);

}
