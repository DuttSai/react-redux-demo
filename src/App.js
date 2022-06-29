import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import HooksCakeContainer from './Components/HooksCakeContainer';
import store from './redux/store';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer >

      </CakeContainer>
      <HooksCakeContainer />
      <HooksIceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
