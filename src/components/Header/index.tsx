import { FC } from 'react';
import { Logo } from 'components/Header/Logo'
import { Links } from 'components/Header/Links'
import { Profile } from 'components/Header/Profile'
import { StyledHeader } from './styled';
import { SearchInput } from './SearchInput';
import { TaskList } from './TaskList';

interface HeaderProps {
  email: string
}

export const Header: FC<HeaderProps> = ({email}) => {
  return (
    <StyledHeader>
      <Logo/>
      <Links/>
      <TaskList/>
      <SearchInput />
      <Profile email={email}/>
    </StyledHeader>
  )
}
