import React,{useState, useEffect} from 'react';
import { User } from '../../types/user';
import userData from '../../data/user';
import UserList from './userList'

const Users: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    setUserList(userData);
  }, []);

  return (
    <UserList users={userList} />
  );
}

export default Users;