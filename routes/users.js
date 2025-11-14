import { Router } from "express"
var router = Router()

/* GET users listing. */
router.get("/", function (_req, res, _next) {
  res.send("respond with a resource")
})

export default router
