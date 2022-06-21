const userSchema = require('./schema/userSchema');

module.exports.addUser = async (data) => {

    return new Promise(async (resolve, reject) => {
        await userSchema
            .insertMany(data)
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

module.exports.getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        await userSchema
            .find()
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

module.exports.singleUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        await userSchema
            .findById(id)
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

module.exports.updateUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        await userSchema
            .findByIdAndUpdate(data._id, {
                fname: data.fname,
                lname: data.lname,
                city: data.city,
                state: data.state,
                country: data.country
            })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

module.exports.deleteUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        await userSchema
            .findByIdAndDelete(id)
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}