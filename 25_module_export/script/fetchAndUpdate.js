

export const getData = async (url) => {
    let response = await fetch(url)
    let data = await response.json();
    return data;
}


export function showData(data){
    items.innerHTML =""

    data.map((ele) => {
        items.innerHTML += `
       <div class="col-3">
         <div class="card h-100" >
        <img src=${ele.image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">${ele.category}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
       </div>
    `
    })
   
}

