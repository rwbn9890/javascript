
// let newPromiss = new Promise(function(response){
//     setTimeout(function(){
//            console.log("asynch is in progress")
//     response();
//     }, 2000)
 
// })

// newPromiss.then(function(){
   
//         console.log("operation completed")
//     })

// newPromiss.then(function(){
//     console.log("asych is end")
// })


// console.log("-------------------------------------")

// let newPromissone = new Promise(function(response){
//     setTimeout(function(){

//     console.log("asynch is in progress one")

//     response({username:"alishabn", email:"alishan@gmail.com"});
//     }, 2000)
// })
// .then(function(user){
//  console.log(user)
// })






// let newPromissTwo = new Promise(function(response, reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             response(JSON.stringify({username:"alishabn", email:"alishan@gmail.com"}));
//         }
//         else{
//             reject("Erro: something went wrong");
//         }

   
//     }, 2000)
// })
// .then(function(user){
//     return JSON.parse(user)
// })
// .then(function(data){
//     console.log(data.email)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("nto reslove or neigth reject")
// })



let newPromissfinal = new Promise(function(response, reject){
    setTimeout(function(){
        let error = false;

        if(!error){
            response(JSON.stringify({username:"alishabn", email:"alishan@gmail.com"}));
        }
        else{
            reject("Erro: something went wrong");
        }
    }, 2000)
})


async function promsize(){
     try 
     {
        let data = await newPromissfinal;

        let samedata = JSON.parse(data);
        console.log(samedata)
     } 
     catch (error) 
     {
        console.log(error)
     }
}


promsize();




