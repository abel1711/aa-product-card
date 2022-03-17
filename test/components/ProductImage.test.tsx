import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';



describe('Pruebas al ProductImage', () => {

    test('debe de mostrar correctamente la img enviada por las props', () => {
        
        const wrapper = renderer.create(
            <ProductImage img='image-test'/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar la img del product', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product2}>
                {
                    ()=>(
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})
