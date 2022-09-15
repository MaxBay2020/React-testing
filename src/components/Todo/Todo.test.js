import {fireEvent, render, screen} from '@testing-library/react'
import Todo from "./Todo";
import {BrowserRouter as Router} from 'react-router-dom'

const RouterWrapper = () => {
    return (
        <Router>
            <Todo />
        </Router>
    )
}

const addTask = tasks => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', {
        name: /add/i
    })
    tasks.forEach((task) => {
        fireEvent.change(inputElement, {
            target: {
                value: task
            }
        })
        fireEvent.click(buttonElement)
    })
}

describe('Todo', () => {
    it('fill input and click add button to add to todo list', async () => {
        render(<RouterWrapper />)
        addTask(['go gym'])

        const divElement = screen.getByText(/go gym/i)

        expect(divElement).toBeInTheDocument()
    })

    it('should render multiple items', async () => {
        render(<RouterWrapper />)

        addTask(['go gym', 'go shopping', 'drink'])

        const divsElement = screen.getAllByTestId('tasks')

        expect(divsElement.length).toBe(3)
    })

    it('tasks should not have completed class when initially rendered', async () => {
        render(<RouterWrapper />)

        addTask(['go gym', 'go shopping', 'drink'])

        const divElement = screen.getByText(/go gym/i)

        expect(divElement).not.toHaveClass('todo-item-active')
    })

    it('tasks should have completed class when clicked', async () => {
        render(<RouterWrapper />)

        addTask(['go gym', 'go shopping', 'drink'])

        const divElement = screen.getByText(/go gym/i)

        fireEvent.click(divElement)

        expect(divElement).toHaveClass('todo-item-active')
    })
})
