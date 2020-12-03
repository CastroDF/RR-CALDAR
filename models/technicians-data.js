module.exports = mongoose => {
  const Technicians = mongoose.model(
    'technicians',
    mongoose.Schema(
      {
        id: Number,
        first_name: String,
        last_name: String,
        email: String,
        typeIds: Array,
        skillsId: Array,
        hour_rate: String,
        daily_capacity: Number
      },
      { timestamps: true }
    )
  );
  return Technicians;
};
