import { ProductManager } from "./clases.js";



/* Hola Buenas, esta es como una ayuda para que no le tome mucho tiempo revisar el desafio 
    vaya descomentando las partes a revisar

    nota: al agregar producto porfavor hacerlo de 1 en 1
*/

//instancia de la clase
const product = new ProductManager();

/* Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío [] */

//product.getProducts()

/* Se llamará al método “addProduct”, El objeto debe agregarse satisfactoriamente
    con un id generado automáticamente SIN REPETIRSE

    nota: deben estar todos los campos rellenados
*/

//product.addProduct("teclado", "mecanico", 22, "./teclado.jpg", "asd2w1", 12)
//product.addProduct("mouse", "el mejor", 15, "./mouse.jpg", "223w1", 20)

/* 
    Se llamará el método “getProducts” nuevamente, 
    esta vez debe aparecer el producto recién agregado
*/

//product.getProducts()

/*
    Se llamará al método “getProductById” y se corroborará que devuelva el producto 
    con el id especificado, en caso de no existir, debe arrojar un error.
*/

//product.getProductsById(1)

/*  Se llamará al método “updateProduct” y se intentará cambiar un campo
    de algún producto, se evaluará que no se elimine el id y 
    que sí se haya hecho la actualización.

    nota: todos los campos deben estar rellenos
*/

//product.updateProduct(5, {title:"teclado", description: "mecanico", price: 22, thumbnail: "./teclado.jpg", code: "asd2w1", stock: 12})
//product.updateProduct(1, {title:"raton", description: "el peor", price: 10, thumbnail: "./raton.jpg", code: "asd213", stock: 12})

/* 
    Se llamará al método “deleteProduct”, se evaluará que realmente se elimine 
    el producto o que arroje un error en caso de no existir.
*/

product.delateProduct(1)