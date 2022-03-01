import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  // img:'./coffee-mug.png',
  title: 'Coffee Mug - Card'
};

const App = () => {
  return (
    <>
      <ProductCard 
          product={ product }
          initialValues={{
              count: 4,
              maxCount: 8,
          }}
      >
      {
          ({reset, count, isMaxCountReached, maxCount, increaseBy})=>(

              <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />

              </>

          )
      }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
