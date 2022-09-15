import {render, screen} from '@testing-library/react'
import Header from "./Header";


// get by
it('should render same text passed into title prop', async () => {
    render(<Header title='todo' />)
    const element = screen.getByText(/todo/i)
    expect(element).toBeInTheDocument()
})
//
// it('should render heading element with text \'todo\'', async () => {
//     render(<Header title='todo' />)
//     const element = screen.getByRole('heading', {
//         name: /todo/i
//     })
//     expect(element).toBeInTheDocument()
// })
//
// it('should render element with title \'header\'', async () => {
//     render(<Header title='todo' />)
//     const element = screen.getByTitle(/header/i)
//     expect(element).toBeInTheDocument()
// })
//
//
// it('should render element with data-testid of \'2\'', async () => {
//     render(<Header title='todo' />)
//     const element = screen.getByTestId('2')
//     expect(element).toBeInTheDocument()
// })
//
// // find by
// it('should render same text passed into title prop', async () => {
//     render(<Header title='todo' />)
//     // 使用find必须使用await
//     const element = await screen.findByText(/cats/i)
//     expect(element).toBeInTheDocument()
// })
//
// // query by
// it('should render same text passed into title prop', async () => {
//     render(<Header title='todo' />)
//     const element = screen.queryByText(/dogs/i)
//     expect(element).not.toBeInTheDocument()
// })
//
// // get all by
// it('should render all headings', async () => {
//     render(<Header title='todo' />)
//     const elements = screen.getAllByRole('heading')
//     expect(elements.length).toBe(3)
// })
