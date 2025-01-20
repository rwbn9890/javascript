

class Prod
{
    constructor(name, sirname, phone){
        this.name = name;
        this.sirname = sirname;
        this.phone = phone;
        this.marks = 22;
    }

     fullname(){
        console.log(`${this.name} ${this.sirname}`)
    }


    editname(name){

        let fname = name.split(" ");

        this.name = fname[0];
        this.sirname = fname[1];

        console.log(`${this.name} ${this.sirname}`)
    }
}


const obj1 = new Prod("amit", "dabhi", 7876);
const obj2 = new Prod("yash", "dabhi", 4566);


obj1.fullname();

obj2.editname("yashvi desai");

console.log(obj1)




// const obj = {
//     tell(){
//         console.log("checking for js object")
//     }
// }


// const obj2 = Object.create(obj)


// obj2.tell()





