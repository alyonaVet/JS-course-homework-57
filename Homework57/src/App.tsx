import './App.css';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

const App = () => {

  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };
  console.log(users);

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-6">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-6">
          <Users />
        </div>
      </div>
    </main>
  );
};

export default App;
