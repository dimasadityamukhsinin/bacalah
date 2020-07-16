function register(event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;

    let password = document.getElementById("exampleInputPassword1").value;

    let username = document.getElementById("exampleInputName").value;

    let checkbox = document.getElementById("exampleCheck1").value;

    if ( email && password && username && checkbox ) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("username", username);
        window.location.replace('../index.html');
    } else {
        alert("Data Tidak boleh kosong")
    }
}
