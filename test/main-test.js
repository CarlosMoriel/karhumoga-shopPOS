var assert = require('assert');
describe('Test de productos', function () {
  describe('Obtener lista de productos', function () {

    it('Debe retornar un arreglo de >= 0 elementos con los productos', async function () {
            
       let response = await fetch('http://localhost:8001/api/inventory/products');
       let res = await response.json();
       if(res){
        assert.ok(true)
       }else{
        assert.ok(false)
       }
    });

  });
});


describe('Test de Clientes', function () {
  describe('Obtener lista de Clientes', function () {

    it('Debe retornar un arreglo de >= 0 elementos con los clientes', async function () {
    
       let response = await fetch('http://localhost:8001/api/customers/all');
       let res = await response.json();
       if(res){
        assert.ok(true)
       }else{
        assert.ok(false)
       }
        
    });

  });
});

describe('Test de Categorias', function () {
  describe('Obtener lista de Categorias', function () {

    it('Debe retornar un arreglo de >= 0 elementos con las categorias de productos', async function () {
        let response = await fetch('http://localhost:8001/api/categories/all');
        let res = await response.json();
        if(res){
         assert.ok(true)
        }else{
         assert.ok(false)
        }
        
    });

  });
});


describe('Test de Settings', function () {
  describe('Obtener la configuracion de la tienda', function () {

    it('Debe retornar la configuracion de nuetra tienda', async function () {
    

        let response = await fetch('http://localhost:8001/api/settings/get');
        let res = await response.json();
        if(res){
         assert.ok(true)
        }else{
         assert.ok(false)
        }
        
        
    });

  });
});