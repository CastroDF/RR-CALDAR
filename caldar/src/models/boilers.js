module.exports = mongoose => {
  const Boilers = mongoose.model(
    'boilers',
    mongoose.Schema(
      {
        id: Number,
        typeId: Number,
        maintenance_rate: String,
        hour_maintenance_cost: String,
        hour_eventual_cost: String
      },
      { timestamps: true }
    )
  );
  return Boilers;
};
