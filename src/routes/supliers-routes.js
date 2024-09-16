import { Router } from 'express'
import { database } from '../database/mysql.js'

const router = Router()

router.get('/supliers', async (_, response) => {
  const [supliers] = await database.query(`
    SELECT S.*, COUNT(P.id) products_count FROM supliers S
    LEFT JOIN products P ON P.suplier_id = S.id
    GROUP BY S.id
    `)
  response.send(supliers)
})

router.get('/supliers/:suplierId', async (request, response) => {

    const [supliers] = await database.query(`SELECT * FROM supliers WHERE id = ${request.params.suplierId};`)
    response.send(supliers)
  })

router.get('/supliers/:suplierId/products', async (request, response) => {
    const [supliers] = await database.query(`
    SELECT S.*, COUNT(P.id) products_count FROM supliers S
    LEFT JOIN products P ON P.suplier_id = S.id
    WHERE S.id = ${request.params.suplierId};`)
    response.send(supliers)
})


export { router as supliersRoutes }
