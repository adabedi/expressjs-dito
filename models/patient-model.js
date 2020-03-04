const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema(
  {
    id: mongoose.SchemaTypes.ObjectId,
    name: [
      {
        family: { type: String, required: true },
        given: [{ type: String }]
      }
    ],
    nhsNo: { type: Number },
    birthDate: { type: Date},
    exceptedDidcharge: { type: Date },
    admitted: { type: Date },
    gender: { type: String },
    consultant: { type: String},
    newsFreq: { type: Number},
    height: {type: Number},
    weigth: {type: Number},
    location: {
        bed: {
            type: Number
        },
        ward: {
            type: Number
        }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Patient);
