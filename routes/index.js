var express = require("express");
var router = express.Router();
const { Category } = require("../models/Category");
const { Product } = require("../models/Product");

// {
//   thumb: "",
//   name: "",
//   price: ""
// }
/* GET home page. */
router.get("/", async function(req, res, next) {
  let categories = await Category.find({});
  for (let i = 0; i < categories.length; i++) {
    categories[i].products = await Product.find({
      id_category: categories[i].id
    });
  }

  let arr = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫",
      id_category: 1
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/550x550/ts/product/b8/37/c7/6632cb46022759908de0945030fd849c.jpg",
      name: "Laptop Dell Gaming G7 7588 70183902",
      price: "23.809.000₫",
      id_category: 4
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/550x550/ts/product/d4/db/de/93f48f8bd78621903011961ac870d325.jpg",
      name: "Asus F570ZD FY415T",
      price: "15.375.000₫",
      id_category: 4
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/a8/c4/27/305f4fd0fcf6f69b67b90c9a3c39bd71.jpg",
      name: "Laptop Gaming Asus ROG Strix SCAR GL703GE-EE047T",
      price: "27.200.000₫",
      id_category: 4
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/d2/1e/7f/51bc237903fadb8799dccd3eb5cfa3e4.jpg",
      name: "Laptop Asus ROG Zephyrus S GX502GW-AZ129T",
      price: "56.809.000₫",
      id_category: 4
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/3d/f0/15/34492ff47b908e11e51cde9453834847.jpg",
      name: "Smart Tivi TCL 55 inch 4K UHD L55P65-UF",
      price: "8.290.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg",
      name: "Smart Tivi LG 43 inch 4K UHD 43UK6340PTF",
      price: "8.490.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/f1/21/0b/ad5816d5976392d70a4994f24bb8fecb.jpg",
      name: "Smart Tivi LG 55 inch 4K UHD 55UM7400PTA",
      price: "12.590.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/c2/73/18/22879b35f72c0eceaddbffa464c7aa54.jpg",
      name: "Smart Tivi LG 55 inch 4K UHD 55UM7300PTA",
      price: "11.570.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/c2/73/18/22879b35f72c0eceaddbffa464c7aa54.jpg",
      name: "Smart Tivi LG 55 inch 4K UHD 55UM7300PTA",
      price: "11.570.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/c2/73/18/22879b35f72c0eceaddbffa464c7aa54.jpg",
      name: "Smart Tivi LG 55 inch 4K UHD 55UM7300PTA",
      price: "11.570.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/c2/73/18/22879b35f72c0eceaddbffa464c7aa54.jpg",
      name: "Smart Tivi LG 55 inch 4K UHD 55UM7300PTA",
      price: "11.570.000₫",
      id_category: 2
    },

    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/1c/02/07/6b420ef612017ce6d8699165243ea190.jpg",
      name: "Tai Nghe Bluetooth Apple AirPods 2 True Wireless",
      price: "3.269.000₫",
      id_category: 3
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/a1/bf/9c/11ceb3f82e7f17a1f05ba47688cbd086.jpg",
      name: "Tai Nghe Bluetooth I7s Bản Nâng Cấp",
      price: "64.900₫",
      id_category: 3
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/ea/07/75/459f8b9acaff19fac7df9c9e8a1186e1.jpg",
      name:
        "Pin Sạc Dự Phòng Xiaomi Gen 2S Version 2018 10000 mAh 2 Cổng USB Hỗ Trợ QC 3.0",
      price: "309.000",
      id_category: 3
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
      name: "Vòng đeo tay thông minh Xiaomi Mi Band 4",
      price: "589.000₫",
      id_category: 3
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/00/47/df/b02b462394bc3c59e5876ec0d9cb6ae8.jpg",
      name: "Máy Ảnh Canon 750D + Lens 18-55 IS STM (Lê Bảo Minh)",
      price: "11.490.000₫",
      id_category: 5
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/media/catalog/product/1/_/1.u2769.d20170622.t164957.150266.jpg",
      name: "Máy ảnh Nikon D5600 KIT AF-P 18-55 VR",
      price: "12.850.000₫",
      id_category: 5
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/40/d9/4a/ff161cb25b98575ddcdbc5d83f57fd07.jpg",
      name: "Máy Ảnh Canon 6D Body (Lê Bảo Minh)",
      price: "22.990.000₫",
      id_category: 5
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x200/ts/product/43/87/8e/27ec4fd889ed41625b8d08ea4dca5661.jpg",
      name: "Máy Ảnh Canon 77D + Lens 18-55mm IS STM",
      price: "17.990.000₫",
      id_category: 5
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x296/ts/product/90/37/57/4e47b323aeea85bc3f87f7d64374273e.jpg",
      name: "Đồng Hồ Casio Nam Dây Nhựa G-Shock DW-5600BB-1DR",
      price: "2.876.000₫",
      id_category: 6
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x296/ts/product/11/76/02/f9e86783dfa68b261e072fa4050c20e1.jpeg",
      name: "Đồng Hồ Nam Dây Da Timex - Đen",
      price: "1.111.000₫",
      id_category: 6
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x296/ts/product/3d/37/eb/254c918bf7f04e892dfef504f687d5bb.jpg",
      name: "Đồng Hồ Nữ Timex Crystal Bloom 38mm - TW2R66400",
      price: "1.986.000₫",
      id_category: 6
    },
    {
      thumb:
        "https://salt.tikicdn.com/cache/200x296/media/catalog/product/t/w/tw2p91300.u4064.d20161221.t171405.897906.jpg",
      name: "Đồng Hồ Unisex Dây Da Timex Weekender Fairfield TW2P91300",
      price: "2.679.000₫",
      id_category: 6
    }
  ];

  const data = categories;
  res.render("index", { title: "Express", data });
});

router.get("/product/:id", function(req, res, next) {
  res.render("pages/product-detail");
});

router.get("/cart", function(req, res, next) {
  res.render("pages/cart");
});

router.get("/search", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/search", { products });
});

router.get("/order", function(req, res, next) {
  res.render("pages/order");
});

router.get("/category/:id", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/category", { products });
});

router.get("/manufacturer/:id", function(req, res, next) {
  const products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];

  res.render("pages/manufacturer", { products });
});

module.exports = router;
