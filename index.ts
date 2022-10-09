import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes.ts'

const app = new Application();
const PORT = 8000
console.log(`Server runs on port: ${PORT}`)

app.use(router.routes())

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

await app.listen({ port: PORT });