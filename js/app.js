// import 'db.js' from '/js/db.js'


// desplegar menu 

let menuLista =[
    {
        nombre: 'Platos',
        descripcion: 'Menu de los platos del restaurante',
        item : [
            {
                nombre: 'Spaghetti a la Boloñesa',
                descripcion: 'Pasta spaghetti con salsa de carne y tomate, acompañada de queso parmesano.',
                estado: 'Disponible',
                cantidad: 20,
                precio: 8.99,
                pic: '/src/img/espagueti.jpg'
            },
            {
                nombre: 'Ensalada César con Pollo',
                descripcion: 'Fresca ensalada César con trozos de pechuga de pollo a la parrilla, crutones y queso parmesano.',
                estado: 'Disponible',
                cantidad: 15,
                precio: 7.99,
                pic: 'https://www.pronacatqma.com/images/com_yoorecipe/banner_superior/175_1.jpg'
        
            },
            {
                nombre: 'Hamburguesa Clásica',
                descripcion: 'Jugosa hamburguesa de carne de res con lechuga, tomate, cebolla, pepinillos y queso cheddar, servida con papas fritas.',
                estado: 'Disponible',
                cantidad: 25,
                precio: 9.49,
                pic: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg'
        
            },
            {
                nombre: 'Pollo a la Parrilla',
                descripcion: 'Pechuga de pollo a la parrilla servida con puré de papas y vegetales al vapor.',
                estado: 'Disponible',
                cantidad: 18,
                precio: 10.99,
                pic: 'https://assets.unileversolutions.com/v1/799195.jpg'
        
            },
            {
                nombre: 'Tacos de Carne Asada',
                descripcion: 'Tres tacos de carne asada servidos con guacamole, salsa y cebolla morada encurtida.',
                estado: 'Disponible',
                cantidad: 30,
                precio: 7.49,
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LMuCq2hLl8vHOksGJ4PgG6ywVcgCnbo-pQ&s'
        
            },
            {
                nombre: 'Filete de Pescado Empanizado',
                descripcion: 'Filete de pescado empanizado y frito, acompañado de ensalada coleslaw y papas fritas.',
                estado: 'Disponible',
                cantidad: 12,
                precio: 11.99,
                pic: 'https://peopleenespanol.com/thmb/B6EgpXMcUkTyl0PkQcdQlUCM4s0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fielte-de-pescado-empanizado-2000-d96ae5dfbb42441eab898a818e519abb.jpg'
        
            },
            {
                nombre: 'Lasagna de Carne',
                descripcion: 'Clásica lasagna italiana con capas de pasta, carne molida, salsa de tomate y queso gratinado.',
                estado: 'Disponible',
                cantidad: 10,
                precio: 9.99,
                pic: 'https://sivarious.com/wp-content/uploads/2017/03/lasana-de-carne-con-verduras.jpg'
        
            },
            {
                nombre: 'Costillas BBQ',
                descripcion: 'Costillas de cerdo tiernas y jugosas con salsa BBQ, servidas con mazorca de maíz y papas asadas.',
                estado: 'Disponible',
                cantidad: 8,
                precio: 13.99,
                pic: 'https://www.paulinacocina.net/wp-content/uploads/2024/01/costillitas-bbq-Paulina-Cocina-Recetas-1200x675.jpg'
        
            }  
        ]
    },
    {
        nombre: 'Bebidas',
        descripcion: 'Menu de las bebidas del restaurante',
        item: [
            {
                nombre: 'Coca Cola',
                descripcion: 'sdasd',
                estado: 'Disponible',
                cantidad: 50,
                precio: 1.99,
                pic:'https://img.asmedia.epimg.net/resizer/v2/DSWLWJ7BVJD25JQT7YTRI63ES4.jpg?auth=e5ecd62e9d7c277d574a06940a3e8a964507e07307948442af52764f398bbdcd&width=1472&height=828&smart=true'
            },
            {
                nombre: 'Jugo de Naranja',
                estado: 'Disponible',
                cantidad: 30,
                precio: 2.99,
                pic: 'https://www.paulinacocina.net/wp-content/uploads/2023/06/jugo-de-naranja-receta-y-propiedades-1200x675.jpg'
            },
            {
                nombre: 'Café Americano',
                estado: 'Disponible',
                cantidad: 40,
                precio: 1.49,
                pic: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/17/16922909769586.jpg'
            },
            {
                nombre: 'Agua Mineral',
                estado: 'Disponible',
                cantidad: 60,
                precio: 1.29,
                pic: 'https://media.glamour.mx/photos/6190a9eff5ed039ceea889cd/master/w_1600%2Cc_limit/232430.jpg'
            },
            {
                nombre: 'Té Helado',
                estado: 'Disponible',
                cantidad: 35,
                precio: 2.49,
                pic: 'https://preppykitchen.com/wp-content/uploads/2023/09/Long-Island-Iced-Tea-Recipe-Card-500x500.jpg'
            },
            {
                nombre: 'Limonada',
                estado: 'Disponible',
                cantidad: 25,
                precio: 2.19,
                pic: 'https://cdn0.celebritax.com/sites/default/files/styles/amp/public/recetas/limonada.jpg'
            },
            {
                nombre: 'Batido de Fresa',
                estado: 'Disponible',
                cantidad: 20,
                precio: 3.49,
            },
            {
                nombre: 'Cerveza Artesanal',
                estado: 'Disponible',
                cantidad: 15,
                precio: 4.99,
            },
            {
                nombre: 'Cerveza Artesanal',
                estado: 'Disponible',
                cantidad: 15,
                precio: 4.99,
            },
        ]
    },
    {
        nombre: 'Postres',
        descripcion: 'Menu de postres del restaurante',
        item:[
            {
                "nombre": "Tiramisú",
                "estado": "Disponible",
                "cantidad": 10,
                "precio": 5.50,
                "pic": "tiramisu.jpg"
            },
            {
                "nombre": "Cheesecake de Fresa",
                "estado": "Disponible",
                "cantidad": 8,
                "precio": 6.00,
                "pic": "cheesecake_fresa.jpg"
            },
            {
                "nombre": "Brownie de Chocolate",
                "estado": "Disponible",
                "cantidad": 15,
                "precio": 4.00,
                "pic": "brownie_chocolate.jpg"
            },
            {
                "nombre": "Flan de Caramelo",
                "estado": "Agotado",
                "cantidad": 0,
                "precio": 3.75,
                "pic": "flan_caramelo.jpg"
            }
            
        ]
    },
    {
        nombre: 'Extras',
        descripcion: 'Menu de los extras o peticiones especiales',
        item: [
            {
                nombre: "Extra Cheese",
                estado: "disponible",
                cantidad: 1,
                precio: 0.50,
                pic: "extra_cheese.jpg"
            },
            {
                nombre: "Bacon",
                estado: "no disponible",
                cantidad: 0,
                precio: 1.00,
                pic: "bacon.jpg"
            },
            {
                nombre: "Avocado",
                estado: "disponible",
                cantidad: 1,
                precio: 1.50,
                pic: "avocado.jpg"
            }
        ]
    }

];

