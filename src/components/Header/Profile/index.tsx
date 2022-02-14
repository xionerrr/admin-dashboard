import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FC, useState } from 'react';


import { ProfileAccountEmail, ProfileInfo, ProfileInfoLogOutModal, ProfileInfoModalButton, ProfileMoreButton, StyledAccountCircleIcon, StyledNotificationsNoneIcon, StyledProfile } from './styled'
import { rejectUser } from 'store/reducers/user/actions';
import { useAppDispatch } from 'hooks/useAppDispatch';

interface HeaderProps {
    email: string,
}

export const Profile: FC<HeaderProps> = ({email}) => {
    const dispatch = useAppDispatch()

    const [isActive, setActive] = useState<boolean>(false)

    const toggleClass = () => {
        setActive(!isActive)
    }

    const handleLogOut = () => {
        dispatch(rejectUser())
    }


    return (
        <StyledProfile>
            <StyledNotificationsNoneIcon />
            <ProfileInfo
                onClick={toggleClass}
            >
                <StyledAccountCircleIcon />
                <ProfileAccountEmail>
                    {email}
                </ProfileAccountEmail>
                <ProfileMoreButton>
                    <KeyboardArrowDownIcon />
                </ProfileMoreButton>
            </ProfileInfo>
            <ProfileInfoLogOutModal
                isVisible={isActive}
            >
                <ProfileInfoModalButton
                    onClick={handleLogOut}
                >
                    Log out
                </ProfileInfoModalButton>
            </ProfileInfoLogOutModal>
        </StyledProfile>
    )
}
