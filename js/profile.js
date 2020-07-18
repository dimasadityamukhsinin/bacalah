const cekLogin = () => {
    let haslogin = localStorage.getItem('hasLogin');
    
    if(haslogin == "false" || haslogin == null) {
        return window.location.replace("../login.html");
    }
}

const profile = () => {
    let nama = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    document.getElementById('nama').innerHTML = nama;
    document.getElementById('email').innerHTML = email;
}

let storage = JSON.parse(localStorage.getItem('buyNow'));

const riwayat = () => {
    console.log(storage);
    if(storage == null) {
        document.getElementById('riwayat').innerHTML = 
        `<h2 class="card-title">Bukumu Kosong</h2>
        <img src="assets/image/kisspng-emoji-sadness-emoticon-smiley-clip-art-sad-emoji-png-clipart-5a73fc019d1bb8.4272949715175505936435.png" width="30%" alt="sad">
        <p class="card-text">Yuk cari buku favoritmu</p>
        <a href="buku.html" class="btn btn-primary btn-lg btn-block">Cari Buku</a>`
    }else if(storage.status == "riwayat") {
        document.getElementById('riwayat').innerHTML = 
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
        </table>
        <a href="buku.html" class="btn btn-primary btn-lg btn-block">Cari Buku</a>`
    }else {
        document.getElementById('riwayat').innerHTML = 
        `<h2 class="card-title">Bukumu Kosong</h2>
        <img src="assets/image/kisspng-emoji-sadness-emoticon-smiley-clip-art-sad-emoji-png-clipart-5a73fc019d1bb8.4272949715175505936435.png" width="30%" alt="sad">
        <p class="card-text">Yuk cari buku favoritmu</p>
        <a href="buku.html" class="btn btn-primary btn-lg btn-block">Cari Buku</a>`
    }
}

const renderCart = () => {
    let storage = JSON.parse(localStorage.getItem('buyNow'));
    let haslogin = localStorage.getItem('hasLogin');

    if(haslogin == "true") {
        if(storage.count != null && storage.status == "checkout") {
            document.getElementById('updateCart').innerHTML = 
            `<span class=" ml-1 rounded-pill updateCart">${storage.count}</span>`
        }
    }
}

cekLogin();
profile();
riwayat();
renderCart();
