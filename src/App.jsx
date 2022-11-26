import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';

const App = () => {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='property-details' element={ <PropertyDetails /> } >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path="*"
                element={ <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                          </main>
                        }
          />
        </Routes>
      </Container>
    </HouseProvider>
  )
}

export default App