# AA-Product-Card

Este es un paquete de pruebas de despliegues en NPM

### Amieva Abel

## Ejemplo

```
import {} from '';
```

```
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
```