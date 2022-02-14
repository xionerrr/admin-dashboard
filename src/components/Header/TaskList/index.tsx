import AppsSharpIcon from '@mui/icons-material/AppsSharp';

import {StyledTaskList, LinkWrapper, LinkText, StyledLink, ProgressWrapper, TaskListText, Progress } from './styled'


export const TaskList = () => {
  return (
    <StyledTaskList>
        <LinkWrapper>
            <StyledLink to="#">
                <AppsSharpIcon fontSize="medium"/>
                <LinkText>Task list</LinkText>
            </StyledLink>
        </LinkWrapper>
        <ProgressWrapper>
            <Progress progress={33} />
        </ProgressWrapper>
        <TaskListText>Task has done on 33%</TaskListText>
    </StyledTaskList>
  )
}
