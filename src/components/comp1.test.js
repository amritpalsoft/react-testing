import {render,screen} from "@testing-library/react"
import Comp1 from './Comp1'
test("Comp1 test",()=>{
    render(<Comp1/>)
    const result = screen.getByText(/hello world/i)
    expect(result).toBeInTheDocument()
})