const updateDate=document.querySelector('#date');
const currencyOne=document.querySelector('#currency-one');
const currencyTwo=document.querySelector('#currency-two');
const currencyOneInput = document.querySelector("#currency-one__input");
const currencyTwoInput = document.querySelector("#currency-two__input");
const shuffle = document.querySelector('#shuffle')
//Date
function dateUpdated(){
    let date = new Date()
    let today = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
updateDate.innerHTML=`
${today}<span>/</span>${month}<span>/</span>${year}
`}

//Calulation and Fetch API
//API Key
//a8bfbe05a290eb5d20afa167
function calculate(){
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/a8bfbe05a290eb5d20afa167/latest/${currencyOneValue}`)
    .then(res=>res.json())
    .then(data=>{
        const rates = data.conversion_rates[currencyTwoValue];
        currencyTwoInput.value=(currencyOneInput.value*rates).toFixed(2);
    })
}
//Shuffle
shuffle.addEventListener('click',()=>{
    const oneValue=currencyOne.value;
    const twoValue=currencyTwo.value;
    currencyOne.value=twoValue;
    currencyTwo.value=oneValue;
    calculate();
})
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
currencyOneInput.addEventListener('input', calculate);
currencyTwoInput.addEventListener('input', calculate);
dateUpdated();
calculate()