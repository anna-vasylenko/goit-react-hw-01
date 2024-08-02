import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(s.profile)}>
      <div className={clsx(s.wrapper)}>
        <img src={image} alt="User avatar" className={clsx(s.image)} />
        <p className={clsx(s.name)}>{name}</p>
        <p className={clsx(s.text)}>@{tag}</p>
        <p className={clsx(s.text)}>{location}</p>
      </div>

      <ul className={clsx(s.list)}>
        <li className={clsx(s.item)}>
          <span>Followers</span>
          <span className={clsx(s.value)}>{stats.followers}</span>
        </li>
        <li className={clsx(s.item)}>
          <span>Views</span>
          <span className={clsx(s.value)}>{stats.view}</span>
        </li>
        <li className={clsx(s.item)}>
          <span>Likes</span>
          <span className={clsx(s.value)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
