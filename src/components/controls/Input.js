import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, type, value, maxLength, error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
