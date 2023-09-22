const getRow = document.getElementById("row");

const getAllDataProducts = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.get("https://dummyjson.com/products", config);
    for (let data of response.data.products) {
        getRow.innerHTML += `<div class="col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
            <img src="${data.thumbnail}" class="card-img-top" id="image" alt="thumbnail">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description.substring(0, 30)}...</p>
                    <div class="d-flex justify-content-between">
                    <button class="btn btn-danger">Delete</button>
                    <button class="btn btn-primary">View</button>
                    </div>
            </div>
        </div>
         </div>`
    }
}

getAllDataProducts();


