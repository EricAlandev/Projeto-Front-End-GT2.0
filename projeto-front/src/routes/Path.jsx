import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeL from '../layout/Homelayout';
import Error from '../layout/Error'
import HomePage from '../pages/Homepage';
import Unfound from '../pages/PageUnfound';
import Products from '../pages/Products';
import Categorys from '../pages/Categorys';
import MyRequests from '../pages/MyRequests';
import LoginLay from '../layout/LoginLay';
import ProductViewPage from '../pages/ProductViewPage'
import { CadastroPage, LoginPage } from '../pages/Login';

const Path = () =>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeL />}>
                        <Route index element={<HomePage />}/>
                    </Route>

                    <Route path='/cadastro' element={<LoginLay />}>
                        <Route index element={<CadastroPage />} />
                    </Route>

                    <Route path='/entrar' element={<LoginLay />}>
                        <Route index element={<LoginPage />} />
                    </Route>

                    <Route path='/produtos' element={<HomeL />}>
                        <Route index element={<Products />}/>
                    </Route>

                    <Route path='/categorias' element={<HomeL />}>
                        <Route index element={<Categorys />} />
                    </Route>

                    <Route path='/meusprodutos' element={<HomeL />}>
                        <Route index element={<MyRequests />} />
                    </Route>

                    <Route path='/product/:id' element={<HomeL />}>
                        <Route index element={<ProductViewPage />} />
                    </Route>

                    <Route path='*' element={<HomeL />}>
                        <Route path='*' element={<Unfound />}/>
                    </Route>
        
                    {/*Caso a pessoa entre em uma ulr inexistente dentro do login e cadastro */}
                    <Route path='cadastro/*' element={<Error />}/>
                    <Route path='entrar/*' element={<Error />}/>
                    
                   

                    
                        
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Path;