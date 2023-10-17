import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct';
import { useState } from 'react';
const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    imageUrl: faker.image.urlPicsumPhotos(),
  })); 
  faker.seed(100);
  const [products] = useState(productArray);
  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  )
}

export default Home