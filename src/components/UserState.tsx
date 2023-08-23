import React, { useState, useEffect } from "react";
import { auth } from "../server/firebase";
import { useNavigate } from "react-router-dom";
interface UserData {
  name: string | null | undefined;
  userEmail: string | null | undefined;
  userDate: string | null | undefined;
  userImg: string | null | undefined;
}

const UserState: React.FC = () => {
  const Navigate = useNavigate();
  const [userState, setUserState] = useState<UserData>({
    name: null,
    userEmail: null,
    userDate: null,
    userImg: null,
  });

  useEffect(() => {
    const user = auth?.currentUser;

    if (user) {
      setUserState({
        name: user.displayName,
        userEmail: user.email,
        userDate: user.metadata.creationTime,
        userImg: user.photoURL,
      });
    } else {
      Navigate("/");
    }
  }, []);

  return (
    <div className="border w-[24rem] h-[20rem] flex flex-col items-center  ">
      <img src={userState.userImg} alt="user Photo" className="w-30 mb-7" />
      <div className="">  
        <span className="flex gap-4 w-[20rem] justify-between p-2 mb-2 ">
          <p>User Name :</p>
          <p>{userState.name}</p>
        </span>
        <span className="flex gap-4 w-[20rem] justify-between   p-2 mb-2 ">
          <p>User Email :</p>
          <p>{userState.userEmail}</p>
        </span>
        <span className="flex gap-4 w-[25rem] justify-between p-2 mb-2">
          <p>Sign in Date :</p>
          <p>{userState.userDate}</p>
        </span>
      </div>
    </div>
  );
};

export default UserState;
