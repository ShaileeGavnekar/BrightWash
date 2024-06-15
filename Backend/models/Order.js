const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  shirt: { type: Number, required: true },
  jeans: { type: Number, required: true },
  sheets: { type: Number, required: true },
  shirtCost: { type: Number, default: 20.0 },
  jeansCost: { type: Number, default: 50.0 },
  sheetsCost: { type: Number, default: 30.0 },
  totalCost: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },}, { timestamps: true }
);


OrderSchema.pre('save', function (next) {
  this.totalCost = (
    this.shirt * this.shirtCost +
    this.jeans * this.jeansCost +
    this.sheets * this.sheetsCost
  ).toFixed(2);
  next();
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
