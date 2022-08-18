import { Router } from "./router.jsx";
import { AuthProvider } from './auth'; 

export const App = ()=>{
  return(
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}
