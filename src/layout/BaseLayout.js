import React from "react";
import'./BaseLayoutStyle.css';

export const BaseLayout = ({children}) => {
    return (
        <div className={'mainWrap'}>
            <header>header data</header>
            <main>
                {children}
            </main>
            <footer>footer data</footer>

        </div>
    )
}