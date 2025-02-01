import style from "./FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={style.friendListItem}>
      <img src={avatar} alt={name} />
      <p className={style.itemName}>{name}</p>
      <span className={isOnline ? style.online : style.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
