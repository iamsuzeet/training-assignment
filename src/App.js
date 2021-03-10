import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import AddDetail from 'components/ContactProject/AddDetail/AddDetail';
import BookingDetail from 'components/Formik/BookingDetail/BookingDetail';
import Todos from 'components/Todo/Todos';

function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path='/assignment-2' component={BookingDetail} />
        <Route path='/assignment-1' component={AddDetail} />
        <Route path='/todo-list' component={Todos} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

const Home = () => {
  return (
    <div className='py-5 text-center'>
      <h2>Training Assignments</h2>
    </div>
  );
};

export default App;
