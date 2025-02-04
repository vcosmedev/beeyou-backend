import dbConnect from "./src/libs/db.js";
import { server } from "./src/server.js";



dbConnect() 
    .then(() => {
        console.log("Database connected :D");

        server.listen(process.env.PORT || 8080, () => {
            console.log("Server listening on port 8080");
        });

    })
    .catch((error) => console.error("Error: ", error));


