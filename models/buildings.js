module.exports = mongoose => {
  const Buildings = mongoose.model(
    'buildings',
    mongoose.Schema(
      {
        id: Number,
        address: String,
        fullName: String,
        boilersId: Array,
        phone: String
      },
      { timestamps: true }
    )
  );
  return Buildings;
};
