

class CarritoService
{
   static async add(productIds, carritoId)
   {
     const { products } = productIds;

     for (const productId of products)
     {
          const product = await ProductService.getOne(productId);

          if (!product)
          {
              throw Error('ERROR');
          }
     }

     const carritoDao = new CarritoDao();
     await carritoDao.add(products, carritoId);

     console.log('Agregar productos');
   }
}

const addProductsCarrito = async(req, res, next) =>
{
    const users = await CarritoService.add(req.body, req.params.id);

    res.render('users/form-html', { users });
};
