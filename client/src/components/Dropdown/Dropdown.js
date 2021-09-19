import * as React from 'react'
import './Dropdown.scss';

const DropdownContext = React.createContext()

function Dropdown(props) {

    const [on, setOn] = React.useState(false)

    const toggle = React.useCallback(() => setOn(oldOn => !oldOn), [])

    const value = React.useMemo(() => ({ on, toggle }))

    return (
        <div className="dropdown">
            <DropdownContext.Provider value={value}>
                {props.children}
            </DropdownContext.Provider>
        </div>
    )
}

function useDropdownContext() {
    const context = React.useContext(DropdownContext)
    if (!context) {
        throw new Error(
            `Dropdown compound components cannot be rendered outside the Dropdown component`,
        )
    }
    return context
}

function Button(props) {

    const { toggle } = useDropdownContext()

    return (
        <button onClick={toggle} {...props} className={`dropdown__button ${props.stylename}`}>
            {props.children}
        </button>
    )
}

function Body({ children }) {

    const { toggle, on } = useDropdownContext()

    return (
        <>
            <div onClick={toggle} className={`dropdown__bg ${on ? 'visible' : ''}`}></div>
            <div onClick={toggle} className={`dropdown__content ${on ? 'visible' : ''}`} role='menu'>
                {children}
            </div>
        </>
    )
}


Dropdown.Button = Button
Dropdown.Body = Body

export default Dropdown;