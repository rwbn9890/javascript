class Auth 
{
    constructor(){
        this.username = "mujju"
        this.adminUser = "mujammil"
        this.email = "mujju@gmail.com"
        this.phone = 6373489849839
        this.passwoard = "mujju@123"
        this.marks = 90
        this.grid = 8820
        this.address = "bhavnagar, gujrat, india"
    }


    login(username, password){
        if(this.adminUser == username && this.passwoard == password){
            return this
        }
        else{
            return "invalid username";
        } 
    }

}



class subauth extends Auth{
    login(username, password){
        if(this.username == username && this.passwoard == password){
            return this.marks + this.address + this.grid + this.phone
        }
        else{
            return "invalid username";
        }
        
    }
}



class subsubauth extends subauthAuth{
    login(username, password){
        if(this.username == username && this.passwoard == password){
            return this.marks + this.address
        }
        else{
            return "invalid username";
        }
        
    }
}


const user = new Auth;
const subuser = new subauth;

let usename = "mujju"
let pass = "mujju@123"


// console.log(user.login(usename, pass))
console.log(subuser.login(usename, pass))


