import { DataGrid } from '@material-ui/data-grid';
import { Product } from "../../../entities/Product";
import ButtonNovo from '../../../styles/ButtonNovo';
import styled from "styled-components";
import ButtonEdit from '../../../styles/ButtonEdit';
import ButtonDelete from '../../../styles/ButtonDelete';

import { useHistory } from "react-router-dom";

interface Props {
    list: Product[];
}


const Header = styled.div`
    
    height: 60px;
    width: 100%;

    padding-right: 10px;

    display: flex;
    justify-content: flex-end;
`;

const ProductListagem: React.FC<Props> = ({ list }) => {
    let history = useHistory()
    const handleNewProduct = () => {
        history.push("/new-product"); 
    };

    const handleEditProduct = (id: string) => {
        history.push("/edit-product/" + id); 
    }


    let userIdFocus: string | null = null;
    return (
        <>

            <Header>
                <ButtonNovo onClick={handleNewProduct}>Novo</ButtonNovo>
                <ButtonEdit onClick={() => userIdFocus && handleEditProduct(userIdFocus)}>Editar</ButtonEdit>
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
                    onSelectionModelChange={(e) => { userIdFocus = e[0] ? e[0].toString() : null }}
                />
            </div>

        </>




    );

}

const columns = [
    // { field: 'id', headerName: 'ID', width: 250 },
    {
        field: 'name',
        headerName: 'Nome',
        width: 200,
        sortable: true,
        editable: false,
    },
    {
        field: 'description',
        headerName: 'Descrição',
        width: 200,
        sortable: true,
        editable: false,
    },
    {
        field: 'price',
        headerName: 'Preço',
        width: 200,
        sortable: true,
        editable: false,
    }
];




export default ProductListagem;