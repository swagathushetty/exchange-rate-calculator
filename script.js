//refer docs 1.1
const currencyElement_one=document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one')
const currencyElement_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two')
const rateEl=document.getElementById('rate')
const swap=document.getElementById('swap')


//fetch exchange rate and update DOM
//refer docs 1.2
function calculate(){
    const currency_one=currencyElement_one.value; //USD
    const currency_two = currencyElement_two.value; //INR

    fetch(` https://prime.exchangerate-api.com/v5/994a585bb9a570ea18fdd415/latest/${currency_one}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        console.log(typeof data.conversion_rates) //
        const rate=data.conversion_rates[currency_two]

        rateEl.innerText=`1 ${currency_one}=${rate} ${currency_two}`

        amountEl_two.value=(amountEl_one.value*rate).toFixed(2)

    })

}

//event listeners
currencyElement_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input', calculate)
currencyElement_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)


//rerfer docs 1.3
swap.addEventListener('click',()=>{
    const temp=currencyElement_one.value;
    currencyElement_one.value=currencyElement_two.value;
    currencyElement_two.value=temp
    calculate()
})

calculate();
