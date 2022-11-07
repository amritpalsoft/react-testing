import {render,screen} from "@testing-library/react"
import Comp1 from './Comp1'
test("Comp1 test",()=>{
    render(<Comp1/>)
    const result = screen.getByText(/hello world/i)
    expect(result).toBeInTheDocument()
})

test.skip('name',()=>{

})

test.only('name',()=>{

})

describe('name',()=>{
    test.skip('name 1',()=>{

    })
    
    test.skip('name 2',()=>{

    })


})

// also can use describe.only()  && describe.skip()

// can also use nested describe or multiple "describe" in a single file


// test can be replaced by it
it('name',()=>{

})

// test.only can be replaced by fit
fit('name',()=>{

})

// test.skip can be replaced by xit
xit('name',()=>{

})
