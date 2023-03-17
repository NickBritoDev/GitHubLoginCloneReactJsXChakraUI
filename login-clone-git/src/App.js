import { Box } from '@chakra-ui/react';
import { Logo } from './components/logo';
import {Login} from './Pages/login'
function App() {
  return (
   <Box w={'full'} overflow={"hidden"} alignContent={'center'} margin={'25% auto'}>
    <Logo/>
    <Login/>
   </Box>
  );
}

export default App;
