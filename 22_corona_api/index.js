
// const task = 'task'
// const country = 'country'


//  

console.log(10 == "10")

console.log(10 === "10")


console.log(false == 0)
console.log(false === 0) 
// false == 0
// false === 0




const api = `https://covid-193.p.rapidapi.com/statistics?country=india`
const key = 'usM6to0hBLizs+u+pQsDRQ==JUiFhRi51skFe8eo'

let head ={
    method:"GET",
    headers: {
        	'x-rapidapi-key': '87aefc452amsh1ab62c0d567974ap1edb4djsn287c2161c9df',
		'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }

}
getUsers(api, head);

async function getUsers(api_url, head)
{
    const resp = await fetch(api_url, head);
    const data = await resp.json()

    showData(data)

}


function showData(use){
    console.log(use)
}



// // let profile ={
// //     id : 20,
// //     first_name: "muzzamill",
// //     email: "mujju@gmail.com"
// // }




// // async function addUsers(){

// //     const resp = await fetch(`http://localhost:4000/task`, {
// //         method:"POST",
// //         body: JSON.stringify(profile)
// //     });
// //     const data = await resp.json()

// //     getUsers();
// // }


// // addUsers()

// delData()
// function delData(){

//     fetch(`http://localhost:4000/task?id=3`,{
//         method:"DELETE",
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

// }


