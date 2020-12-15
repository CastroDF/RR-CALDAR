module.exports = mongoose => {
    const boilerTypes = mongoose.model(
        "boiler-types",
        mongoose.Schema(
            {
                id: Number,
                skillsId: [],
                description: String,
                stock: Number
            },
            { timestamps: true }
        )
    )
    return boilerTypes;
};