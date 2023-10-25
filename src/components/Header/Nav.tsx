import HeaderButton from "@/components/Header/Button";

const HeaderNav = () => {
    return <nav>
        <HeaderButton href={'/board'} title={'자유게시판'}/>
        <HeaderButton href={'/document'} title={'도감'}/>
        <HeaderButton href={'/game'} title={'게임'}/>
    </nav>
};

export default HeaderNav;