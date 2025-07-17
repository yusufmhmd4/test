const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  type: String,
  houseNo: String,
  location: String,
  state: String,
  street: String,
  city: String,
  zipcode: String
});

const HrDetailSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  emails: [String]
});

const RegistrationSchema = new mongoose.Schema({
  companyName: String,
  companyRegistrationNumber: String,
  addresses: [AddressSchema],
  hrDetails: HrDetailSchema
});

module.exports = mongoose.model('Registration', RegistrationSchema);
