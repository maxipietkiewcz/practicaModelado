import mongoose from "mongoose";



// conect to database
export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conected to data base');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
  }
};


