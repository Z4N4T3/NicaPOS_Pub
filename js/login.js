
let user = [
    {
        nombre: 'Roberto',
        passcode: '123456',
        rol: 'mesero'
    },
    {
        nombre: 'Jorge',
        passcode: '001890',
        rol: 'admin'
    },
    {
        nombre: 'Jurgen',
        passcode: '098765',
        rol: 'admin'
    }
];

const login = document.querySelector('#loginForm');


login.addEventListener('submit', function(){

    event.preventDefault();
    const pin = document.getElementById('pin').value;

    const usr = user.find(u => u.passcode === pin);

    if (usr){
        window.location.href = './index.html';
        
    }else{
        alert("Pin incorrecto!");
    }


});