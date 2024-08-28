
const itemPic = document.getElementsByClassName('item-picture')
const itemTittle = document.getElementsByClassName('item-tittle')
const menuTittle = document.getElementsByClassName('menuc')

// desplegar menu 






let menuLista =[
    {
        nombre: 'Platos',
        descripcion: 'Menu de los platos del restaurante',
        plato : [
            {
                nombre: 'Spaghetti a la Boloñesa',
                descripcion: 'Pasta spaghetti con salsa de carne y tomate, acompañada de queso parmesano.',
                estado: 'Disponible',
                cantidad: 20,
                precio: 8.99,
                iurl: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg'
            },
            {
                nombre: 'Ensalada César con Pollo',
                descripcion: 'Fresca ensalada César con trozos de pechuga de pollo a la parrilla, crutones y queso parmesano.',
                estado: 'Disponible',
                cantidad: 15,
                precio: 7.99,
                iurl: 'https://www.pronacatqma.com/images/com_yoorecipe/banner_superior/175_1.jpg'
        
            },
            {
                nombre: 'Hamburguesa Clásica',
                descripcion: 'Jugosa hamburguesa de carne de res con lechuga, tomate, cebolla, pepinillos y queso cheddar, servida con papas fritas.',
                estado: 'Disponible',
                cantidad: 25,
                precio: 9.49,
                iurl: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg'
        
            },
            {
                nombre: 'Pollo a la Parrilla',
                descripcion: 'Pechuga de pollo a la parrilla servida con puré de papas y vegetales al vapor.',
                estado: 'Disponible',
                cantidad: 18,
                precio: 10.99,
                iurl: 'https://assets.unileversolutions.com/v1/799195.jpg'
        
            },
            {
                nombre: 'Tacos de Carne Asada',
                descripcion: 'Tres tacos de carne asada servidos con guacamole, salsa y cebolla morada encurtida.',
                estado: 'Disponible',
                cantidad: 30,
                precio: 7.49,
                iurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LMuCq2hLl8vHOksGJ4PgG6ywVcgCnbo-pQ&s'
        
            },
            {
                nombre: 'Filete de Pescado Empanizado',
                descripcion: 'Filete de pescado empanizado y frito, acompañado de ensalada coleslaw y papas fritas.',
                estado: 'Disponible',
                cantidad: 12,
                precio: 11.99,
                iurl: 'https://peopleenespanol.com/thmb/B6EgpXMcUkTyl0PkQcdQlUCM4s0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fielte-de-pescado-empanizado-2000-d96ae5dfbb42441eab898a818e519abb.jpg'
        
            },
            {
                nombre: 'Lasagna de Carne',
                descripcion: 'Clásica lasagna italiana con capas de pasta, carne molida, salsa de tomate y queso gratinado.',
                estado: 'Disponible',
                cantidad: 10,
                precio: 9.99,
                iurl: 'https://sivarious.com/wp-content/uploads/2017/03/lasana-de-carne-con-verduras.jpg'
        
            },
            {
                nombre: 'Costillas BBQ',
                descripcion: 'Costillas de cerdo tiernas y jugosas con salsa BBQ, servidas con mazorca de maíz y papas asadas.',
                estado: 'Disponible',
                cantidad: 8,
                precio: 13.99,
                iurl: 'https://www.paulinacocina.net/wp-content/uploads/2024/01/costillitas-bbq-Paulina-Cocina-Recetas-1200x675.jpg'
        
            }  
        ]
    },
    {
        nombre: 'Bebidas',
        descripcion: 'Menu de las bebidas del restaurante'

    },
    {
        nombre: 'Postres',
        descripcion: 'Menu de postres del restaurante'
    },
    {
        nombre: 'Extras',
        descripcion: 'Menu de los extras o peticiones especiales'
    }

];


const buttons = document.querySelectorAll('.menu-btn')

for (let btn of buttons){
    const btnId = btn.id
    btn.addEventListener('click',displayItems)

}

function displayItems(){
    const panelItems = document.querySelector('#itemList')
    
    panelItems.style.display = 'grid'

 
}



for(let i =0; i<menuTittle.length;i++){
    menuTittle[i].innerText = menuLista[i].nombre;
}

document.querySelector('#Bebidas').innerHTML = menuLista[2].platos[2].nombre







/*
    interacciones con la nav-bar
 */


  /*
    funciones de agregar items a la lista  
  */ 
    

