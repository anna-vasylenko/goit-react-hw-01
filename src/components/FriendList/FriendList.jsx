import clsx from "clsx";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.list)}>
      {friends.map((friend) => (
        <li key={friend.id} className={clsx(s.item)}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
