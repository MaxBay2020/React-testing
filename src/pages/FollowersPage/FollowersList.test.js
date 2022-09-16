import {render, screen} from '@testing-library/react'
import FollowersList from "../../components/FollowersList/FollowersList";
import {BrowserRouter as Router} from 'react-router-dom'

const MockRouter = () => {
    return (
        <Router>
            <FollowersList />
        </Router>
    )
}

describe('FollowersList', () => {
    it('should render the first follower item', async () => {
        render(<MockRouter />)
        const divElement = await screen.findByTestId(/follower-item/i)
        expect(divElement).toBeInTheDocument()
    })

    // it('should render 5 follower items', async () => {
    //     render(<MockRouter />)
    //     const divElements = await screen.findAllByTestId(/follower-item/i)
    //     expect(divElements.length).toBe(5)
    // })
})
