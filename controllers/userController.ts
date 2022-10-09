import UserService from '../services/UserServices.ts' 


const userService = new UserService() 

//@desc Get all users
//@route GET /api/v1/users  
export const getUsers = async ({response}: {response: any}) => {
    response.body = await userService.getUsers()
} 

//@desc Add a user
//@route POST /api/v1/users
export const createUser = async ({ request, response }: {request: any, response: any}) => {
    if (!request.hasBody) {
        response.status = 400
        response.body = { msg: "Invalid data" }
        return 
    }

    const { value: {name, age} } = await request.body() 
  // { name, age } = await request.body() 
    const userId = await userService.createUser({name, age}) 
    

    response.body = {msg: 'user created', userId}
} 

//@desc Get a user
//@route GET /api/v1/users/:id
export const getUser = async ({params, response}: {params: {id: string}, response: any}) => {
response.body = await userService.getUser(params.id)
} 

//@desc Delete a user
//@route DELETE /api/v1/users/:id
export const deleteUser = async ({params, response}: { params: { id: string }, response: any }) => {
    await userService.deleteUser(params.id)
}

//@desc Update a user
//@route UPDATE /api/v1/users/:id
export const updateUser = async ({params, request, response}: {params: {id: string}, request: any, response: any}) => {
    const body = await request.body() 
    const updateData: {name?: string, age?: number } = body.value 

    const res = await userService.updateUser(params.id, updateData) 
    response.body = {msg: "user updated", res}
}