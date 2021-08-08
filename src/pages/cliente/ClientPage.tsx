import React, { useEffect, useState } from 'react'
import Container from '../../styles/Container'
import { Paper, makeStyles } from '@material-ui/core';
import ClientForm from '../../components/forms/ClientForm';
import PageHeader from '../../components/PageHeader';
import * as AiIcons from 'react-icons/ai';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import ClientListagem from '../../components/forms/ClientListagem';
import api from '../../services/api';
import { Client } from '../../entities/Client';
import { useLoading } from '../../contexts/LoadingContext';

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