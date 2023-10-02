import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import EventsListPage from '../pages/EventsListPage';
import EventViewPage from '../pages/EventViewPage';
import EventAddPage from '../pages/EventAddPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <EventsListPage />},
            { path: "events/:id", element: <EventViewPage />},
            { path: "/lisa", element: <EventAddPage />},
            { path: "/login", element: <LoginPage />},
        ]
    }
])

export default router;