

function one(){
    return two()
}

function two(){
    return three()
}

function three(){
    return four()
}


function four(){
    return 5;
}

one()