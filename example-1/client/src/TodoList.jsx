import React from 'react'
import { Container, Paper, TextField, styled, IconButton, Checkbox, FormControlLabel, Divider } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import Logo from './logo-2.svg'

const TodoList = () => {
  const todos = [{ id: '1', name: 'Holi', checked: false }]

  return (
    <Wrapper>
      <StyledLogo />
      <TodoInput />
      {todos && todos.length > 0 && <>
        <ExistingTodos todos={todos} />
      </>}
    </Wrapper>
  )
}

const TodoInput = () => {
  return (
    <InputPaper>
      <StyledTextField label='Nueva tarea' />
      <IconButton aria-label='guardar' color='primary' >
        <CheckIcon />
      </IconButton>
    </InputPaper>
  )
}

const ExistingTodos = (props) => {
  const { todos } = props

  return (
    <ListPaper>
      {todos.map((todo, idx) => <>
        <Todo key={idx} todo={todo} />
        <Divider />
      </>)}
    </ListPaper>
  )
}

const Todo = (props) => {
  const { todo } = props

  return (
    <TodoWrapper>
      <FormControlLabel
        control={<Checkbox checked={todo.checked} name='todo' />}
        label={todo.name}
        style={{ flex: 1 }}
      />
      <IconButton aria-label='borrar' color='secondary'>
        <DeleteIcon />
      </IconButton>
    </TodoWrapper>
  )
}

const Wrapper = styled((props) => <Container maxWidth='sm' {...props}/>)(({ theme }) => ({
  paddingTop: theme.spacing(3),
}))

const TodoWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const InputPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  paddingTop: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
}))

const StyledTextField = styled(TextField)({
  width: '100%',
})

const ListPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  '& hr:last-child': {
    display: 'none',
  },
}))

const StyledLogo = styled(Logo)({
  height: '5rem',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export default TodoList
