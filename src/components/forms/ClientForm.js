import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { useForm, Form } from '../useForm';
import * as employeeService from "../../services/employeeService.js";


const genderItems = [
    { id: 'male', title: 'Masculino' },
    { id: 'female', title: 'Feminino' },
    { id: 'other', title: 'Outros' },
]

const initialFValues = {
    id: 0,
    name: '',
    lastname: '',
    age: 0,
    email: '',
    phone: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function ClientForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Nome é obrigatório."
        if ('lastname' in fieldValues)
            temp.lastname = fieldValues.lastname ? "" : "Sobrenome é obrigatório."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email inválido.."
        if ('phone' in fieldValues)
            temp.phone = fieldValues.phone.length > 9 ? "" : "Telefone inválido."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={10}>
                <Grid item xs={8}>
                    <Controls.Input
                        name="name"
                        label="Nome"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        name="lastname"
                        label="Sobrenome"
                        value={values.lastname}
                        onChange={handleInputChange}
                        error={errors.lastname}
                    />
                    
                    <Controls.RadioGroup
                        name="gender"
                        label="Gênero"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    

                </Grid>
                <Grid item xs={6}>
                    
                    <Controls.Input
                        label="Telefone"
                        name="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    {/* <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}


                    <div>
                        <Controls.Button
                            type="submit"
                            text="Salvar" />
                        <Controls.Button
                            text="Limpar"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
