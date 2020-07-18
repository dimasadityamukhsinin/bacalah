// let btnLogout = document.getElementById('logout')
// let name = JSON.parse(localStorage.getItem('user'))
// let text = `Selamat datang di Dashboard, ${name.name}`
// document.getElementById('welcome').innerHTML = text

var bookID = localStorage.getItem('bookID')
const getByID = async (event, id) => {
    // ambil data api/books/id sesuai dengan yg di klik
    event.preventDefault();
    let hasLogin = localStorage.getItem('hasLogin');
    if(hasLogin == "true") {
        let endPoint = `https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books/${id}`;
        let response = await fetch(endPoint)
        let result = await response.json();
        // buat localstorage untuk buy now
        let buyNowStorage = JSON.parse(localStorage.getItem('buyNow'));
        if(buyNowStorage == null){
            buyNow = []
        }
        // jumlah item yg akan di buy now
        let jumlahBarang = document.getElementById('jumlahBarang').value; 
        // rumus sesuai diskonan
        let price = result.price * (20/ 100);
        price = result.price - price;
        // simpan semua data yang dibutuhkan di halaman checkout
        let data = {
            id: bookID,
            count: jumlahBarang,
            price: price,
            totalPrice: parseInt(jumlahBarang) * parseInt(price),
            name: result.title,
            img: result.image,
            status: "checkout",
        }
        // set data yg dibutuhkan kedalam localstorage buynow
        localStorage.setItem('buyNow', JSON.stringify(data));
        document.getElementById('updateCart').innerHTML = data.count;


        // karena buynow user seharusnya langsung di redirect ke halaman checkout untuk checkout
        swal("Berhasil!", "Buku Telah Ditambahkan!", "success")
            .then((value) => {
                window.location.replace('../checkout.html');
            });
    }else {
        window.location.replace('../login.html');
    }
}

// get data id

const getBookByID = async (id) => {
    let endPoint = `https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books/${id}`;
    let response = await fetch(endPoint)
    let result = await response.json();

    let price = result.price * (20/ 100);
    price = result.price - price;
    console.log(result);
    let text = `
    <div class="row pb-4">
    <div class="col-md-3">
        <div class="card" style="max-width: 14rem;">
            <img src="assets/image/${result.image}" class="card-img-top" alt="image">
            <div class="card-body">
                <div class="bagikan">
                    <div class="d-flex align-items-center">
                        <div class="justify-content-start">
                        </div>
                    </div>
                </div>                          
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card" style="max-width: 34rem;">
            <div class="card-body">
                <a href="">
                <div class="judul"> ${result.title} </div>
                </a>
                <a href="">
                <div class="penerbit"> ${result.author} </div>
                </a>
                <p>
                ${result.description} 
                </p>
            </div>
          </div>
    </div>
    <div class="col-md-3">
        <div class="row">
            <div class="card" style="max-width: 14rem;">
                <div class="card border-dark">
                   <div class="harga">
                      Harga:
                       <div class="price-promo d-flex align-items-center">
                           <p class="promo mr-2">Rp. ${result.price}</p>
                           <span class="discount" style="color: black">    20% </span>
                       </div>
                       <div class="price">
                           Rp.${price.toLocaleString()}
                       </div>
                   </div>
                </div>
                <br>
                <div class="form-group">
						<label class="control-label">Jumlah:</label>
						<input id="jumlahBarang" class="form-control" type="number" value="1" min="1" max="10" />
					</div>
                <Br>
                <div class="card border-dark">
                    <a onclick="getByID(event, ${result.id})" class="btn btn-primary">Beli Sekarang</a>
                </div>
                <br>                            
           </div>
        </div>
        
    </div>       
            
</div>
    `
       
    document.getElementById('showBook').innerHTML = text
    
    // console.log(result);
    
  
}
getBookByID(bookID)


// let listbook = '';

// const allBooks = async(url) => {
//     let response = await fetch(url, {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     let test = await response.json();
//     test.forEach(element => {
//         listbook = element;
//     });
// }

// allBooks('https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books');
// console.log(listbook);