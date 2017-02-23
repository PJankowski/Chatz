import React from 'react';

import UserSearchResultsItem from '../UserSearchResultsItem';

function UserSearchResults({ users, addFriend }) {
  const Users = users.map((user) => {
    return <UserSearchResultsItem key={user._id} user={user} addFriend={addFriend} />;
  });

  return (
    <ul className="UserSearch__Results">
      { Users }
    </ul>
  );
}

UserSearchResults.propTypes = {
  users: React.PropTypes.array,
  addFriend: React.PropTypes.func.isRequired,
};

UserSearchResults.defaultProps = {
  users: [],
};

export default UserSearchResults;
