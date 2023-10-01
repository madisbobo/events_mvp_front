import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import EventsListPage from '../pages/EventsListPage';
import EventViewPage from '../pages/EventViewPage';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <EventsListPage />},
            { path: "/:id", element: <EventViewPage />}
        ]
    }
])

export default router;