import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { Product } from '../../../entities/Product';
import ButtonEditTable from '../../../styles/ButtonEditTable';
import { useHistory } from "react-router-dom";

interface Props {
    list: Product[];
}

const ProductDataGrid: React.FC<Props> = ({ list }) => {
    let history = useHistory()
    const [searchText, setSearchText] = useState('');
    const [selectedRows, setSelectedRows] = useState([]); 

    const handleEditProduct = (id: string) => {
        history.push("/edit-product/" + id); 
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'price', headerName: 'Price', type: 'number', width: 100 },
        { field: 'quantity', headerName: 'Quantity', type: 'number', width: 150 },
        {
          field: 'edit',
          headerName: '',
          width: 160,
        renderCell: (params) => (
            <ButtonEditTable onClick={() => rowIdSelected && handleEditProduct(rowIdSelected)}>Editar</ButtonEditTable>
        ),
        },
      ];
      

    // Filter rows based on the search input
    const filteredRows = list.filter(row => 
        row.name.toLowerCase().includes(searchText.toLowerCase()) || 
        row.description.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleRowClick = (params: { row: any; }) => {
        rowIdSelected = params.row.id;
        if (rowIdSelected) {
            handleEditProduct(rowIdSelected);
        }
    };
    
    const handleSelectionModelChange = (newSelection: any) => {
        setSelectedRows(newSelection);
        console.log('Selected rows:', newSelection);
    };


    let rowIdSelected: string | null = null;
    return (
        <Container style={{ height: 400, width: '100%', marginLeft: '0px'}}>
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <DataGrid
            rows={filteredRows}
            columns={columns}
            paginationModel={{ pageSize: 5, page: 0 }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={handleSelectionModelChange} // Handle selection model changes
            onRowClick={handleRowClick} // Handle row clicks
        />
        </Container>
    );
    };

export default ProductDataGrid;
