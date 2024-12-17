

let data = [

    {
        id: 1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com"
    },
    {
        id : 2,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com"
    }
]




document.querySelector("#form").addEventListener("submit", function(e){
     e.preventDefault(); 
  
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
        age :age1 ,
   }

 data.push(obj);

   showData(data)

   document.querySelector("#img").value = ""
   document.querySelector("#name").value = ""
   document.querySelector("#email").value = ""
   document.querySelector("#age").value = ""
  
   console.log(Math.round(num*1000))
})


function del(id){

   let delData = data.filter((ele)=> ele.id != id)

//    console.log(delData);
   showData(delData)
}

function edit(id){

//   let updateEle = data.find((ele) => ele.id == id);

  data.map((ele) => {

   
        if(ele.id == id){
            document.querySelector("#img").value = ele.pic
            document.querySelector("#name").value = ele.name
            document.querySelector("#email").value = ele.email
            document.querySelector("#age").value = ele.age
            document.querySelector("#submain").style.display = "none";
            document.querySelector("#update").style.display = "block";
        }
    })
  
    //showData(update)
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
             <td><button class="btn btn-waring" onclick="edit(${ele.id})">Edit</button></td>
             <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
        </tr>
    `
})

// console.log(data)


}







let tbody = document.querySelector("#tbody");

data.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
        </tr>
    `
})


