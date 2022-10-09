import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUsers, createUser, getUser, deleteUser, updateUser } from "./controllers/userController.ts"


const router = new Router() 

router.get('/api/v1/users', getUsers)
      .post('/api/v1/users', createUser)
      .get('/api/v1/users/:id', getUser)
      .delete('/api/v1/users/:id', deleteUser)
      .put('/api/v1/users/:id', updateUser)

export default router 