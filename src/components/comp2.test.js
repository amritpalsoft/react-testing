import { render, screen } from '@testing-library/react'

import Comp2 from './Comp2'

test("render Hello world", () => {
    render(<Comp2 />)
    const result = screen.getByText(/Hello world/i)
    expect(result).toBeInTheDocument()
})

test("render Hello {props}", () => {
    render(<Comp2 name="amrit" />)
    const result = screen.getByText("Hello amrit")
    expect.toBeInTheDocument(result)
})