import { Navigate, useRoutes } from "react-router-dom";
// import routers from "./router";
import { Routes, Route } from "react-router-dom";
import Analytics from "./pages/dashboards/Analytics";
import Ecommerce from "./pages/dashboards/Ecommerce";
import Email from "./pages/apps/Email";
import Chat from "./pages/apps/Chat";
import Emails from "./components/email/Emails";
import { useState } from "react";



function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="dashboards/analytics" element={<Analytics />} />
          <Route path="dashboards/ecommerce" element={<Ecommerce />} />
          <Route path="apps/email" element={<Email />}>
            <Route index element={<Navigate to="inbox"/>}/>
            <Route path=":type" element={<Emails />} />
            <Route path="label/:labeltype" element={<Emails />} />
          </Route>
          <Route path="apps/chat" element={<Chat />} />
        </Routes>
    </div>
  );
}

export default App;
