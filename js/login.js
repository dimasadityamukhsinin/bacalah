function login(event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    let email2 = localStorage.getItem("email");

    let password = document.getElementById("exampleInputPassword1").value;
    let password2 = localStorage.getItem("password");

    if ( (email && password) == (email2 && password2) ) {
        localStorage.setItem("hasLogin", true);
        window.location.replace('../index.html');
    } else {
        return alert("Password atau Email Salah atau tidak terdaftar")
    }
}

const checkLogin = () => {
    let hasLogin = localStorage.getItem('hasLogin');
    if(hasLogin == "true") {
        window.location.replace('../index.html');
    }
}

checkLogin();
