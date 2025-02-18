import navbar from "./components/navbar.js";
import {getData, showData} from "./script/fetchAndUpdate.js";

let header = document.getElementById("header");
let items = document.getElementById("items");

header.innerHTML = navbar()

let url_prod = `https://fakestoreapi.com/products/category/women's clothing`

let data = await getData(url_prod)

showData(data)


// const fetchData = async (url) => {
    
//     showData(data)
// }

