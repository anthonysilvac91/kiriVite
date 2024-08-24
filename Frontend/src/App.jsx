import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import { routes } from './Utils/routes'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Contact from './Pages/Contact/Contact'
import { ProductProvider } from './Context/ProductContext'


function App() {
  

  return (
    <>
     <ProductProvider>
        <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.categories} element={<Categories/>} />
            <Route path={routes.contact} element={<Contact/>} />
          </Routes>
      </ProductProvider>
     </>
  )
}



export default App
