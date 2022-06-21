function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  fetch("https://book4.p.rapidapi.com/?rapidapi-key=07fa193556msh889d95d2b765e6cp133e5cjsna64dd92f0841")
	.then(parseResponse)
	.then(logResponse)

function parseResponse(response){
	return response.json()
}

function logResponse(response){
	console.log(response)
}