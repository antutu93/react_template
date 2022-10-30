// import { Card } from '../types/Card';
import React from 'react';
import './ProductCard.scss';
import img from './image/image.jpg';

// type Props = {
//   card: Card,
// };

export const ProductCard: React.FC/* <Props> */ = (/* { card } */) => {
/*  const {
    id,
    nam,
    image,
    price,
    fullPrice,
    year,
    capacity,
    color,
  } = card;
 */
  return (
    <body className="page">
      <div className="page__card card">
        <div className="container">
          <img
            src={img}
            alt="card__img"
            className="card__img"
          />
          <h2 className="card__title">
            Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
          </h2>
          <div className="card__price">
            <p className="card__price-discount">
              $799
            </p>
            <s className="card__price-fullPrice">
              $899
            </s>
            <div className="card__price-line"></div>
          </div>
          <div className="card__specification">
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                Screen
              </div>
              <div className="card__specification-value">
                5.8” OLED
              </div>
            </div>
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                Capacity
              </div>
              <div className="card__specification-value">
                64 GB
              </div>
            </div>
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                RAM
              </div>
              <div className="card__specification-value">
                4 GB
              </div>
            </div>
          </div>
          <div className="card__buttons">
            <a
              href="/"
              className="card__buttons-cart"
            >
              Add to cart
            </a>
            <div className="card__buttons-favorite"></div>
          </div>
        </div>
      </div>
    </body>
  );
};
