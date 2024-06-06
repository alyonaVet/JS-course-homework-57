import './App.css';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App = () => {

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-6">
          <UserForm />
        </div>
        <div className="col-6">
          <Users />
        </div>
      </div>
    </main>
  );
};

export default App;
