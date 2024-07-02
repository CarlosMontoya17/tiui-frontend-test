import { Provider } from 'react-redux'
import './App.css'
import AppStore from './infraestructure/store/App.store';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './interface/routes';
import Navbar from './interface/components/templates/Navbar/Navbar';

function App() {
  return (
    <Provider store={AppStore}>
      <Router>
        <Navbar>
          <AppRoutes />
        </Navbar>
      </Router>
    </Provider>
  )
}

export default App
