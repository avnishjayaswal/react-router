import React from 'react'

function Nav() {

    return (
        <div className="row">
            <div className="col-8 border offset-2">
                <div className="row">
                    <div className="col-2">
                        <a href="/home">Home</a>
                    </div>
                    <div className="col-2">
                        <a href="/about">About</a>
                    </div>
                    <div className="col-2">
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;