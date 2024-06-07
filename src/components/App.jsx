import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';

import AuthLayout from './AuthLayout/AuthLayout';
import NavBar from 'components/NavBar/NavBar';
import UserRoutes from 'components/UserRoutes/UserRoutes';

import { store, persistor } from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <NavBar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
