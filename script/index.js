const getRow = document.getElementById("row");
const nexId = document.getElementById("button-next");
const prevId = document.getElementById("button-prev");

var skip = 0;
var limit = 5;
var slide = false;
var total;

const getAllDataProducts = async () => {
    console.log("ini skip", skip);
    console.log("ini limit", limit);
    console.log("ini total ", total);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.get("https://dummyjson.com/products", config);
    total = response.data.total;
    const getData = response.data.products
        .slice(skip, limit)
        .map((product, index) => {
            if (slide) {
                document.getElementById("data-" + index).innerHTML = `
                <div class="col-md-4 mb-5" id="data-${index}">
            <div class="card" style="width: 18rem;">
                <img src="${product.thumbnail}" class="card-img-top" id="image" alt="thumbnail">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description.substring(0, 30)}...</p>
                        <div class="d-flex justify-content-between">
                        <button class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary">View</button>
                        </div>
                </div>
            </div>
             </div>`;
            } else {
                getRow.innerHTML += `
                <div class="col-md-4 mb-5" id="data-${index}">
            <div class="card" style="width: 18rem;">
                <img src="${product.thumbnail}" class="card-img-top" id="image" alt="thumbnail">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description.substring(0, 30)}...</p>
                        <div class="d-flex justify-content-between">
                        <button class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary">View</button>
                        </div>
                </div>
            </div>
             </div>`;
            }
        });

    return getData;
}

getAllDataProducts();

nexId.addEventListener("click", () => {
    slide = true;
    if (skip == 95) {
        skip = 95;
        limit = 100;
    } else {
        skip += 5;
        limit += 5
    }
    getAllDataProducts();
    // window.location.reload()
})


prevId.addEventListener("click", async () => {
    slide = true;
    if (skip == 0 && limit == 5) {
        skip = 0;
        limit = 5;
    } else {
        skip -= 5;
        limit -= 5;
    }
    getAllDataProducts();
    // window.location.reload()
})



