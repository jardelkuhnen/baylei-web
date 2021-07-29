import React from 'react'
import Container from '../styles/Container'
import { Paper,makeStyles } from '@material-ui/core';
import ClientForm from '../components/forms/ClientForm';


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
            <Paper className={classes.pageContent}>
                <ClientForm />
            </Paper>
        </Container>
    )
}

