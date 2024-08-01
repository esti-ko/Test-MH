
const categories = require("../Models/categories");

exports.get = function () {

    return new Promise((resolve, reject) => {
        categories.find({})
        .then((result:any) => {
            resolve(result)
        })
        .catch((err:any) => {
            reject(err)
        });
    })
}

