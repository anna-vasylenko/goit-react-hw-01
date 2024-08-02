import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(s.wrapper)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(s.name)}>{name}</p>
      <p
        className={clsx(s.status, {
          [s.online]: isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

{
  /* <img src={friend.avatar} alt="Avatar" width="48" />
          <p className={clsx(s.name)}>{friend.name}</p>
          <p
            className={clsx(s.status, {
              [s.online]: friend.isOnline,
            })}
          >
            {friend.isOnline ? "Online" : "Offline"}
          </p> */
}
