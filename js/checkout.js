// ambil semua data localstorage
let storage = JSON.parse(localStorage.getItem('buyNow'))

const renderCart = () => {
    document.getElementById('updateCart').innerHTML = storage.count
}
renderCart()