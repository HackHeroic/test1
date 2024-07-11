import logo from './logo.svg';
import './App.css';
import { Provider, UseDispatch,useDispatch,useSelector } from 'react-redux';
import { getUsersFetch } from './actions/general-actions';
import store from './store';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myReducer.users);

  return (
    
    <div className="App">
      <button onClick={() => {dispatch(getUsersFetch())}}>Get users</button>
      <div>Users: {users.map((user) => (<div>{user.name}</div>))}</div>
    </div>
    

  );
}

export default App;
