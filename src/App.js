import React from 'react';
import GetyItem from './component/GetyItem';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './component/AboutIconLink'
import GetyForm from './component/GetyForm'
function App() {
    return (

        <Router>

            <div className='container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <GetyItem />     
                                <GetyForm />  
                               
                            </>
                        }
                    ></Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    )
}




// function App() {
//     return (
//           <div className='container'>    
//                   <>
//                   <Header />
//                     <FeedbackItem />
//                   </>          
//           </div>
//     )
//   }

export default App