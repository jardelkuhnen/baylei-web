import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import api from '../../services/api';
import Container from '../../styles/Container';
import PageHeader from '../../components/PageHeader';
import SellerListagem from '../../components/forms/SellerListagem';
import { Seller } from '../../entities/Seller';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const SellerPage = () => {
    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>(true);

    const [sellers, setSellers] = useState<Seller[]>([]);


    useEffect(() => {
        async function getSellers(): Promise<void> {
            await api.get(`/sellers/`)
                .then(response => {
                    setSellers(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getSellers();
    }, []);


    return (
        <>
            {loading ? <h1>Carregando!</h1> : (
                <Container>
                    <PageHeader
                        title="Vendedores"
                        subTitle=""
                        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                    />

                    <SellerListagem list={sellers} />
                </Container>
            )}

        </>


    )
}

export default SellerPage
