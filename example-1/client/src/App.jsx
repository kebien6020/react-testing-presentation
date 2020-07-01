import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import TodoList from './TodoList'

const theme = createMuiTheme()

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TodoList />
    </MuiThemeProvider>
  )
}

export default App
