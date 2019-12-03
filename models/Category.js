const mongoose = require("mongoose");

const Category = mongoose.model("Category", {
  name: String,
  id: Number
});

module.exports = {
    Category
}
