import React, { FormEvent } from 'react'
import { StyledForm } from './styled'

interface FormProps {
    children: React.ReactNode,
    onSubmit: (e: FormEvent) => void,
}

export const Form: React.FC<FormProps> = ({children, onSubmit}) => {

  return (
    <StyledForm onSubmit={onSubmit}>
        {children}
    </StyledForm>
  )
}
