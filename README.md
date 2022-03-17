# ABAM-Product-Card

Este es un paquete de pruebas de despliegues en NPM

### Abel Amieva

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'abam-product-card';
```

```
    <ProductCard 
        product={ product }
        initialValues={{ // podemos inicializar la tarjeta 
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
```