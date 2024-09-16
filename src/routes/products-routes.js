import { Router } from 'express'
import { database } from '../database/mysql.js'

const router = Router()

router.get('/products', async (_, response) => {
  const [products] = await database.query(`
  SELECT P.*, S.name supplier_name FROM products P
  LEFT JOIN supliers S ON S.id = P.suplier_id
  GROUP BY P.id;`)
  response.send(products)
})

router.get('/products/:productPrice', async (request, response) => {
  const [products] = await database.query(`
    SELECT P.*, S.name suplier_name FROM products P
    LEFT JOIN supliers S ON S.id = P.suplier_id
    WHERE P.price > ${request.params.productPrice};`)
  console.log(products)
  response.send(products)
})

export { router as productsRoutes }
