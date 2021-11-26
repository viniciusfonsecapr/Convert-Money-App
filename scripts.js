const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2 
const euro = 7
const bitcoin = 329496


const convertValues = () => {
    const input = document.getElementById('input-real').value 
    const realValueText = document.getElementById("real-value")
    const currencyValueText = document.getElementById('currency-value-text')
    
 // AQUI ABAIXO UTILIZAMOS UMA FORMULA QUE JÁ CONVERTO COM O SIMBOLO E PONTOS PARA A MOEDA DESEJADA 

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(input)

      if(select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
      }).format(input / dolar)
      }
      if(select.value === "€ Euro") {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(input / euro) }
        if(select.value === 'Bitcoin'){
            currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'BTC'
            }).format(input / bitcoin)
        }

      
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currencyImage')
    
    if(select.value === '€ Euro') {
        currencyName.innerHTML = '€ Euro'
        currencyImage.src = "./assets/euro.svg"
        
    } if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'US$ Dólar americano'
        currencyImage.src = "./assets/estados-unidos (1) 1.svg"
       
    } if(select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

