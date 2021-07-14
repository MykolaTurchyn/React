import React from "react";
import './BaseLayoutStyle.css';

export const BaseLayout = ({children}) => {
    return (
        <div className={'mainWrap'}>
            <header>header data</header>
            <main>
                <div className={'mainStyle'}>
                    {children}
                </div>
            </main>
            <footer>footer data</footer>

        </div>
    )
}