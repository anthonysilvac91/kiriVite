import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import { routes } from './Utils/routes'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import { ProductProvider } from './Context/ProductContext'
import Footer from './Components/Footer/Footer'
import CategoryPage from './Pages/Categories/CategoryPage'


function App() {
  

  return (
    <>
     <ProductProvider>
        <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.categories} element={<CategoryPage/>} />
            <Route path={routes.contact} element={<Contact/>} />
          </Routes>
        <Footer/>
      </ProductProvider>
     </>
  )
}



export default App
