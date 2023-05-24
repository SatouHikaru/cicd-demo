import React, {useState, useEffect} from 'react';
import { api } from '../../../api';

import './style.scss';
import {ENDPOINT} from "../../../contants";

const UserListScreen = (props) => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    if (!userList) {
      setUserList([]);
    }

    if (userList && userList?.length === 0) {
      handleGetList();
    }
  }, [userList]);

  const handleGetList = async() => {
    try {
      const result = await api.get(ENDPOINT.USER.LIST);
      if (result.data?.data?.users && result.data.data.users?.length > 0) {
        setUserList(result.data.data.users);
      }
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <div className="container">
      <strong className="title">User List</strong>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
        {userList && userList?.length > 0 ? (
          userList.map((user, index) => (
            <tr key={user?.id || index}>
              <td>{user?.id}</td>
              <td>{user?.email}</td>
              <td>{user?.status ? (user.status ? 'Active' : 'Inactive') : ''}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="4" className="empty-data">No data</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default UserListScreen;
