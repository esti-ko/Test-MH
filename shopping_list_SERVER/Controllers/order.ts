const orders = require("../Models/order");

exports.create = function (obj:any) {
    return new Promise((resolve, reject) => {
        let order = new orders({
            name: obj.name,
            category: obj.category,
            quantity: obj.quantity
        });

        order.save()
            .then(() => {
                resolve("created");
            })
            .catch((err:any) => {
                reject(err);
        });
    });
}
