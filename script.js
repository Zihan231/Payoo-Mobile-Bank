document.getElementById('Log-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phnNumber = parseInt(document.getElementById("phn-Num").value);
    const PinNum = parseInt(document.getElementById("pin").value);
    if (phnNumber === 1234567890 && PinNum === 1234) {
        window.location.href = './home.html';
    }
    else {
        document.getElementById("Errormsg").style.display = "block";
    }
})
