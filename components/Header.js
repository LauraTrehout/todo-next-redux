import Image from 'next/image'

import todoist from '../public/assets/todoist.png'
import { StyledHeader } from "../styles/Header.styled";

function Header() {
  return <StyledHeader>
    <Image src={todoist} alt='logo' />
  </StyledHeader>;
}

export default Header;
