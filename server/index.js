import express from "express";
import { initConnection } from "./db/connection.js";
import userRoutes from "./modules/user/user.routes.js";
import trainerRoutes from "./modules/trainer/trainer.routes.js";
import reviewRoutes from "./modules/reviews/review.routes.js";
import "dotenv/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

const port = 5000;

app.use(cors()); //?app.use(cors({ origin: "*" })); allows all requests from anywhere to my server
//Start a connection to DB
initConnection();

// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(express.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(userRoutes);
app.use(trainerRoutes);
app.use(reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
