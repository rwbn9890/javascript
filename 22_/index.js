
let products = document.getElementById("products")
let task = document.getElementById("task")
let updateBtn = document.getElementById("update")

let url_task = `http://localhost:4000/task/`




function setId(id){
    localStorage.setItem("id_", JSON.stringify(id));
    location.href="task.html"
}



function showData(data){
    products.innerHTML =""
    data.map((ele) => {
        products.innerHTML += `
              <div class="col-3 p-1">
                <div class="shadow rounded p-2">
                <h4>${ele.first_name}</h4>
                <p>${ele.email}</p>
                <button onclick="delData(${ele.id})" class="btn btn-danger btn-sm">🗑️</button>
                <button onclick="setUpdateData(${ele.id})" class="btn btn-warning btn-sm">✒️</button>
                <button onclick="setId(${ele.id})" class="btn btn-secondary btn-sm">📌</button>
                </div>
            </div>
        `
    })
}





const getUsers = async () =>{
    const resp = await fetch(url_task);
    const data = await resp.json();
     
    showData(data)
    setUpdateData(data)
}

getUsers()

async function addUsers(){

    let profile = {
        id : Math.round((Math.random()*100)+1),
        first_name: document.getElementById("name").value,
        email: document.getElementById("email").value
    }

    const resp = await fetch(url_task, {
        method:"POST",
        body: JSON.stringify(profile)
    });
    const data = await resp.json()

    getUsers();
}

// addUsers()


async function delData(ident){

        const resp = await fetch(url_task+ident, {
            method:"DELETE"
        })
        console.log(resp)
}


 async function setUpdateData(id){

    const resp = await fetch(url_task+id);
    const data = await resp.json(); 
    document.getElementById("name").value= data.first_name
    document.getElementById("email").value= data.email
    updateBtn.innerHTML = ` <button class="btn btn-success btn-sm" onclick="updateData(${data.id})">✒️✒️✒️✒️</button>`
}

async function updateData(id) {

  

    let profile =
    {
        id : id,
        first_name : "soul",
    }
    const resp = await fetch(url_task+id, {
        method:"PATCH",
        body: JSON.stringify(profile)
    })

    console.log(resp)
}



