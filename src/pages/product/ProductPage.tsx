import { useEffect, useState } from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import api from '../../services/api';
import Container from '../../styles/Container';
import PageHeader from '../../components/PageHeader';
import { Product } from '../../entities/Product';
import ProductListagem from '../../components/forms/product/ProductListagem';


const ProductPage = () => {

    const [loading, setLoading] = useState<boolean>(true);

    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        async function getProducts(): Promise<void> {
            await api.get(`/products/`)
                .then(response => {
                    setProducts(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getProducts();
    }, []);


    return (
        <>
            {loading ? <h1>Carregando!</h1> : (
                <Container>
                    <PageHeader
                        title="Produtos"
                        subTitle=""
                        icon={<LocalMallIcon fontSize="large" />}
                    />

                    <ProductListagem list={products} />
                </Container>
            )}

        </>


    )
}

export default ProductPage
