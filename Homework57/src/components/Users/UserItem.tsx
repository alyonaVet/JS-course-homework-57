import {User} from '../../types';
import React from 'react';

interface useItemProps {
  user: User;
}
const UserItem: React.FC<useItemProps> = ({user}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div>Name: <span className="fw-bold">{user.name}</span></div>
        <div className="">Email: <span className="fw-bold">{user.email}</span></div>
        <div className="">Role: <span className="fw-bold">{user.role}</span></div>
      </div>
      <span className="badge text-bg-primary rounded-pill">{user.isActive ? 'Active' : 'Not active'}</span>
    </li>);
};

export default UserItem;