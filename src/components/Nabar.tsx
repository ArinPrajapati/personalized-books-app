import React, { useEffect, useState } from "react";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../server/firebase.ts";
import {
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const Nabar: React.FC = () => {
  const [sign, setSign] = useState<boolean>(false);

  const signInWithGoogle: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithPopup(auth, googleProvider);
      setSign(true);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await signOut(auth);
      setSign(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="flex justify-between p-5 sticky top-0 z-50 w-full bg-white shadow-lg">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="" className="w-[4rem]" />
        <p className="text-3xl font-Bricolage blue_pruple_gradient">ReadSage</p>
      </div>
      <div className="flex gap-3 ">
        {!sign ? (
          <button
            className="w-[4rem] h-10 p-2 rounded-[20px] transtion-all text-center  hover:bg-orange-3 bg-transparent  border-2  border-orange-3 text-orange-3 hover:text-black active:scale-75 "
            onClick={signInWithGoogle}
          >
            Sign
          </button>
        ) : (
          <div className="flex gap-3 transtion-all">
            <button
              className="w-[6rem] h-10 p-2 rounded-[20px] text-center bg-orange-3 hover:border-2 hover:border-orange-3 hover:bg-transparent hover:text-orange-3 active:scale-90"
              onClick={logOut}
            >
              Log-Out
            </button>
            <Link
              className="w-[4rem] h-10 p-2 rounded-[20px] text-center bg-orange-3 hover:border-2 hover:border-orange-3 hover:bg-transparent hover:text-orange-3 active:scale-90"
              to="/user"
            >
              User
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nabar;
