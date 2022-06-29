import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import HooksCakeContainer from './Components/HooksCakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer >

      </CakeContainer>
      <HooksCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
