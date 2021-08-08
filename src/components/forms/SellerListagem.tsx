import { DataGrid } from '@material-ui/data-grid';
import ButtonNovo from '../../styles/ButtonNovo';
import styled from "styled-components";
import ButtonEdit from '../../styles/ButtonEdit';
import ButtonDelete from '../../styles/ButtonDelete';

import { useHistory } from "react-router-dom";
import { Seller } from '../../entities/Seller';

interface Props {
    list: Seller[];
}

const Header = styled.div`
    
    height: 60px;
    width: 100%;

    padding-right: 10px;

    display: flex;
    justify-content: flex-end;
`;

const SellerListagem: React.FC<Props> = ({ list }) => {
    
    let history = useHistory()

    function goForm(): any {
    }
    let userIdFocus;
    return (
        <>

            <Header>
                <ButtonNovo onClick={goForm()}>Novo</ButtonNovo>
                <ButtonEdit>Editar</ButtonEdit>
                <ButtonDelete>Excluir</ButtonDelete>
            </Header>


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
        headerName: 'Nome',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: 400,
        valueGetter: (params: any) =>
            `${params.getValue(params.id, 'name') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
    },
    {
        field: 'phone',
        headerName: 'Telefone',
        width: 200,
        sortable: true,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
        sortable: true,
        editable: false,
    },


];




export default SellerListagem;