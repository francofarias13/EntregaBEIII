import express from "express";
import mongoose from "mongoose";
import mocksRouter from "./routes/mocks.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/mocks", mocksRouter);

// Conexión a MongoDB
mongoose.connect("mongodb+srv://franco:1234@francofarias.awogk.mongodb.net/?retryWrites=true&w=majority&appName=FrancoFarias", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado a MongoDB");
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
})
.catch((err) => console.error("❌ Error al conectar a MongoDB:", err));
