import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Clients } from './Componets/Pages/Clients'
import EditClient from "./Componets/Clients/Edit";

import { Providers } from "./Componets/Pages/Providers";
import ProviderEdit from './Componets/Providers/Edit';

import { Operators } from "./Componets/Pages/Operators";
import EditOperator from './Componets/Operators/Edit';

import Home from "./Componets/Pages/Index";
import { NotFound } from "./Componets/Pages/NotFound";

import { Products } from './Componets/Pages/Products';

import { Login } from "./auth/pages/Login";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="clientes" element={<Clients />} />
                <Route path="clientes/:slug" element={<EditClient />} />
                <Route path="proveedores" element={<Providers />} />
                <Route path="proveedores/:slug" element={<ProviderEdit />} />
                <Route path="operadores" element={<Operators />} />
                <Route path="operadores/:slug" element={<EditOperator />} />
                <Route path="productos" element={<Products />} />
            </Routes>
        </BrowserRouter >
    )
}
