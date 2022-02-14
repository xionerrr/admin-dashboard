import UnarchiveIcon from '@mui/icons-material/Unarchive';
import OutboxIcon from '@mui/icons-material/Outbox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { StyledLinks, LinkWrapper, LinkText, StyledLink } from './styled'

export const Links = () => {
    const links = [
        {
            path: "#",
            label: "Sales Orders",
            icon: <UnarchiveIcon fontSize="medium"/>
        },
        {
            path: "#",
            label: "Purchase Orders",
            icon: <OutboxIcon fontSize="medium"/>
        }, 
        {
            path: "#",
            label: "Products",
            icon: <ShoppingBasketIcon fontSize="medium"/>
        },
        // {
        //     path: "#",
        //     label: "Task list",
        //     icon: <AssignmentIcon fontSize="medium"/>
        // },
    ];

    return (
        <StyledLinks>
             {links.map((link) => {
                return (
                    <LinkWrapper key={link.label}>
                        <StyledLink to={link.path}>{
                        
                                link.icon
                            }
                            <LinkText>{
                                link.label
                            }</LinkText>
                        </StyledLink>
                    </LinkWrapper>
                )
            })
            }
         </StyledLinks>
    )
}
