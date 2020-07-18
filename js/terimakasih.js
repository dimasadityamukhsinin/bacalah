let storage = JSON.parse(localStorage.getItem('buyNow'));

setInterval(function(){ 
    storage.status = "riwayat";
    tgl = new Date();
    tgl.toDateString();

    localStorage.setItem('buyNow', JSON.stringify(storage));
    window.location.replace('../profile.html');
}, 3000);