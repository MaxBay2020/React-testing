import {render, screen, fireEvent} from '@testing-library/react'
import AddInput from "./AddInput";

// 创建一个没有意义的函数
const mockSetTodos = jest.fn()

describe('AddInput', () => {
    it('should render input element', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />)
        const element = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(element).toBeInTheDocument()
    })

    it('should be able to type into input', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />)
        const element = screen.getByPlaceholderText(/Add a new task here.../i)

        fireEvent.change(element, {
            target : {
                value: 'go gym'
            }
        })

        expect(element.value).toBe('go gym')
    })

    it('should have empty input when add button clicked', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />)
        const buttonElement = screen.getByRole('button', {
            name: /add/i
        })
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)

        fireEvent.click(buttonElement)

        expect(inputElement.value).toBe('')
    })
})
