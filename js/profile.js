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

cekLogin();
profile();