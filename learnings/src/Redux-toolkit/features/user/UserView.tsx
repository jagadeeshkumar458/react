import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'

export const UserView = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector((state) => state.user)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  console.log(usersList);
  return (
    <div>
        <h2>List of users</h2>
        {usersList?.loading && <div>Loading...</div>}
        {!usersList?.loading && usersList?.error ? <div>{usersList.error}</div>: null}
        {!usersList?.loading && usersList?.users.length > 0 ? (
            <ul>
                {
                    usersList.users.map((item) => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        ) : null}
    </div>
  )
}
