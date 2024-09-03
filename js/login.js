
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

let i =0;

login.addEventListener('submit', function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;

    const usr = user.find(u => u.passcode === pin);

    if (usr){
        window.location.href = '/menu.html';
        
    }else{
        alert("Pin incorrecto!");
        i++;
        
    }
    if (i==3){
        const mensaje =document.querySelector('#mensaje');
        mensaje.style.color='red';
        mensaje.innerHTML='Limite de intentos agotados <br> Por favor contactarse con un administrador';
        document.querySelector('input').style.display = 'none';
        document.querySelector('#submit-btn').style.display = 'none';
        document.querySelector('h2').textContent = 'Denegado'
        
    }


});