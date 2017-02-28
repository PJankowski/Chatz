import React from 'react';
import classnames from 'classnames';

import UserSearchResults from '../UserSearchResults';

function UserSearch({ users, searchUsers, addFriend, startSearching, isSearching }) {
  const wrapper = classnames({
    UserSearch: true,
    isSearching,
  });

  return (
    <div className={wrapper}>
      <input type="text" onChange={searchUsers} onFocus={startSearching} placeholder="Search Users" />

      { users.length > 0 && isSearching ?
        <UserSearchResults users={users} addFriend={addFriend} />
      : null }
    </div>
  );
}

UserSearch.propTypes = {
  users: React.PropTypes.array.isRequired,
  searchUsers: React.PropTypes.func.isRequired,
  addFriend: React.PropTypes.func.isRequired,
  startSearching: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
};

export default UserSearch;
