// ambil semua data localstorage
let storage = JSON.parse(localStorage.getItem('buyNow'));

const renderCart = () => {
    if(storage && storage.count != null) {
        document.getElementById('updateCart').innerHTML = 
        `<span class=" ml-1 rounded-pill updateCart">${storage.count}</span>`
    }
}

const cekLogin = () => {
    let haslogin = localStorage.getItem('hasLogin');
    
    if(haslogin == "false" || haslogin == null) {
        return window.location.replace("../login.html");
    }
}

const beliBuku = () => {
    if(storage != null) {
        document.getElementById('beliBuku').innerHTML = 
        `<div class="card col-lg-12">
            <table class="table">
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
        </div>`
        document.getElementById('totalBelanja1').innerHTML = `Total Belanja = Rp.${storage.totalPrice.toLocaleString()}`;
        document.getElementById('totalBelanja2').innerHTML = `Total Belanja = Rp.${storage.totalPrice.toLocaleString()}`;
        document.getElementById('totalBelanja3').innerHTML = `Total Belanja = Rp.${storage.totalPrice.toLocaleString()}`;
    }
}

const hapusBuku = () => {
    swal({
        title: "Apakah kamu yakin?",
        text: "Buku yang kamu beli akan dihapus!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Buku berhasil dihapus!", {
            icon: "success",
          }).then((value) => {
                localStorage.removeItem('buyNow');
                window.location.replace('../buku.html');
           });
        }
      });
}

const hBuku = () => {
    if(storage != null  && storage.status == "checkout") {
        document.getElementById('hapusBuku').innerHTML = 
        `<div class="col-sm-2 rounded" style="background-color: white;padding-left: 5px; width: 150px;padding-top: 5px;padding-bottom: 5px;box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;">
            <a class="d-flex align-items-center" onclick="hapusBuku()" style="cursor: pointer;">
                <i class="far fa-times-circle fa-2x pr-1"></i>
                <span style="font-weight: 700;">Hapus Buku</span>
            </a>
        </div>`
    }
}

const konfirmasiBayar1 = () => {
    swal("Berhasil!", "Pesanan anda akan di proses!", "success")
            .then((value) => {
                window.location.replace('../terimakasih.html');
            });
}

const konfirmasiBayar2 = () => {
    swal("Berhasil!", "Pesanan anda akan di proses!", "success")
            .then((value) => {
                window.location.replace('../timer.html');
            });
}

cekLogin();
renderCart();
beliBuku();
hBuku();