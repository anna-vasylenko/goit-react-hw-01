import clsx from "clsx";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.list)}>
      {friends.map((friend) => (
        <li key={friend.id} className={clsx(s.item)}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p className={clsx(s.name)}>{friend.name}</p>
          <p
            className={clsx(s.status, {
              [s.online]: friend.isOnline,
            })}
          >
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
