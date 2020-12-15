module.exports = mongoose => {
    const appointments = mongoose.model(
        "appointments",
        mongoose.Schema(
            {
                id: Number,
                boilerId: Number,
                buildingId: Number,
                start_timestamp: Date,
                end_timestamp: Date
            },
            { timestamps: true }
        )
    )
    return appointments;
};