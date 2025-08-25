function getValues(param) {
    return document.getElementById(param).value;
}
function getInnerText(param) {
    return document.getElementById(param).innerText;
}
function setInnerText(param, value) {
    document.getElementById(param).innerText = value;
}
function displayError() {
    document.getElementById('Errormsg').style.display = 'block';
}
function HideErrorMsg() {
    document.getElementById('Errormsg').style.display = 'none';
}
function displayToggle(id) {
    document.getElementById("add-money").style.display = 'none';
    document.getElementById("cashout").style.display = 'none';
    document.getElementById(id).style.display = 'block';
}
document.getElementById("add-money-form-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getValues("bank");
    const accNum = getValues("accNum");
    const amount = getValues("amount");
    const pinNum = getValues("pin-num");
    if (!bank || !accNum || !amount || !pinNum) {
        displayError();
        return;
    }
    else if (isNaN(accNum) || accNum.length !== 11) {
        displayError();
        return;
    }
    else if (isNaN(amount) || amount <= 0) {
        displayError();
        return;
    }
    else if (isNaN(pinNum) || pinNum.length !== 4 || pinNum !== "1234") {
        displayError();
        return;
    }
    else {
        HideErrorMsg();
        let availableBalance = getInnerText("availableBalance");
        let newBalance = parseFloat(availableBalance) + parseFloat(amount);
        setInnerText("availableBalance", newBalance.toFixed(2));
        alert('Money Added Successfully');
        // window.location.href = "./home.html";
    }
});
document.getElementById("cashout-form-btn").addEventListener("click", function (e) {
    e.preventDefault();
    let Bank_number = getValues("accNum-cashout");
    let amount = getValues("amount-cashout");
    let pinNum = getValues("pin-num-cashout");
    
    if (!Bank_number || !amount || !pinNum) {
        displayError();   
        return;
    }
    else if (isNaN(Bank_number) || Bank_number.length !== 11) {
        displayError();
        return;
    }
    else if (isNaN(Bank_number) || Bank_number.length !== 11) {
        displayError();
        return;
    }
    else if (isNaN(amount) || amount <= 0) {
        displayError();
        return;
    }
    else if (isNaN(pinNum) || pinNum.length !== 4 || pinNum !== "1234") {
        displayError();
        return;
    }
    else {
        HideErrorMsg();
        let availableBalance = getInnerText("availableBalance");
        let newBalance = parseFloat(availableBalance) - parseFloat(amount);
        setInnerText("availableBalance", newBalance.toFixed(2));
        alert('Cash Out Successful');
        // window.location.href = "./home.html";
    }
});



document.getElementById("cashout-btn").addEventListener("click", function () {
    displayToggle("cashout");
});
document.getElementById("add-money-btn").addEventListener("click", function () {
    displayToggle("add-money");
});
document.getElementById("logOut-btn").addEventListener("click", function () {
    window.location.href = "./index.html";
});