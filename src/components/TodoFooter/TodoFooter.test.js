import { render, screen} from '@testing-library/react'
import TodoFooter from "./TodoFooter";
import {BrowserRouter as Router} from 'react-router-dom'

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
   return (
       <Router>
           <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
       </Router>
   )
}

describe('footer testing', () => {
    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={8} />)
        const element = screen.getByText(/8 tasks left/i)
        expect(element).toBeInTheDocument()
    })

    it('should render \'task\' when the number of incomplete task is 1', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const element = screen.getByText(/1 task left/i)
        expect(element).toBeInTheDocument()
    })

    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const element = screen.getByText(/1 task left/i)
        expect(element).toBeVisible()
    })

    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const element = screen.getByText(/1 task left/i)
        // 判断本身是什么html元素
        expect(element).toContainHTML('p')
    })

    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const element = screen.getByText(/1 task left/i)
        // 判断元素里面的文字内容方法一：
        expect(element).toHaveTextContent(/1 task left/i)
    })

    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const element = screen.getByText(/1 task left/i)
        // 判断元素里面的文字内容方法二：toBe()里面必须是个字符串！
        expect(element.textContent).toBe('1 task left')
    })

})
