function formError() {
	var x = document.forms["testForm"]["firstName"].value;
   	if (x == "") {
      	alert("Name must be filled out");
      	return false;
		}
	}