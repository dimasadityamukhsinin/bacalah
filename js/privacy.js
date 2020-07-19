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
renderCart();