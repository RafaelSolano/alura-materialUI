import './App.css';
import FormSignUp from './components/FormSignUPp';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function App() {
  return (
    <Container component="section" maxWidth ="sm">
    <Typography 
      marginTop={5}
      variant='h3'
      align='center'
      fontWeight={400}
      fontSize={30}
    >Formulario Registro</Typography >
    <FormSignUp/>
    </Container>
  );
}
export default App;
