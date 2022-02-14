import OutboxSharpIcon from '@mui/icons-material/OutboxSharp';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';

import { StyledLinks, LinkWrapper, LinkText, StyledLink, StyledNav } from './styled'

export const Links = () => {
    const links = [
        {
            path: "#",
            label: "Sales Orders",
            icon: <OutboxSharpIcon fontSize="medium"/>
        },
        {
            path: "#",
            label: "Purchase Orders",
            icon: <MoveToInboxSharpIcon fontSize="medium"/>
        }, 
        {
            path: "#",
            label: "Products",
            icon: <ShoppingCartCheckoutSharpIcon fontSize="medium"/>
        },
        // {
        //     path: "#",
        //     label: "Task list",
        //     icon: <AssignmentIcon fontSize="medium"/>
        // },
    ];

    return (
        <StyledNav>
            <StyledLinks>
             {links.map((link) => {
                return (
                    <LinkWrapper key={link.label}>
                        <StyledLink to={link.path}>
                            {
                                link.icon
                            }
                            <LinkText>
                            {
                                link.label
                            }
                            </LinkText>
                        </StyledLink>
                    </LinkWrapper>
                )
            })}
            </StyledLinks>
        </StyledNav>
    )
}
