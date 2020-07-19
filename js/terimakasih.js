let storage = JSON.parse(localStorage.getItem('buyNow'));

function tes(){ 
    let riwayat = JSON.parse(localStorage.getItem('riwayat'));
    let arrriwayat = [];
    if(riwayat == null) {
        localStorage.setItem('riwayat', JSON.stringify(arrriwayat));
    }
    tes2();
}

const tes2 = () => {
    setInterval(function(){ 
        let riwayat = JSON.parse(localStorage.getItem('riwayat'));
        if(!riwayat){
            riwayat.push(storage);
            localStorage.setItem('riwayat', JSON.stringify(riwayat));
        } else {
            riwayat = JSON.parse(localStorage.getItem('riwayat'))
            riwayat.push(storage)
            localStorage.setItem('riwayat', JSON.stringify(riwayat))
            localStorage.setItem('buyNow', null);
        }
        window.location.replace('../profile.html');
    }, 3000);
}
tes();