const { Mongoose } = require("mongoose");

module.exports = Mongoose => {
    const Customers = Mongoose.mode(
        "customers",
        Mongoose.Schema(
            {
            id_customer,
            type,
            email,
            num_phone,
            st_addres,
            num_address,
            num_duns,
            country,
            city,
            postal_code,
            },
            { timestamps: true }
        )
    )
    return Customers
};