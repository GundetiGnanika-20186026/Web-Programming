var data = {

	"results":[{

		"question": " 1) What is your name ?",
		"hint1":"your name is your identity",
		"hint2":"your name is unique",
		"answer":"True" ,


	},
	{
		"question": " 2) What is your name ?",
		"hint1":"your name is your identity",
		"hint2":"your name is unique",
		"answer":"True" ,


	},

	{
		"question": " 3) What is your name ?",
		"hint1":"your name is your identity",
		"hint2":"your name is unique",
		"answer":"True" ,


	},

	{
		"question": " 4) What is your name ?",
		"hint1":"your name is your identity",
		"hint2":"your name is unique",
		"answer":"True" ,


	},
	{
		"question": " 5) What is your name ?",
		"hint1":"your name is your identity",
		"hint2":"your name is unique",
		"answer":"True" ,


	}
	]
};

var len = data.results.length;
// console.log(len);
for(i = 0;i<len;i++) {

	var row1 = document.getElementById("first");
	row1.insertAdjacentHTML('beforeend', '<h2>'+ data.results[i].question+'</h2><br>');
	row1.insertAdjacentHTML('beforeend',  '<h3><button type="button" id = "hintbutt'+i+'" class="btn btn-info" onclick = "hintfunction('+i+')">Hint</button></h3>');
	row1.insertAdjacentHTML('beforeend','<h3><input type="radio" name="gender" class = "radio'+i+'" value="True" onclick = "correction(this.value,'+i+')">True<br></h3>');
    row1.insertAdjacentHTML('beforeend','<h3><input type="radio" name="gender" class = "radio'+i+'" value="False" onclick = "correction(this.value,'+i+')">False<br></h3>');
    row1.insertAdjacentHTML('beforeend','<div id = "correct'+i+'"></div><hr>');


}

function hintfunction(var1) {
	document.getElementById("hintbutt" + var1).disabled = true;
	var button1 = document.getElementById("hintbutt"+var1);
	// button1.insertAdjacentHTML('afterend',' <div class="alert alert-warning alert-dismissible">\
 //    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
 //    <strong>'+data.results[var1].hint1+'</strong> .\
 //  </div>');
button1.insertAdjacentHTML('afterend',' <div class="alert alert-warning alert-dismissible">\
   <a href="#" class="close" data-dismiss="alert" aria-label="close" onclick = "enable('+var1+')">&times;</a>\
  <button id = "hintfirst '+var1+'" type="button" class="btn btn-info" onclick = "hintchange(this.id)">Hint1</button> \
  <button id = "hintsecond '+var1+'" type="button" class="btn btn-info" onclick = "hintchange(this.id)">Hint2</button>\
   <div id = "hinttxt'+var1+'" class="alert alert-warning alert-dismissible" style = "display: none;">\
    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.\
  </div>\
  </div>');









};

function enable(tempval) {
	document.getElementById("hintbutt" + tempval).disabled = false;
}

function hintchange(temp) {
	var tempsplit = temp.split(" ");
	console.log(tempsplit);
	if(tempsplit[0] == "hintfirst") {
		document.getElementById("hinttxt" + tempsplit[1]).innerHTML = data.results[tempsplit[1]].hint1;
		document.getElementById("hinttxt" + tempsplit[1]).style.display = "block";
	} else {
		document.getElementById("hinttxt" + tempsplit[1]).innerHTML = data.results[tempsplit[1]].hint2;
		document.getElementById("hinttxt" + tempsplit[1]).style.display = "block";
	}
}
function correction(value1, var2) {
	var correctans = document.getElementById("correct"+var2);
	if (value1 == data.results[var2].answer) {
		correctans.innerHTML = '<div class="alert alert-success alert-dismissible">\
    <strong>Correct!</strong> \
  </div>';

  document.getElementsByClassName("radio"+var2)[0].disabled = true;
  document.getElementsByClassName("radio"+var2)[1].disabled = true;


	}else {

		correctans.innerHTML = ' <div class="alert alert-danger alert-dismissible">\
    <strong>In Correct!</strong> \
  </div>';

  document.getElementsByClassName("radio"+var2)[0].disabled = true;
  document.getElementsByClassName("radio"+var2)[1].disabled = true;


	}



};




