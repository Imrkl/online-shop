import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import "swiper/css";

import {
  getProductById
} from "../services/productAPI";

function ProductDetails() {

  const { id } =
    useParams();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {
    getProductById(id)
      .then(setProduct);
  }, [id]);

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div className="details">

      <Link to="/" className="back-btn">
        ← Вернуться в магазин
      </Link>

      <h1>
        {product.title}
      </h1>

      <Swiper>
        {product.images.map(
          (img, index) => (
            <SwiperSlide
              key={index}
            >
              <img
                className="details-image"
                src={img}
                alt=""
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <p>
        {product.description}
      </p>

      <h2>
        ${product.price}
      </h2>

    </div>
  );
}

export default ProductDetails;