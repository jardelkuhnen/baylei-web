import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import ClientForm from '../../components/forms/ClientForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const ClienteForm = () => {

    /**
     * tenho que ver isso 
     */


    const classes = useStyles();

    return (
        <Paper className={classes.pageContent}>
                <ClientForm />
        </Paper>
    )
}

export default ClienteForm
