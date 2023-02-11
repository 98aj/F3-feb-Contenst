fetch("https://dummyjson.com/products").then((resp)=> resp.json()).then((data)=>{
    let card = document.querySelector('.row');
    let myArr = data.products;

    myArr.map((products)=>{
        card.innerHTML += `<div class="col">
        <div class="card h-100" style="width: 18rem;">
            <img src=${products.thumbnail} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${products.title} </h5>
                <p class="card-text">
                Brand : ${products.brand} <br>
                $ ${products.price} <br>
                Rating: ${products.rating}<br>    
                Stock: ${products.stock}
                </p>
            </div>
        </div>
    </div>`
    })
})