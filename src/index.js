import app from "./app";
import db from "./config/database";

async function main(){
  
await db.authenticate()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) => console.log(error));

await app.listen(4000, () => {
  console.log("Server puesto 4000");
});

}