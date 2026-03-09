const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes"); 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", weatherRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
});