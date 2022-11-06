import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useRoutes } from 'react-router-dom'
import MyErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ROUTES from './utils/routes';

const APP_TITLE = 'FlashTube - Watch Any Video Online'
const APP_DESC = 'Watch Videos Online'

const App = () => {
 return (
    <MyErrorBoundary>
    <HelmetProvider>
        <Helmet defaultTitle={APP_TITLE}>
            <meta name={'description'} content={APP_DESC} />
        </Helmet>
            <Suspense fallback={<> </>}>
                {useRoutes(ROUTES)}
            </Suspense>
    </HelmetProvider>
    </MyErrorBoundary>
 )
}
export default App;