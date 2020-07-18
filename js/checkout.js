// ambil semua data localstorage
let storage = JSON.parse(localStorage.getItem('buyNow'));

const renderCart = () => {
    document.getElementById('updateCart').innerHTML = storage.count
}

const cekLogin = () => {
    let haslogin = localStorage.getItem('hasLogin');
    
    if(haslogin == "false" || haslogin == null) {
        return window.location.replace("../login.html");
    }
}

const beliBuku = () => {
    document.getElementById('beliBuku').innerHTML = 
    `<table class="table">
        <thead>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Jumlah</th>
            <th>Total Harga</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><img src="assets/image/${storage.img}" class="card-img-top" alt="image"></td>
            <td>${storage.name}</td>
            <td>${storage.count}</td>
            <td>Rp.${storage.totalPrice.toLocaleString()}</td>
        </tr>
        </tbody>
    </table>`
    document.getElementById('totalBelanja1').innerHTML = `Rp.${storage.totalPrice.toLocaleString()}`;
}

cekLogin();
renderCart();
beliBuku();