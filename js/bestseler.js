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
            document.getElementById('bestseller').innerHTML += 
            `<div class="col-md-3 ml-5 pb-4">
                <div onclick="detail(event, ${element.id})" class="card" style="width: 18rem;">
                    <a href="">
                        <img class="card-img-top" src="assets/image/${element.image}" alt="Card image cap">
                    </a>
                    <div class="card-body">
                        <a href="">
                            <div class="judul"> ${element.title} </div>
                        </a>
                        <a href="">
                            <div class="penerbit"> ${element.author} </div>
                        </a>
                        <a href="">
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
const detail = (event,id) => {
    event.preventDefault()
    localStorage.setItem('bookID', id)
    window.location.replace('detail.html')
}

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
    }else if(haslogin == "false" || haslogin == null){
        return document.getElementById('log').innerHTML = 
        `<a href="login.html" class="btn login rounded-sm">Login</a>`
    }
}

const renderCart = () => {
    let storage = JSON.parse(localStorage.getItem('buyNow'));
    let haslogin = localStorage.getItem('hasLogin');

    if(haslogin == "true") {
        if(storage && storage.count != null) {
            document.getElementById('updateCart').innerHTML = 
            `<span class=" ml-1 rounded-pill updateCart">${storage.count}</span>`
        }
    }
}

cekLogin();
bestSeller('https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books');
renderCart();