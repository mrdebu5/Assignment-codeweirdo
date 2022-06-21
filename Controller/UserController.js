const fakerObj = require('@faker-js/faker');
const userModel = require('../model/userModel');
const faker = fakerObj.faker;


//  to get all users
module.exports.getUsers = async (req, res) => {
    const data = await userModel.getUsers();
    return data;
}

//  for update user data
module.exports.updateUser = async (req, res) => {
    const data = req.body;

    if (!data) {
        res.status(400).send('some data is missing');
    } else
        if (
            typeof (data.fname) !== "string" ||
            typeof (data.lname) !== "string" ||
            typeof (data.city) !== "string" ||
            typeof (data.state) !== "string" ||
            typeof (data.country) !== "string"
        ) {
            res.status(400).send('Please enter proper data!');
        } else {
            await userModel.updateUser(data);
            res.redirect('/');
        }
}

// get single user data
module.exports.singleUser = async (id) => {
    const data = await userModel.singleUser(id);
    return data;
}


// To add 5000 fack data
module.exports.addUser = async (req, res) => {
    const USERS = [];

    createRandomUser = () => {
        const fullname = faker.name.findName().split(" ");
        const fname = fullname[0];
        const lname = fullname[1];
        const email = faker.internet.email(); // Kassandra.Haley@ericxsh.biz
        const state = faker.address.state();
        const password = "abc";
        const city = faker.address.city();
        const country = faker.address.country();

        return {
            fname,
            lname,
            email,
            state,
            password,
            city,
            country
        };
    }

    await Array.from({ length: 5000 }).forEach(() => {
        USERS.push(createRandomUser());
    });
    const dataToadd = await userModel.addUser(USERS);
    if (dataToadd) {
        res.status(200).send("Data Added!");
    }
}

module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    await userModel.deleteUser(id);
    res.redirect('/');
}