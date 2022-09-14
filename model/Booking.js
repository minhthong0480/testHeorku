const mongoose = require("mongoose");
const { Schema } = mongoose;
var { ObjectId } = require("mongodb").ObjectId;

const bookingSchema = new Schema(
  {
    pets: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    note: {
      type: String,
      max: 1000,
    },

    fromDate: {
      type: String,
    },
    toDate: {
      type: String,
    },

    isApproved: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      default: "Processing",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
