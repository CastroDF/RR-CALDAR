module.exports = mongoose => {
  const Customers = mongoose.model(
    'customers',
    mongoose.Schema(
      {
        id_customer: Number,
        type: Array,
        email: Array,
        num_phone: Number,
        st_address: Array,
        num_address: Number,
        num_duns: Number,
        country: Array,
        city: Array,
        postal_code: Number
      },
      { timestamps: true }
    )
  );
  return Customers;
};