let platoTest = [
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
const buttons = document.querySelectorAll('.menu-btn')
const panelItems = document.querySelector('#itemList')
const itemPic = document.getElementsByClassName('item-img')
const itemTittle = document.getElementsByClassName('item-name')
const menuTittle = document.getElementsByClassName('menuc')
const IVA = 0.15;
const itemCard = document.querySelectorAll('.item-card');



for (let btn of buttons){
    const Val = btn.value
    btn.addEventListener('click',function(){
        displayItems(Val)
        addItemDataToHtml(Val)
       for (let i=0; i<itemTittle.length;i++){
        itemTittle[i].innerText=menuLista[Val].item[i].nombre
        itemPic[i].style.backgroundImage = `url('${menuLista[Val].item[i].pic}')`
    
       }
    })
    
}

function displayItems(val){
    
    panelItems.style.display = 'grid'

    
}


for(let i =0; i<menuTittle.length;i++){
    menuTittle[i].innerText = menuLista[i].nombre;
}

/*
    interacciones con la nav-bar
 */


  /*
    funciones de changeQty items a la orden  
  */ 

// const itemCard = document.querySelector('.item-card');
// const itemPicture = document.querySelector('.item-img');
// const qtyContainer = document.querySelector('.changeQty-container')
// const changeQty = document.querySelector('.changeQty');
// const addMore = document.querySelector('#addMore');
// const addLess = document.querySelector('#addLess');
// const qtyInput = document.querySelector('#qtyInput');
// const qtySubmit = document.getElementById('qtySubmit');

// let qty= parseInt(qtyInput.value);

// // display qty


// itemCard.addEventListener('click',displayQtyBtns)

// function displayQtyBtns(){
//     qtyContainer.style.display = 'block';
// }

// addMore.addEventListener('click', function(){
//    qty+=1;
//    qtyInput.value= qty;
// })
// addLess.addEventListener('click', function(){
//     if (qty >1){
//         qty -=1;
//         qtyInput.value = qty;

//     }
// })

// qtySubmit.addEventListener('click',function(){
//     const iqty = parseInt(qtyInput.value)

//     if (iqty<1 || isNaN(iqty)){
//         alert("Cantidad de Items Invalida!!!")
//     }else{
//         addOrderItem(iqty);
//     }

//     qtyInput.value = 1;
//     qty =1;
    
//     // alert('Submitted');
// })
// // order 

function addOrderItem (iqty){
    const orderList = document.getElementById('order-list')
    const orderItem = document.createElement('tr');
    const orderItemH = document.createElement('th');
    const orderItemQty = document.createElement('td');
    const orderItemPrice = document.createElement('td');
    const orderItemAmount = document.createElement('td');
    let price = 20; 
    // obterne cantidad en dependencia del valor del input 
    // extraer el precio de la base de datos asi como el nombre 
    const ItemName = document.createTextNode('pizza');
    const ItemQty = document.createTextNode(iqty);
    const itemPrice = document.createTextNode('$ ' + price);
    const ItemAmount = document.createTextNode('$ '+iqty*price);


    orderList.appendChild(orderItem);
    orderItem.appendChild(orderItemH);
    orderItem.appendChild(orderItemQty);
    orderItem.appendChild(orderItemPrice);
    orderItem.appendChild(orderItemAmount);
    
    orderItemH.appendChild(ItemName);
    orderItemQty.appendChild(ItemQty);
    orderItemPrice.appendChild(itemPrice);
    orderItemAmount.appendChild(ItemAmount);

}


const itemPicture = document.querySelector('.item-img');
// const qtyContainer = document.querySelector('.changeQty-container')
const changeQty = document.querySelector('.changeQty');
const addMore = document.querySelector('#addMore');
const addLess = document.querySelector('#addLess');
const qtyInput = document.querySelector('#qtyInput');
const qtySubmit = document.getElementById('qtySubmit');

let qty= parseInt(qtyInput.value);


for (let but of itemCard){
    const qtyContainer = but.querySelector('.changeQty-container')

    but.addEventListener('click', function(){
        qtyContainer.style.display = 'block';
        alert('click')
    })
}



// agregar los items al html


function addItemDataToHtml(val){
    panelItems.innerHTML='';
    if(menuLista[val].item.length>0){
        for(let element of menuLista[val].item){
            let newItem = document.createElement('div');
            newItem.classList.add('item-card');
            newItem.innerHTML= `
            <figure class="item-img">
                        <div class="changeQty-container">
                            <div class="changeQty" >
                                <button class="changeQty-btn" id="addLess">-</button>
                                <input type="text" name="" id="qtyInput" value="1" class="changeQty-in">
                                <button class="changeQty-btn" id="addMore">+</button>
                            </div>
                            <button class="changeQty-submit" id="qtySubmit">Agregar</button>
                        </div>
                    </figure>
                    <h2 class="item-name">ItemName</h2>`;
            panelItems.appendChild(newItem);
        }
    }
}

