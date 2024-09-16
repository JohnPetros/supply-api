import express from 'express'
import cors from 'cors'
import { productsRoutes } from './routes/products-routes.js'
import { supliersRoutes } from './routes/supliers-routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(supliersRoutes)
app.use(productsRoutes)

const port = parseInt(process.env.PORT) || process.argv[3] || 8080

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
