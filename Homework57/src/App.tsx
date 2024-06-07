import './App.css';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

const App = () => {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'john.@gmail.com', role: 'admin', isActive: true},
    {id: '2', name: 'Kate', email: 'kate.@gmail.com', role: 'editor', isActive: false},
    {id: '3', name: 'Alex', email: 'alex.@gmail.com', role: 'user', isActive: true},
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-6">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </main>
  );
};

export default App;
