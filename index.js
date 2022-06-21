function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const projectUrl = "./db.json"
 
  // containers
    let projectContainer = document.getElementById('Book') 
    let bookDetails = document.getElementById('Book') 
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
          displayProject(proitem)
          
        })
        
      })       
  
    }
  function displayProject(itemPro){
   const proCard = `
    <div class="col-4">
      <div class="proCont">
        <img src="${itemPro.url}" alt="BOOK IMAGE">
        <h3>AUTHOR: ${itemPro.author}</h3>
        <h3>BOOK TITLE: ${itemPro.title}</h3>
        <h3>RATING:${itemPro.rating}</h3>
       </div>
      </div>
    </div> ` 
    projectContainer.innerHTML += proCard
  }
  
  


  getProjects()
})  



    



