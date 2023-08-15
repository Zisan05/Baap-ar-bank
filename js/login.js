document.getElementById('button-submit').addEventListener('click',function(){
 const emailfield = document.getElementById('user-email');
 const email = emailfield.value;

 const passwordfield = document.getElementById('user-pass');
 const password = passwordfield.value;
 if(email==='mdzisanislam69@gamil.com' && password === 'zisanwp19'){
    window.location.href ='bank.html';
 }
else{
 alert("bagg bosdika!!")
}

})