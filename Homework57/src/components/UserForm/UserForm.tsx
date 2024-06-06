import React, {useState} from 'react';
import {User, UserFormData} from '../../types';

interface UserDataProps {
  onSubmit: (user: User) => void;
}

const initialState: UserFormData = {
  name: '',
  email: '',
  isActive: false,
  role: '',
};
const UserForm: React.FC<UserDataProps> = ({onSubmit}) => {

  const [userFormData, setUserFormData] = useState<UserFormData>(initialState);

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...userFormData
    });
    setUserFormData({
      name: '',
      email: '',
      isActive: false,
      role: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="text-center">Add user</h4>
      <div className="form-group">
        <label htmlFor="name" className="mb-2 mt-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          required
          onChange={changeUser}
          value={userFormData.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="mb-2 mt-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required
          onChange={changeUser}
          value={userFormData.email}
        />
      </div>
      <div className="form-group">
        <label className="form-check-label mb-2 mt-2" htmlFor="role">Select your role</label>
        <select
          name="role"
          id="role"
          className="form-select"
          onChange={changeUser}
          required
          value={userFormData.role}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-check form-check-reverse mb-2 mt-2">
        <label htmlFor="isActive" className="form-check-label">Active</label>
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          onChange={changeIsActive}
          checked={userFormData.isActive}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Create</button>
    </form>
  );
};

export default UserForm;