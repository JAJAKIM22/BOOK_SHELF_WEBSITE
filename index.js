function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const projectUrl = "https://books39.p.rapidapi.com/CZFA4F/books/?rapidapi-key=07fa193556msh889d95d2b765e6cp133e5cjsna64dd92f0841"
    
  
  //get projects
  function getProjects(){
    let reqOptions = {
      method:'GET'
    }
  
    fetch(projectUrl, reqOptions)
      .then((response)=> response.json())
      .then(results => {
        //array results

        results.forEach(proitem=>{
          console.log(proitem)
          console.log('next item')
        })
        
      })       
  
    }
  // Display books

  getProjects()
})  



    



