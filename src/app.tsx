import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout';
import PageMessages from './pages/PageMessages/PageMessages';
import PageAuthors from './pages/PageAuthors/PageAuthors';
import { store } from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<PageMessages />} />
                    <Route path='/authors' element={<PageAuthors />} />
                </Routes>
            </Layout>
        </HashRouter>
    </Provider>,
    document.querySelector('#root'),
);
