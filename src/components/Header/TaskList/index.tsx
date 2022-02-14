import {StyledTaskList, LinkWrapper, LinkText, StyledLink, ProgressWrapper, TaskListText, Progress } from './styled'
import AssignmentIcon from '@mui/icons-material/Assignment';

export const TaskList = () => {
  return (
    <StyledTaskList>
        <LinkWrapper>
            <StyledLink to="#">
                <AssignmentIcon fontSize="medium"/>
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
