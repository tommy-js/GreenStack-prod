import React, { useEffect, useState } from "react";
import { returnUserList } from "./index";
import styles from "./styles.module.scss";

interface Props {
  splice: string;
  userList: any;
  injectUsername: (username: string) => void;
  dropRender: () => void;
}

export const UserSearchReturn: React.FC<Props> = (props) => {
  const [usersRender, setUsersRender] = useState(props.userList);

  useEffect(() => {
    setUsersRender(returnUserList(props.userList, props.splice));
  }, [props.splice]);

  useEffect(() => {
    if (usersRender.length === 0) props.dropRender();
  }, [usersRender]);

  return (
    <div className={styles.user_text_search_return}>
      {usersRender.map((el: any) => (
        <p
          className={styles.user_text_search_return_el}
          onClick={() => props.injectUsername(el.username)}
        >
          {el.username}
        </p>
      ))}
    </div>
  );
};
