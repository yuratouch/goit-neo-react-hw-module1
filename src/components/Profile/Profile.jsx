import style from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.header}>
        <div className={style.imageWrapper}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={style.name}>{name}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>

      <ul className={style.statsList}>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <li key={key} className={style.statsItem}>
              <span className={style.statsItemKey}>{key}</span>
              <span className={style.statsItemValue}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
