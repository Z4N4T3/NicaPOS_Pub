

function displayItems(){
    const panelItems = document.querySelector('#itemList')
    
    panelItems.style.display = 'grid'
 
}

function displayItemName(){
    const iName = document.querySelector()
}

const menuTittle = document.getElementsByClassName('menuc');

let menuLista =[
    {
        nombre: 'Platos',
        descripcion: 'Menu de los platos del restaurante'
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


for(let i =0; i<menuTittle.length;i++){
    menuTittle[i].innerText = menuLista[i].nombre;
}



