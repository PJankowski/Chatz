import React from 'react';

function UserSearchResultsItem({ user, addFriend }) {
  return (
    <li>
      {user.username}
      <button onClick={() => addFriend(user._id)}>+</button>
    </li>
  );
}

UserSearchResultsItem.propTypes = {
  user: React.PropTypes.object,
  addFriend: React.PropTypes.func.isRequired,
};

UserSearchResultsItem.defaultProps = {
  user: {},
};

export default UserSearchResultsItem;
