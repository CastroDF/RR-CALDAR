module.exports = mongoose =>{
    const Technicians = mongoose.model(
        "Technicians",
        mongoose.Schema(
            {
                "id": Number,
                "first_name": String,
                "last_name": String,
                "email": String,
                "typeIds": [],
                "skillsId": [],
                "hour_rate": String,
                "daily_capacity": Number
            },
        )
    )
    return Technicians
};
