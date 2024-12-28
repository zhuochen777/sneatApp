import Analytics from "./pages/dashboards/Analytics";
import Email from "./pages/apps/Email"
import Ecommerce from "./pages/dashboards/Ecommerce";
import Chat from "./pages/apps/Chat";
import Crm from "./pages/dashboards/Crm";


let routers = [
    {path: "/", element: <Analytics/>},
    {path:"/dashboards/analytics", element: <Analytics/>},
    {path:"/dashboards/ecommerce", element: <Ecommerce/>},
    {path:"/dashboards/crm", element: <Crm/>},
    {path: "/apps/email", element: <Email/>},
    {path: "/apps/chat", element: <Chat/>}
];

export default routers;
