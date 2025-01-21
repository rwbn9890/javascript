
let promiss = new Promise(function(response, reject){

    setTimeout(function(){
        let a = 20;
        let b = 30;

        let sum = a+b;
        let obj = {
            op : "sum",
            val : sum,
            obj1 : {
                sb : "sub",
                val : sum,
                obj2 : {
                    mult : "mult",
                    val : sum,
                }
            }
        }

        let err = false;

        if(err == true){
            return reject("something went wrong")
        }
        else {
            return response(obj);
        }
       
      
    }, 2000);

})
// .then((obj)=>{
//    return obj.obj1;
// })
// .then((obj)=>{
//    return obj.obj2;
// })
// .then((obj)=>{
//     console.log(obj)
// })
// .catch((err) => {
//     console.log("ERROR" + err)
// })
// .finally(()=>{
//     console.log("loading...")
// })



as();

async function as(){
   try{
    
    let data = await promiss;

    let subdata = await data.obj1.obj2;

    console.log(subdata)

   }
  
}



