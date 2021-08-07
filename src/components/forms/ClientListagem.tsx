import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core";
import { Client } from "../../entities/Client";
import { CollectionsBookmarkRounded } from '@material-ui/icons';
import { Button } from '../Button';

interface Props {
    list: Client[];
}

const ClientListagem: React.FC<Props> = ({ list }) => {
    let userIdFocus;
    return (
        <>
            <div><Button /></div>

            <div style={{ height: 400, width: '100%', fontSize: '15px' }}>
                <DataGrid
                    rows={list}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                    autoHeight={true}
                    onRowClick={(e) => { console.log(e) }}
                    onSelectionModelChange={(e) => { userIdFocus = e }}
                />
            </div>
        </>




    );

}

const columns = [
    // { field: 'id', headerName: 'ID', width: 250 },
    {
        field: 'fullName',
        headerName: 'Nome Completo',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
        valueGetter: (params: any) =>
            `${params.getValue(params.id, 'name') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
    },
    {
        field: 'phone',
        headerName: 'Telefone',
        type: 'number',
        width: 200,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
        editable: false,
    },
    // {
    //     field: 'actions',
    //     headerName: 'Ações',
    //     width: 100,
    //     sortable: false,
    //     editable: false,

    // },


];




export default ClientListagem;