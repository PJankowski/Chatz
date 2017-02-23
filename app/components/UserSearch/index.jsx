import React from 'react';
import classnames from 'classnames';

function UserSearch({ users, searchUsers, addFriend, startSearching, stopSearching, isSearching }) {
  const Users = users.map((user) => {
    return (
      <li key={user._id}>{user.username}
        <button onClick={() => addFriend(user._id)}>+</button>
      </li>
    );
  });

  const wrapper = classnames({
    UserSearch: true,
    isSearching,
  });

  return (
    <div className={wrapper}>
      <input type="text" onChange={searchUsers} onFocus={startSearching} onBlur={stopSearching} placeholder="Search Users" />

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
  startSearching: React.PropTypes.func.isRequired,
  stopSearching: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
};

export default UserSearch;
