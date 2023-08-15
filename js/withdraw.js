//  button click
 
 document.getElementById('withdraw-btn').addEventListener('click',function(){
//  find input value in number
const withdrawinput = document.getElementById('withdraw-input');
withdrawfieldstring = withdrawinput.value;
withdrawfield = parseFloat(withdrawfieldstring);

//find the text value in number 

const withdrawamount = document.getElementById('withdraw-amount')
withdrawpreviousstring = withdrawamount.innerText;
withdrawprevious = parseFloat(withdrawpreviousstring);

// add withdraw amount

const currentwithdraw = withdrawprevious + withdrawfield;

withdrawamount.innerText = currentwithdraw;

// find the balance amount in number
const blanceamount = document.getElementById('balance-amount');
const balancefieldstring = blanceamount.innerText;
balancefield = parseFloat(balancefieldstring);
const currentblance = balancefield - withdrawfield;
blanceamount.innerText = currentblance;


withdrawinput.value = '';

})