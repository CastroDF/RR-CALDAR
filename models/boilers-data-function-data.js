module.exports = mongoose => {
  const Boilersdf = mongoose.model(
    'boilersdf',
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
  return Boilersdf;
};
