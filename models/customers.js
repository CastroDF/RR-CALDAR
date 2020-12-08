module.exports = mongoose => {
  const Customers = mongoose.model(
    'customers',
    mongoose.Schema(
      {
        id_customer: Number,
        type: String,
        email: String,
        st_address: String,
        country: String,
        city: String,
        num_duns: Number,
        postal_code: Number
      },
      { timestamps: true }
    )
  );
  return Customers;
};
