let showMovies_id = document.getElementById("showMovies");
let pagination_id = document.getElementById("pagination");
let showGenres_id = document.getElementById("showGenres");
let showLang_id = document.getElementById("language");

let genarr = JSON.parse(localStorage.getItem("genarr")) || []

let img_500 = `https://image.tmdb.org/t/p/w500`

let b_url = `https://api.themoviedb.org/3/`
let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`
let end_point = `discover/movie`

let genre_end_point = `genre/movie/list`;
let lang_end_point = `configuration/languages`;

let page = 1;

let api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=${genarr.join(",")}`

let genre_api_url =  b_url+genre_end_point+api_key;

let lang_api_url = b_url+lang_end_point+api_key;

getmovies(lang_api_url)

getmovies(genre_api_url)

getmovies(api_url)

    function getmovies(api){

        fetch(api)
        .then((res) => res.json())
        .then((data) => {


            if(data.genres)
            {
                showGenres(data)
            }
            else if(data.results)
            {
                showMovies(data);
            showPagination(data)
            }
            else{
             
                showlang(data)
            }
            
        })
}



function changePage(page_changed){
    console.log(page_changed)
    let api_url_1 = b_url+end_point+api_key+`&page=`+page_changed
    getmovies(api_url_1);
}




function changeGenres(id)
{


    if(genarr.includes(id))
    {
        genarr.splice(genarr.indexOf(id) , 1)
    }
    else{
        genarr.push(id)
    }
  
    

    localStorage.setItem("genarr", JSON.stringify(genarr))

    console.log(genarr)
    let genres_movei_api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=`+genarr.join("|");
    getmovies(genres_movei_api_url);
    getmovies(genre_api_url)
    
}



//////// showing movies start /////////////////

function showMovies(mov)
{
            showMovies_id.innerHTML ="";

    mov.results.map((ele) => {
        showMovies_id.innerHTML += `
            <div class="col">
            <div class="card h-100" >
            <div class="row">
                <div class="col-5">
                     <img src="${img_500+ele.poster_path}" class="card-img-top" alt="...">
                </div>
                <div class="col-7">
                    <div class="card-body px-0">
                  <h5 class="card-title">${ele.original_title}</h5>
                  <p class="card-text">${ele.vote_average}</p>
                  <a href="#" class="btn btn-primary">More</a>
                </div>
                </div>
            </div>
 
              </div>
        </div>
        `
    })
}

//////// showing movies end /////////////////




//////// showing movies start /////////////////

function showPagination(mov){
    pagination_id.innerHTM="";
    pagination_id.innerHTML = `
     <div class="btn-group">
            <button class="btn btn-outline-primary" onclick="changePage(${mov.page-1})">prev</button>
            <button class="btn btn-outline-primary">${mov.page}</button>
            <button class="btn btn-outline-primary" onclick="changePage(${mov.page+1})">next</button>
        </div>
    `
}


//////// showing movies emd /////////////////



//////// showing genres start /////////////////

function showGenres(mov)
{
    showGenres_id.innerHTML = "";

    mov.genres.map((ele) => {
        showGenres_id.innerHTML +=
         `<button class="btn ${genarr.includes(ele.id) ? `btn-warning` : `btn-outline-warning`} btn-sm m-1" onclick="changeGenres(${ele.id})">${ele.name}</button>`
    })

    
}


//////// showing genres end /////////////////


//////// showing lang start /////////////////

function showlang(mov)
{
    console.log(mov)

    // showLang_id.innerHTML = "";

    mov.map((ele) => {
      showLang_id.innerHTML +=
      `
       <div class="col-4 p-1">
               <button class="btn btn-light w-100 text-center btn-sm" ><input type="checkbox"/> ${ele.english_name}</button>
         </div>
           
      `
    })

    
}


//////// showing lang end /////////////////