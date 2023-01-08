const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

async function dbConnect() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('DB connect successful');
  } catch (error) {
    console.log(error);
  }
}
mongoose.set('strictQuery', true);
dbConnect();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
