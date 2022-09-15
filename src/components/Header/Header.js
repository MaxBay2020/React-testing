import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 className="header">{title}</h1>
            <h4 className="header" title='header'>Cats</h4>
            <h6 data-testid='2'>id</h6>
        </>
    )
}
