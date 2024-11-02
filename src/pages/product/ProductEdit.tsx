import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { NumericFormat } from 'react-number-format';
import api from '../../services/api';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import { useHistory, useParams } from "react-router-dom";
import { Product } from "../../entities/Product";

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


const EditProductForm: React.FC = () => {

    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(true);
    
    let history = useHistory()
    const handleListProducts = () => {
        history.push("/product"); 
    };

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        quantity: 0
    });

    const { id } = useParams<{ id: string }>(); // Get product ID from URL
    useEffect(() => {
        // Fetch product data from an API or data source using the ID
        // Example fetch logic:
        async function fetchProduct() {
        try {

            api.get(`/products/${id}`).then((r: { data: Product; status: number; }) => {
                if (r.status === 200) { 
                    setFormData({
                        name: r.data.name,
                        description: r.data.description,
                        price: r.data.price,
                        quantity: 0,
                    });
                }
        
            })
            // // Replace with actual API call
            // const response = await fetch(`/api/products/${id}`);
            // const product = await response.json();
            // setFormData({
            // name: product.name,
            // description: product.description,
            // price: product.price,
            // quantity: product.quantity
            // });
        } catch (error) {
            console.error('Error fetching product:', error);
        }
        }

        fetchProduct();
        setLoading(false)
    }, [id]);


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
      

    await api.put('/products', formData).then((r: { data: any; status: number; }) => {
      if (r.status === 200) { 
        handleListProducts();
      }

    }).catch((error: Error) => {
      alert(error.message);
    });


  };

  

  
  
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
          Save Changes
        </Button>
      </form>
    </Container>

  </>
    
  );}
    
export default EditProductForm;