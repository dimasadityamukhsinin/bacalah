// let btnLogout = document.getElementById('logout')
// let name = JSON.parse(localStorage.getItem('user'))
// let text = `Selamat datang di Dashboard, ${name.name}`
// document.getElementById('welcome').innerHTML = text

var bookID = localStorage.getItem('bookID')
const beliSekarang = async(event, id) => {
    event.preventDefault()
    let data = await fetch(`https://5f0e7e8d704cdf0016eaf16a.mockapi.io/books/${id}`)
    let result = await data.json()
    let jumlahBarang = document.getElementById("jumlah").value;
    let text = ""
    let allRes = {
        count: jumlahBarang,
        ...result
    }
    let cart = JSON.parse(localStorage.getItem('jumlahBarang' || []))
    
    
    localStorage.setItem("jumlahBarang",JSON.stringify(cart));
    window.alert('berhasil')
    

    console.log(cart);
    text += `${cart.count}`

    document.getElementById('updateCart').innerHTML =text
    

}
const getCart = () => {
    let text =""
    let cart = JSON.parse(localStorage.getItem('jumlahBarang' || []))
    text += `${cart.count}`
    document.getElementById('updateCart').innerHTML =text

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
    <div class="row">
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
						<input id="jumlah" class="form-control" type="number" value="1" min="1" max="10" />
					</div>
                <Br>
                <div class="card border-dark">
                    <a onclick="beliSekarang(event, ${result.id})" class="btn btn-primary">Beli Sekarang</a>
                </div>
                <br>
                <div class="card border-dark">
                    <a href="#" class="btn btn-outline-secondary ">Tambah Whistlist</a>
                </div>                               
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