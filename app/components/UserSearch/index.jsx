import React from 'react';

function UserSearch({ users, searchUsers, addFriend }) {
  const Users = users.map((user) => {
    return (
      <li key={user._id}>{user.username}
        <button onClick={() => addFriend(user._id)}>+</button>
      </li>
    );
  });

  return (
    <div className="UserSearch">
      <input type="text" onChange={searchUsers} placeholder="Search Users" />

      { users.length > 0 ?
        <ul className="UserSearch__Results">
          { Users }
        </ul> : null }
    </div>
  );
}

UserSearch.propTypes = {
  users: React.PropTypes.array.isRequired,
  searchUsers: React.PropTypes.func.isRequired,
  addFriend: React.PropTypes.func.isRequired,
};

export default UserSearch;
