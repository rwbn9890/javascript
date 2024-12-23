

let data = [

    {
        id: 1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com",
        hobbies: ["reading", "writing"],
        gender: "male",
        status: false
    },
    {
        id : 2,
        pic:"https://randomuser.me/img/creator_keith.png",
        name : "willim keith",
        age: 28,
        email: "willim@gmail.com",
        hobbies: ["travel", "acting"],
        gender :"female",
        status: true
    }
]






function del(id){

    let delData = data.filter((ele)=> ele.id != id)
 
 //    console.log(delData);
        data = delData;
    showData(delData)
 }

//  console.log(data)






document.querySelector("#form").addEventListener("submit", function(e){

     e.preventDefault(); 


     let pic1 = document.querySelector("#img").value
     let name1 = document.querySelector("#name").value
     let email1 = document.querySelector("#email").value
     let age1 = document.querySelector("#age").value


     if(!pic1 || !name1 || !email1 || !age1){
   
        // document.querySelector(".not").innerHTML += `
        //     <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter Image Url</p>
        // `

        let toast =document.querySelector(".toast-container")
        
        toast.innerHTML += `
        <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Validation error</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            please add the erro url
            </div>
        </div>
        `

        // let let toastnode = toast.childNodes;

        setTimeout(function(){
            // document.querySelector(".not").style.display = "none"
            // document.querySelector("#liveToast").className ="toast"
            toast.innerHTML =""
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
    let status = document.querySelectorAll(".status");
    let gen = document.querySelectorAll(".gen");

    let gender;
    gen.forEach((ele) => {
        if(ele.checked){
            gender = ele.value;
        }
       
    })

    let hobbies = []

    status.forEach((ele) => {
        if(ele.checked){
           hobbies.push(ele.value)
        }
    })


            let num = Math.random();
            let obj = {
                id : Math.round(num*1000),
                pic :pic1 ,
                name :name1 ,
                email :email1 ,
                age :age1,
                hobbies: hobbies,
                gender: gender
                }


                console.log(obj)

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




// let stat = document.getElementById("stat");


function check(id){
let statusData = data.map((ele) => {
    if(ele.id === id){
        ele.status = !ele.status;
    }
     return ele;
})

 showData(statusData);


}


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
        <tr class="${ele.status ? "table-success" : "table-danger" }"  >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
              <td><input id="stat" onchange="check(${ele.id})" value="true" type="checkbox" ${ele.status ? "checked" : ""} class="status1" /></td>
             <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
             <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
             <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
        <td>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </a>

                    <ul class="dropdown-menu">
                    ${ele.hobbies.forEach((el) => {
                        `<li><a class="dropdown-item" href="#">${el}</a></li>`
                    })}
                       
                    </ul>
                    </div>
            </td>
            </tr>
    `
})

// console.log(data)


}







let tbody = document.querySelector("#tbody");

data.map((ele) => {
    
    tbody.innerHTML += `
        <tr  class="${ele.status ? "table-success" : "table-danger" }"  >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><input id="stat" onchange="check(${ele.id})"  value="true"  type="checkbox"  ${ele.status ? "checked" : ""}  class="status1" /></td>
            <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button>
            </td>
                <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
            <td>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </a>

                    <ul class="dropdown-menu">
                    ${ele.hobbies.forEach((el) => {
                        `<li><a class="dropdown-item" href="#">${el}</a></li>`
                    })}
                       
                    </ul>
                    </div>
            </td>
        </tr>
    `
})


