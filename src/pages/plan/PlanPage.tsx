import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import api from '../../services/api';
import Container from '../../styles/Container';
import PageHeader from '../../components/PageHeader';
import { Plan } from '../../entities/Plan';
import PlanListagem from '../../components/forms/PlanListagem';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const PlanPage = () => {

    const [loading, setLoading] = useState<boolean>(true);

    const [plans, setPlans] = useState<Plan[]>([]);


    useEffect(() => {
        async function getPlans(): Promise<void> {
            await api.get(`/plans/`)
                .then(response => {
                    setPlans(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getPlans();
    }, []);

    console.log(plans)

    return (
        <>
            {loading ? <h1>Carregando!</h1> : (
                <Container>
                    <PageHeader
                        title="Planos"
                        subTitle=""
                        icon={<LocalMallIcon fontSize="large" />}
                    />

                    <PlanListagem list={plans} />

                   
                </Container>
            )}

        </>


    )
}

export default PlanPage
