function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const projectUrl = "./db.json"
    const bookUrl = "https://book4.p.rapidapi.com/?rapidapi-key=07fa193556msh889d95d2b765e6cp133e5cjsna64dd92f0841"
  // containers
    let projectContainer = document.getElementById('Book') 
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
  
  function displayProject(itemPro){
   const proCard = `
    <div class="col-4">
      <div class="proCont">
        <img src="${itemPro.url}" alt="BOOK IMAGE">
        <h3>AUTHOR: ${itemPro.author}</h3>
        <h3>BOOK TITLE: ${itemPro.title}</h3>
        <h3>RATING:${itemPro.rating}</h3>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <i onclick="myFunction(this)" class="fa fa-thumbs-up" style="color: black;"></i>
       
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



  getProjects()


let addbookForm = document.querySelector('#addbookForm')

addbookForm.addEventListener('submit', (event)=>{
  event.preventDefault();

  let fdurl = event.target.url.value
  let fdtitle = event.target.title.value
  let fdauthor = event.target.author.value
  let fddetail = event.target.detail.value
  let fdrating = event.target.rating.value
  let fdprice = event.target.price.value
  let fddate = event.target.date.value
 //data
 let fdata = new FormData();
 fdata.append("url", fdurl)
 fdata.append("title", fdtitle)
 fdata.append("author", fdauthor)
 fdata.append("detail", fddetail)
 fdata.append("rating", fdrating)
 fdata.append("price", fdprice)
 fdata.append("date", fddate)

 //options
 let reqOptions =  {
  method: "POST",
  body: fdata,
 }

 //post data
 fetch(bookUrl, reqOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(err=>console.log('error', error))
   
  
})


})  



    



