import React, { useEffect, useState } from 'react'
import Container from '../../styles/Container'
import { makeStyles } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import ClientListagem from '../../components/forms/ClientListagem';
import api from '../../services/api';
import { Client } from '../../entities/Client';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const ClientPage: React.FC = () => {

    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>(true);

    const [clients, setClients] = useState<Client[]>([]);


    useEffect(() => {
        async function getClients(): Promise<void> {
            await api.get(`/clients/`)
                .then(response => {
                    setClients(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getClients();
    }, []);


    return (
        <>
            {loading ? <h1>Carregando!</h1> : (
                <Container>
                    <PageHeader
                        title="Clientes"
                        subTitle=""
                        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                    />

                    <ClientListagem list={clients} />

                    {/* <Paper className={classes.pageContent}>
                
                <ClientForm />
            </Paper> */}
                </Container>
            )}

        </>


    )
}

export default ClientPage;