import {Router} from 'express'
import {CreateProduct,DeleteProduct,GetProduct,GetProducts,UpdateProduct} from '../controllers/PA_people.Controllers'

const router = Router();

router.get("/", GetProducts  )
router.post("/", CreateProduct  )
router.get("/:productId", GetProduct);
router.put("/:productId", UpdateProduct);
router.delete("/:productId", DeleteProduct);

export default router;