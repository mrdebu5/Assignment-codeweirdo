const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://devang:devang123@cluster0.9s5hq.mongodb.net/?retryWrites=true&w=majority');
}

main().then(()=> {
    console.log("connected to database");
});