const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('PROCESS.env.DATABASEPATH');
}

main().then(()=> {
    console.log("connected to database");
});
