import { StyledKeyboardArrowDownIcon, StyledSearchIcon, StyledSearchInput, StyledSearchInputBlock } from './styled'

export const SearchInput = () => {
    return (
        <StyledSearchInputBlock>
            <StyledKeyboardArrowDownIcon />
            <StyledSearchIcon />
            <StyledSearchInput 
                placeholder="Search"
                type="text"
            />
        </StyledSearchInputBlock>
    )
}
