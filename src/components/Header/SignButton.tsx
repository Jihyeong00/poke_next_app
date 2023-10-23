"use client"
import Link from "next/link";
import {isLogin} from "@/store/user";
import {useAtom} from "jotai";

const SignButton = () => {
    const [login, setLogin] = useAtom(isLogin)
    return <div>
        {login ?
            <div className={'header-nav-btn'} onClick={() => setLogin(false)}>로그아웃</div> :
            <div className={'header-nav-btn'} onClick={() => setLogin(true)}>로그인</div>
        }
    </div>
};

export default SignButton;