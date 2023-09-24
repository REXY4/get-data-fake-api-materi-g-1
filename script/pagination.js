
const idPagination = document.getElementById("pagination-item");
var addCondition = false;

const AddPagination = async (totalData, limit) => {
    const countTotal = Math.ceil(totalData / limit) + 2;
    let data = [
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    ]; // = 0;
    // <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    // <li class="page-item"><a class="page-link" href="#">1</a></li>
    // <li class="page-item"><a class="page-link" href="#">2</a></li>
    // <li class="page-item"><a class="page-link" href="#">3</a></li>
    // <li class="page-item"><a class="page-link" href="#">Next</a></li>
    for (let i = 0; i < countTotal; i++) {
        if (data.length !== countTotal) {
            if (i == 0) {
                data.push(`<li class="page-item"><a class="page-link" href="#">Previous</a></li>`);
            } else if (i <= countTotal) {
                if (i == countTotal - 1) {
                    data.push(`<li class="page-item"><a class="page-link" href="#">Next</a></li>`);
                } else {
                    data.push(
                        `<li class="page-item" onclick="checkButtom(${i})" ><a class="page-link" href="#">${i}</a></li>`
                    );
                }
            }
        } else {

        }
    }

    // else if (i >= countTotal) {
    //     console.log("check data i ", i)
    //     if (i == countTotal + 1) {
    //         console.log("ini i ", i)
    //         data.push(`<li class="page-item"><a class="page-link" href="#">Next</a></li>`);
    //     }
    // }
    // data.splice(0, 0, `<li class="page-item"><a class="page-link" href="#">Previous</a></li>`);
    // data.push(`<li class="page-item"><a class="page-link" href="#">Next</a></li>`)
    // data.push(`<li class="page-item"><a class="page-link" href="#">Next</a></li>`);
    const addData = data.map((item) => {
        return idPagination.innerHTML += item;
    })

    // return addData;
    // await data.map((item) => {
    //     return idPagination.innerHTML += item;
    // })
    return addData;
}

const checkButtom = (n) => {
    console.log("coba check buttyom ", n)
}


AddPagination();