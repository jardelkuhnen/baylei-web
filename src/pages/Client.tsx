import React from 'react'
import Container from '../styles/Container'
import { Paper,makeStyles } from '@material-ui/core';
import ClientForm from '../components/forms/ClientForm';
import PageHeader from '../components/PageHeader';
import * as AiIcons from 'react-icons/ai';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export function Client() {

    const classes = useStyles();

    return (
        <Container>
            <PageHeader
                title="Novo Cliente"
                subTitle="Insira as informações abaixo."
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper className={classes.pageContent}>
                <ClientForm />
            </Paper>
        </Container>
    )
}

