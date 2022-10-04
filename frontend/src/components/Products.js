import React from 'react';
import Logo from './Logo';
import Product from './Product';

class Products extends React.Component {

  products = [
        {
          "id": 1,
          "brand": "ISIE OF SUMMER",
          "name": "Ivy Midi Dress Plus Size I Icy Blue Gingham",
          "price": "$111.00",
          "tags": "Blue ",
          "image": "/images/dress-main.png",
          "status": "available"
        },
        {
          "id": 2,
          "brand": "AVILA",
          "name": "Lola Crew Jumper Plus Size I Purple",
          "image": "/images/top-main.png",
          "tags": "Purple",
          "price": "$129.00",
          "status": "available"
        },
        {
          "id": 3,
          "brand": "EMBODY WOMEN",
          "name": "Fever Bootcut Jean Plus Size | Indigo",
          "image": "/images/bottom-main.png",
          "tags": "Navy",
          "price": "$259.00",
          "status": "available"
        },
        {
          "id": 4,
          "brand": "17 SUNDAYS",
          "name": "Paradisco Spray Jacket Plus Size I Black ",
          "image": "/images/outwear-main.png",
          "tags": "black",
          "price": "$60.00",
          "status": "available"
        },
        {
          "id": 5,
          "brand": "ACTIVE TRUTH",
          "name": "Training Pocket 7/8 Length Tight Plus Size I Black Leopard",
          "image": "/images/activewear-main.png",
          "tags": "Black",
          "price": "$129.99",
          "status": "available"
        }
      ]

    render() {
        return (
            <div>
            <Logo />
            <div className='products'>
                <div className='columns is-multiline is-desktop'>
                    {
                      this.products.map(p => {
                        return (
                          <div className='column is-3' key={p.id}>
                             <Product product={p} />
                          </div>
                        )
                      })
                    }
                </div>
                   
         </div>

        </div>
        );
    }
} 

export default Products;