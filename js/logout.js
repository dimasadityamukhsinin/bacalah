const logout = () => {
    localStorage.setItem("hasLogin", false);
    window.location.replace('../index.html');
}

logout();