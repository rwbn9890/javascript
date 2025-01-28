

let b_url = `https://api.themoviedb.org/3/`;
let key = `?api_key=2254f6a103ea45b2d2965212918395da`



 let type = JSON.parse(localStorage.getItem("type"))
 let lang = JSON.parse(localStorage.getItem("lang"))

let d_endpoint = `discover/${type}`

let genre_endpoint = `genre/movie/list`

let genre_url = b_url+genre_endpoint+key;

let end_lang = `&with_original_language=${lang.join("|")}`

let api_url = b_url+d_endpoint+key+end_lang



let page = 1;



function filter1(){
    let filter_arr = []
    let filt = document.querySelectorAll(".lang")

    filt.forEach((ele) => {
        if(ele.checked){
            filter_arr.push(ele.value) 
        }
       
    })
console.log(filter_arr)

localStorage.setItem("lang", JSON.stringify(filter_arr))

    getMovies(api_url+`&with_original_language=${filter_arr.join("|")}`, page)
}



getMovies(api_url, page)


function getMovies(api_url, page){
    fetch(`${api_url}&page=${page}`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        showMovies(data.results)
        pages(data.page)
    })

    
fetch(genre_url)
.then((res) =>{
    return res.json()
})
.then((data) =>{
    showGenres(data.genres)
})
}


document.getElementById("btnradio1").addEventListener("click", function(e){
    console.log(e.target.value);
    localStorage.setItem("type", JSON.stringify(e.target.value));
    getMovies(b_url+`discover/${e.target.value}`+key , page)
})

document.getElementById("btnradio2").addEventListener("click", function(e){
    console.log(e.target.value);
    localStorage.setItem("type", JSON.stringify(e.target.value));

    getMovies(b_url+`discover/${e.target.value}`+key , page);
})



// changing pagination start

function changePage(p){
    getMovies(api_url, p)
}

// changing pagination start


// search start

document.getElementById("search").addEventListener("change", function(e){
let search = e.target.value;
console.log(search)
fetch(`https://api.themoviedb.org/3/search/movie?api_key=2254f6a103ea45b2d2965212918395da&query=${search}&page=1`)
.then((res) =>{
    return res.json()
})
.then((data) =>{
    console.log(data)
    showMovies(data.results)
    pages(data.page)
})
})

// search end



function showMovies(data){
document.getElementById("movies").innerHTML =  ""
data.map((ele) => {
        document.getElementById("movies").innerHTML += `
    <div class="col-2 ">
            <div class="card h-100 p-3" style="background:url(https://image.tmdb.org/t/p/w500${ele.backdrop_path})" >
                <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${ele.original_name
                     || ele.original_title}</h5>
                  <p class="card-text">${ele.Actors}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
`
})

}



function pages(page){

document.getElementById("pagination").innerHTML = `
     <ul class="pagination mx-auto" style="width:fit-content">
      <li class="page-item"><a class="page-link" onclick="changePage(${page-1})">Prev</a></li>
      <li class="page-item"><a class="page-link">${page}</a></li>
      <li class="page-item"><a class="page-link" onclick="changePage(${page+1})">Next</a></li>
    </ul>
`

}

function showGenres(gen){
gen.map((ele) => {
       document.getElementById("genre").innerHTML += `
<div class="dropdown-item" ><input type="checkbox" value="${ele.id}" class="gen" /> ${ele.name}</div>
`
})
}


document.getElementById("genre").addEventListener("change", function(e){
console.log(e.target.value)


let g_url = b_url+'movie/'+e.target.value+'/similar'+key+end_lang;

console.log(g_url)

getMovies(g_url, page)


})





