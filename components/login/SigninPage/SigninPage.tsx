import React, { useState } from "react";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { UserNameInput } from "../UserNameInput/UserNameInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { QueryUserLogin } from "../QueryUserLogin/QueryUserLogin";

interface Props {
  loadingUser: () => void;
  passUserAuth: (id: string) => void;
}

export const SigninPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nullUserName, setNullUserName] = useState(false);
  const [nullPassword, setNullPassword] = useState(false);

  function passUsername(val: string) {
    setUsername(val);
  }

  function passPassword(val: string) {
    setPassword(val);
  }

  function loadingUser() {
    props.loadingUser();
  }

  return (
    <React.Fragment>
      <LoginHeader text="Login" />
      <UserNameInput
        username={username}
        passString={passUsername}
        placeholder="Username"
        nullUserName={nullUserName}
      />
      <PasswordInput
        password={password}
        passString={passPassword}
        placeholder="Password"
        nullPassword={nullPassword}
      />
      <QueryUserLogin
        username={username}
        password={password}
        loadingUser={loadingUser}
        renderUsernameNull={() => setNullUserName(true)}
        renderPasswordNull={() => setNullPassword(true)}
        passUserAuth={props.passUserAuth}
      />
    </React.Fragment>
  );
};
