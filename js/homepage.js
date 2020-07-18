const bestSeller = async(url) => {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let test = await response.json();
    test.forEach(element => {
        let price = element.price * (20/ 100);
        price = element.price - price;
        if(element.bestSeller == true) {
            document.getElementById('book').innerHTML += 
            `<div class="col-md-3 ml-5 pb-4">
                <div class="card" style="width: 18rem;">
                    <a onclick="detail(event, ${element.id})">
                        <img class="card-img-top" src="assets/image/${element.image}" alt="Card image cap">
                    </a>
                    <div class="card-body">
                        <a onclick="detail(event, ${element.id})">
                            <div class="judul"> ${element.title} </div>
                        </a>
                        <a onclick="detail(event, ${element.id})">
                            <div class="penerbit"> ${element.author} </div>
                        </a>
                        <a onclick="detail(event, ${element.id})">
                            <div>
                                <div class="price-promo d-flex align-items-center">
                                    <p class="promo mr-2">Rp. ${element.price.toLocaleString()}</p>
                                    <span class="discount" style="color: black">20%</span>
                                </div>
                                <div class="price">
                                    Rp.${price.toLocaleString()}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>`
        }
    });
}

// let data = "";

// async function myFunction() {
//     let response = await fetch('https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     let test = await response.json();

//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     test.forEach(element => {
//         return await element;
//     });
    
//     // var input, filter, ul, li, a, i, txtValue;
//     // input = document.getElementById("myInput");
//     // filter = input.value.toUpperCase();
//     // ul = document.getElementById("myUL");
//     // li = ul.getElementsByTagName("li");
//     // for (i = 0; i < li.length; i++) {
//     //     a = li[i].getElementsByTagName("a")[0];
//     //     txtValue = a.textContent || a.innerText;
//     //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     //         li[i].style.display = "";
//     //     } else {
//     //         li[i].style.display = "none";
//     //     }
//     // }
// }

const cekLogin = () =>{
    let haslogin = localStorage.getItem('hasLogin');
    
    if(haslogin == "true") {
        return document.getElementById('log').innerHTML = 
        `<a href="profile.html" class="mr-3" style="color: #414141">
            <i class="far fa-user-circle fa-2x"></i>
        </a>
        <a href="logout.html" class="mr-3" style="color: #414141">
            <i class="fas fa-sign-out-alt fa-2x"></i>
        </a>`
    }else if(haslogin == "false"){
        return document.getElementById('log').innerHTML = 
        `<a href="login.html" class="btn login rounded-sm">Login</a>`
    }
}

const detail = (event,id) => {
    event.preventDefault();
    localStorage.setItem('bookID', id)
    window.location.replace('../detail.html');
}

let storage = JSON.parse(localStorage.getItem('buyNow'));
let haslogin = localStorage.getItem('hasLogin');

const renderCart = () => {
    if(haslogin == "true" && storage.status == "checkout") {
        if(storage.count != null) {
            document.getElementById('updateCart').innerHTML = 
            `<span class=" ml-1 rounded-pill updateCart">${storage.count}</span>`
        }
    }
}

cekLogin();
renderCart();
bestSeller('https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books');
