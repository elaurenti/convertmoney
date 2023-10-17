const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 135.165
    const libraToday = 6.16

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).format(inputCurrencyValue);
    
    if(currencySelect.value == "USD") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' }).format(inputCurrencyValue/dolarToday);
    }

    if(currencySelect.value == "EUR") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' }).format(inputCurrencyValue/euroToday);
    }

    if(currencySelect.value == "BTC") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'BTC' }).format(inputCurrencyValue/bitcoinToday);
    }

    if(currencySelect.value == "LB") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'GBP' }).format(inputCurrencyValue/libraToday);
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name-converted")
    const currencyImage = document.querySelector(".img-currency")

    if(currencySelect.value == "USD") { 
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./src/estados-unidos.png"
    }

    if(currencySelect.value == "EUR") { 
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./src/euro.png"
    }

    if(currencySelect.value == "BTC") { 
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./src/bitcoin.png"
    }

    if(currencySelect.value == "LB") { 
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./src/libra.png"
    }

    if(currencyValueToConvert.value == "BRL") { 
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./src/brasil.png"
    }


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)