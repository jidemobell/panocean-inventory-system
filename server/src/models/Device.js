const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema(
  {
    name: { type: String },
    serialNo: { type: Number },
    type: {
      type: String,
      enum: ["monitor", "printer", "cpu", "laptop", "mouse"]
    },
    category: {
      type: String,
      enum: ["user-device", "active-device"]
    },
    location: { type: String }
  },
  { timestamps: true }
);

const Device = mongoose.model("User", DeviceSchema);
module.exports = Device;
