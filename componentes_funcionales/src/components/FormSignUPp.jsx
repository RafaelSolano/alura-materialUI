import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState, } from "react";

function FormSignUp() {
    const [name, setName] = useState("")
    const [lastName, setLastName] =  useState("")
    const [email, setEmail] = useState('')

    const [prom, setProm] = useState(false)
    const [nov, setNov] = useState(false)

    //errores
    const [errors, setErrors] = useState({
        name:{
            error: false,
            message: "Deben ser solo letras "
        }
    })    

    function validarNombre(nombre){
        if(nombre.length >= 3){
            return { 
                name: { 
                    error: false, 
                    message: '',
                },
            }
        }
        else{
            return { 
                name: { 
                    error: true, 
                    message: 'Deben ser solo letras ',
                },
            }
        }
    }
    return (
    <form onSubmit={(e) =>{
        e.preventDefault()
        console.log({name, lastName, email, prom, nov});

    } }>
        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            autoComplete="name"
            fullWidth
            margin="normal"
            onChange={(event) =>{

                setName(event.target.value)
                
            }}
            value={name}

            error = {errors.name.error}
            helperText={ errors.name.error ? errors.name.message : ""
            }
            onBlur={(e)=>{
                setErrors( 
                    validarNombre(
                        e.target.value
                    )
                )
            }}
        />

        <TextField
        id="inpuApellido"
        label="Apellido"
        variant="outlined"
        autoComplete="family-name"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
        id="Email"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
    <FormGroup>
        <FormControlLabel
        label="Gilad Gray"
        control={<Switch 
            
            checked ={prom}
            onChange={(e) =>
                setProm(e.target.checked)}/>}
        />
        <FormControlLabel
            label ="Novedades"
            control={<Switch 
            checked={nov}
            onChange={(e) =>
                    setNov(e.target.checked)}
                />}
        />
        </FormGroup>
        <Button 
            variant="outlined" 
            size="large" 
            type="submit">
        Enviar
        </Button>
    </form>
);
}
export default FormSignUp;
