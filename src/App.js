
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import Exp from './Exp';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <Exp/>
    </Provider>   
  );
}

export default App;
