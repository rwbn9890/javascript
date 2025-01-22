
class Big
{
        constructor(){
           this.name = 20;
            this.email = "z@gmail.com"
            this.address =  "red & white, bhavanagart, gujrat"
        }
        setmail(m){
            this.email = m;
        }

        square(){
            return this.name*this.name;
        }

        mail(){
           return this.email
        }


        loc(){
            return this.address
        }

}

const obj = new Big()

console.log(obj.loc())


obj.setmail("alishan@gmail.com")

console.log(obj.mail())




// function bigger(){
//     this.name = 10;
//     this.email = "a@gmail.com"
// }


// const obj = new bigger();
// console.log(obj)








class small extends Big{
    // square(){
    //     return this.name%10;
    // }
}

const obj2 = new small();

// console.log(obj2)


console.log(obj2.square())

