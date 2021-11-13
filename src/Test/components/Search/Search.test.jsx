import {Search} from "./Search";
import {screen} from "@testing-library/react";

const {render} = require("@testing-library/react");


const onChange = jest.fn()

describe('Search component', () => {
    it('render Search component with children', () => {
        render(
            <Search value={''} onChange={onChange}>
                Find
            </Search>
        )
        // expect(screen.getByText('Find')).toBeInTheDocument()
        expect(screen.getByText(/Find/i)).toBeInTheDocument()
    })
    it('render Search component without children', () => {
        render(
            <Search  value={''} onChange={onChange}/>
        )
        expect(screen.getByText('Search')).toBeInTheDocument()
    })
})