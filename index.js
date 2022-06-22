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
    let bookDetails = document.getElementById('bookDetails')
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
        results.forEach(item=>{
          displayBooks(item) 
      })        
      })           
    }
    function postProjects(){
      let reqOptions = {
        method:'POST'
      }
    
      fetch(projectUrl, reqOptions)
        .then((response)=> response.json())
        .then(results => {
          //array results
  
          results.forEach(newbook=>{
            displayNewbook(newbook)
            
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
     ` 
    projectContainer.innerHTML += proCard
  }
  function displayBooks(item){
    const newCard = `
    <div class="col-6">
    <div class="new">
    <span>
    <h3>BOOK TITLE: ${item.title}</h3>
    <h3>BOOK DETAILS: ${item.detail}</h3>
    </span>
    `
    bookDetails.innerHTML += newCard
  }

  function displayNewbook(newbook){
    
  }
  

  getProjects()
})  



    



