import React from "react";
import "./Home.css";

import Product from "../Product/Product.js";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container pb-[50px]">
        <img src="./banner.jpg" alt="" className="home-image" />

        <div className="home-row">
          <Product
            id="12321341"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="49538094"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="4903850"
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
            price={199.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="12321341"
            title="Hydrate in Style: Insulated Stainless Steel Water Bottle with Leak-Proof Lid - 24 oz, Keeps Drinks Cold for 24 Hours, Perfect for Gym, Office, and Outdoor Activities"
            price={49.99}
            rating={3}
            image="https://katebenson.com/wp-content/uploads/2018/09/Amazon_Product_Photographer_01.jpg"
          />
          <Product
            id="49538094"
            title="Stylish Laptop Backpack for Business Travel, Water Resistant College School Computer Bag, Fits 15.6 Inch Laptop and Notebook (Black)"
            price={89.95}
            rating={5}
            image="https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="87654321"
            title="Puma Unisex-Adult SmashicCasual Shoe"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DiZce32mL._SY695_.jpg"
          />
          <Product
            id="98765432"
            title="Campus Men's North Plus Running Shoes"
            price={29.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/71p+ffg6+lL._SY695_.jpg"
          />
          <Product
            id="24681357"
            title="Red Tape Sneaker Casual Shoes for Men | Soft Cushion Insole, Slip-Resistance, Dynamic Feet Support & Arch Support"
            price={12.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/614ZnW6FAiL._AC_UL160_SR160,160_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="24681347"
            title="Hisense 139 cm (55 inches) 4K Ultra HD Smart Mini LED QLED TV 55U7K (Black)"
            price={699.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61V5fPX6kEL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
