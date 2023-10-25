"use client";
import Link from "next/link";
import {thisHref} from "@/store/category";
import {useAtom} from "jotai/react";
interface IHeaderButton {
    href: string
    title: string
}

const HeaderButton = (props: IHeaderButton) => {
    const [state, setState] = useAtom(thisHref)
    const pathSaveAction = () => {
        setState(props.href)
    }
    return <Link onClick={pathSaveAction}
                 className={`header-nav-btn ${state === props.href ? 'bg-bg-water' : 'bg-bg-white'}`}
                 href={props.href}>{props.title}</Link>
}

export default HeaderButton