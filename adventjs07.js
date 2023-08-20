 function contains(store, product) {
    // Returns a boolean indicating whether the product is avalaible in the store(object)
    for (const shelf in store) {
        if (store.hasOwnProperty(shelf)) {
          if (typeof store[shelf] === 'object') {
            const found = contains(store[shelf], product);
            if (found) {
              return true;
            }
          } else if (store[shelf] === product) {
            return true; // Devolver la shelf donde se encontró el producto
          }
        }
      }
      return false; 
  }

  const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' 
      }
    }
  }
    console.log(contains(almacen, 'cola')); 
