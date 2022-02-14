import { Route, Routes } from "react-router-dom";

import { Home } from "pages/Home";
import { StyledApp } from "styled";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { ROUTES } from "routes/routes";

function App() {

  return (
    <StyledApp>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
