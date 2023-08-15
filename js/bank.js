document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositinput = document.getElementById('deposit-input');
    const inputfieldstring = depositinput.value;
    const inputfield = parseFloat(inputfieldstring);

    
const depositamount = document.getElementById('deposit-amount');
const previousdepositstring = depositamount.innerText;
const previousdeposit = parseFloat(previousdepositstring);

const currentdeposit = previousdeposit + inputfield; 
 
depositamount.innerText = currentdeposit;

const blanceamount = document.getElementById('balance-amount');
const balancefieldstring = blanceamount.innerText;
balancefield = parseFloat(balancefieldstring);
const currentblance = balancefield + inputfield;

blanceamount.innerText = currentblance;
depositinput.value ='';
});
