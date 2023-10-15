var items = JSON.parse(localStorage.getItem('products'));

function getProducts() {
    console.log("items",items);
    if (items.length > 0) {
        document.querySelector('.shop-basket').classList.remove('d-none')
        document.querySelector('.alert').classList.add('d-none')
        let t_body = document.querySelector('table tbody')
        let total = 0;
        let tcount = 0;
        t_body.innerHTML = '';
        for (let item of items) {
            t_body.innerHTML += `
            <tr id=${item.Id}>
                <td style="width:10%">
                    <img src=${item.Image} alt="">
                </td>
                <td>${item.Title}</td>
                <td>${item.Price} ₼</td>
                <td class="quantity">
                <i id="minus"    class="fa-solid fa-minus" onclick="Minus(this)"></i>
                <span>${item.Count}</span>
                <i id="plus" class="fa-solid fa-plus" onclick="Plus(this)"></i>
                </td>
                <td class="prodprice">${((item.Price) * (item.Count)).toFixed(2)} ₼</td>
                <td>
                    <button class="btn btn-danger" onclick="DeleteItem(this)">Sil</button>
                </td>
            </tr>
            `;

            tcount += item.Count
            total += (item.Count * item.Price)
        }

        document.querySelector('.pr_count').innerHTML = tcount
        document.querySelector('.total_price').innerHTML = total
    }
    else {
        document.querySelector('.shop-basket').classList.add('d-none')
        document.querySelector('.alert').classList.remove('d-none')
    }
}

getProducts();

function DeleteItem(btn) {
    let id = btn.parentElement.parentElement.id;
    let filtered = items.filter(x => x.Id !== id);
    localStorage.setItem('products', JSON.stringify(filtered));
    items = filtered; 
    getProducts();
}

function Minus(minusBtn) {
    let id = minusBtn.parentElement.parentElement.id;
    let exist_prod = items.find(pr => pr.Id === id);

    if (exist_prod.Count > 1) {
        exist_prod.Count -= 1;
    } 
    else {
        items = items.filter(obj => obj.Id != exist_prod.Id);
    }

    localStorage.setItem('products', JSON.stringify(items));
    getProducts();
}
function Plus(plusBtn) {
    let id = plusBtn.parentElement.parentElement.id;
    let exist_prod = items.find(pr => pr.Id === id);
    exist_prod.Count += 1;
    localStorage.setItem('products', JSON.stringify(items));
    getProducts();
}

















// let sum=0;
// function updatePrice(item, quantity) {
    

//     let prod_price = item.Price * quantity;
//     var index= items.indexOf(item);

//     let prodprice = document.querySelectorAll('.prodprice')[index];
//     let total_price = document.querySelector('.total_price');
//     prodprice.innerHTML = `${prod_price} ₼`;

//     items.forEach(item => {

//         sum+=((item.Price) * (item.Count));
        
//     });
//     total_price.innerHTML = `${sum} ₼`;

// }
// debugger
// for (let item of items) {
//     var index= items.indexOf(item);
//     let num = document.querySelectorAll('#num')[index];
//     console.log(item.Count);
//     num.onchange = function (e) {
//         updateCount(e.target.value,item.Id);
//         sum=0;  
//         console.log(item.Count);
//         updatePrice(item, e.target.value);
//     };
// }