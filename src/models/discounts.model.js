import mongoose from "mongoose";

// Schema de discounts

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mealsDiscounts: {
    type: Number,
  },
  beveragesDiscounts: {
    type: Number,
  },
  twoOnePromos: {
    type: String,
  },
  threeTwoPromo: {
    type: String,
  },
  customDiscounts: {
    type: String,
    required: true,
  },
  initialDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  //   description: {
  //     type: String,
  //     trim: true,
  //   },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },
});

const Discounts = mongoose.model("discounts", discountSchema);

export { Discounts };
