import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { NumericFormat } from 'react-number-format';
import api from '../../services/api';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  form: {
      padding: theme.spacing(3),
      fontSize: '15px',
      fontFamily: 'Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  },
}))


const CreateProductForm: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);
  
  let history = useHistory()
  const handleNewProduct = () => {
      history.push("/product"); 
  };

  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });



  // events
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      

    await api.post('/products', formData).then((r: { data: any; status: number; }) => {
      if (r.status === 201) { 
        handleNewProduct();
      }

    }).catch((error: Error) => {
      alert(error.message);
    });


  };

  useEffect(() => {setLoading(false)} );

  
  
  return (


    
    <>

<Container className={classes.pageContent}>
      <Typography variant="h4" align="left"gutterBottom>
        Create New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <NumericFormat
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          value={formData.price}
          customInput={TextField}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          onValueChange={(values: any) => {
            const { value } = values; // Numeric value without formatting
            setFormData({
              ...formData,
              price: value
            });
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
        >
          Create
        </Button>
      </form>
    </Container>

  </>
    
  );}
    
export default CreateProductForm;