const productos = [
    {
        id: 1,
        name: 'Villa General Belgrano',
        precio: 5000,
        descripcion: 'Ciudad de arquitectura Bavara',
        image: '../img/vgb.jpg',
        stock: 3
    },
    {
        id: 2,
        name: 'Santa Rosa',
        precio: 4000,
        descripcion: 'Ciudad entre rios y montañas',
        image: "../img/santa.jpg",
        stock: 5
    },
    {
        id: 3,
        name: 'Los Reartes',
        precio: 3000,
        descripcion: 'Pueblo historico serrano',
        image: "../img/images.jpg",
        stock: 3
    }
]




export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};