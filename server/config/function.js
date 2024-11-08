/* This all of are helper function */

const userModel = require("../models/users");

exports.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

exports.validateEmail = function (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
};

exports.emailCheckInDatabase = async function (email) {
  let user = await userModel.findOne({ email: email });
  if (user) {
    return true;  // Email exists in the database
  } else {
    return false; // Email does not exist in the database
  }
};

exports.phoneNumberCheckInDatabase = async function (phoneNumber) {
  let user = await userModel.findOne({ phoneNumber: phoneNumber });
  if (user) {
    return true;  // Phone number exists in the database
  } else {
    return false; // Phone number does not exist in the database
  }
};

