
    fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => showData(data))


    function showData(prod){
        console.log(prod)

        prod.map((im) => {
            document.getElementById("prod_slide").innerHTML +=prodSlide(im)  
        })

        document.getElementById("naming").innerHTML = names(prod)

 

        // prod.map((im) => {
        //     document.getElementById("prod_slide1").innerHTML += ` 
        //     <div class="border">
        //         <img src="${im.image}" class="img-fluid" width="200px" alt="...">
        //     </div>
        //   `  
        // })

        prod.map((ele) => {
                document.getElementById("main").innerHTML += products(ele)
        })
 
    }


    function names(data){
            return data.map((ele => document.getElementById("nam").innerHTML = `<h1>${ele.title}</h1>` ))
         
    }

    function prodSlide(im){
        
         return  ( ` 
            <div class="carousel-item border">
                <img src="${im.image}" class="img-fluid" width="500px" alt="...">
            </div>
          `  
               )    
    }




    function products(ele){
        
         return  ( ` 
                <div class="col-lg-3">
                        <div class="card" style="width: 18rem;">
                            <img src="${ele.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
              `  
               )    
    }
