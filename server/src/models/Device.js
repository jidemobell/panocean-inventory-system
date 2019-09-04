const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema(
  {
    name: { type: String },
    serialNo: { type: Number },
    type: {
      type: String,
      enum: ["monitor", "printer", "cpu", "laptop", "mouse", "router", "switch", "phone", "dockingStation"]
    },
    category: {
      type: String,
      enum: ["user-device", "active-device"]
    },
    location: { type: String }
  },
  { timestamps: true }
);

const Device = mongoose.model("Device", DeviceSchema);
module.exports = Device;
