

let data = [

    {
        id: 1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com",
        status:"bacholor"
    },
    {
        id : 2,
        pic:"https://randomuser.me/img/creator_keith.png",
        name : "willim keith",
        age: 28,
        email: "willim@gmail.com",
        status:"married"
    }
]






function del(id){

    let delData = data.filter((ele)=> ele.id != id)
 
 //    console.log(delData);
        data = delData;
    showData(delData)
 }

 console.log(data)





document.querySelector("#form").addEventListener("submit", function(e){

     e.preventDefault(); 


     let pic1 = document.querySelector("#img").value
     let name1 = document.querySelector("#name").value
     let email1 = document.querySelector("#email").value
     let age1 = document.querySelector("#age").value


     if(!pic1){
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter Image Url</p>
        `

        setTimeout(function(){
            document.querySelector(".not").style.display = "none"
        },2000);
     }
    else{

        let id = document.querySelector("#id").value;

     if(id){
       let updatedData =  data.map((ele) => {
            if(ele.id == id){
                ele.pic =document.querySelector("#img").value ,
                ele.name =document.querySelector("#name").value ,
                ele.email =document.querySelector("#email").value ,
                ele.age =document.querySelector("#age").value
            }

            return ele;
         })
         showData(updatedData)

     }
     else {


    let pic1 = document.querySelector("#img").value
    let name1 = document.querySelector("#name").value
    let email1 = document.querySelector("#email").value
    let age1 = document.querySelector("#age").value
            let num = Math.random();
            let obj = {
                id : Math.round(num*1000),
                pic :pic1 ,
                name :name1 ,
                email :email1 ,
                age :age1

        
                }

                console.log(obj)
                data.push(obj);
                showData(data)
  
     }

   document.querySelector("#img").value = ""
   document.querySelector("#name").value = ""
   document.querySelector("#email").value = ""
   document.querySelector("#age").value = ""

    }

     
})



function edit(id){

//   let updateEle = data.find((ele) => ele.id == id);

  data.map((ele) => {

        if(ele.id == id){
            document.querySelector("#img").value = ele.pic
            document.querySelector("#name").value = ele.name
            document.querySelector("#email").value = ele.email
            document.querySelector("#age").value = ele.age
            document.querySelector("#id").value = ele.id
            
            
        }
    })
  
    //showData(update)
}


function showMore(id){
    let eachData = data.filter((ele) => ele.id == id)
    console.log(eachData)

    showEachData(eachData)
}


 let offcanvas_body = document.querySelector(".offcanvas-body")

function showEachData(eaData){

   
    offcanvas_body.innerHTML = "";


    eaData.map((ele)=>{
        offcanvas_body.innerHTML =`
            <div class="card" style="width: 18rem;">
  <img src="${ele.pic}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ele.name}</h5>
    <p class="card-text">${ele.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    })

}


function showData(delData){

    tbody.innerHTML = "";
    delData.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
             <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
             <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
             <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
            </tr>
    `
})

// console.log(data)


}







let tbody = document.querySelector("#tbody");

data.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button>
            </td>
                <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
        </tr>
    `
})


