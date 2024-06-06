import UserItem from './UserItem';
import {User} from '../../types';
import React from 'react';

interface UsersProps {
  users: User[];
}
const Users: React.FC<UsersProps> = ({users}) => {
  return (
    <div>
      <h4 className="text-center mb-4">Users</h4>
      <ul className="list-group list-group-numbered">
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </ul>
    </div>
  );
};

export default Users;