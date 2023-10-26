'use client';
import Link from 'next/link';

interface IHeaderButton {
  href: string;
  title: string;
}

const HeaderButton = (props: IHeaderButton) => {
  return (
    <Link className={'header-nav-btn'} href={props.href}>
      {props.title}
    </Link>
  );
};

export default HeaderButton;
