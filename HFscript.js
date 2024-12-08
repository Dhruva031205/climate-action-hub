window.onload = function() {
      const d = new Date("2024-12-11");
      document.getElementById("demo1").innerHTML = d.toDateString();
};
/*Displays the day that it is on Dec 11th 2024*/

window.onload = function() {
	const d = new Date();
	let time = d.getTime();
	document.getElementById("demo2").innerHTML = time;
};
/* Displays number of miliseconds since Jan 1st 1970*/


function popularsolutions() {
	let solutions = [
		"Reforestation and Afforestation",
		"Energy efficiency",
		"Sustainable transport",
		"Moving to renewable energy"
	];
	let randomIndex = Math.floor(Math.random() * solutions.length);
	document.getElementById("popular_solutions").innerHTML = solutions[randomIndex];
	/* Getting a random solution */
}
function validate() {
		let valid= true; 
		let msge= "Incomplete form: ";
		if(document.getElementById("name").value ==""){
			msge+= "Please enter your name. ";
			valid= false;
		}
	
		if(document.getElementById("email").value ==""){
			msge+= "Please enter your email.";
			valid= false;
		}else{
			let inputE = document.getElementById("email").value;
			let symbol= inputE.indexOf("@"); 
			if(symbol<1){
				msge+="not a valid email";	
				valid= false;
			}
		}
		
		if(!valid) {
			alert(msge);
		}
		return valid;
	}
	

/* Validating the users inputed information */



	
