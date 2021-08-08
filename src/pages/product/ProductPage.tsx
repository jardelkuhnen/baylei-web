import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import api from '../../services/api';
import Container from '../../styles/Container';
import PageHeader from '../../components/PageHeader';
import { Product } from '../../entities/Product';
import ProductListagem from '../../components/forms/ProductListagem';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const ProductPage = () => {
    const classes = useStyles();

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

    console.log(products)

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

                    {/* <Paper className={classes.pageContent}>
                
                <ClientForm />
            </Paper> */}
                </Container>
            )}

        </>


    )
}

export default ProductPage
