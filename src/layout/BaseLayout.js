import React from "react";
import './BaseLayoutStyle.css';

export const BaseLayout = ({children}) => {
    return (
        <div className={'mainWrap'}>
            <header className={'header'}>
                <input className={'input'} placeholder={'Search'} type="text"/>
                <button className={'btn'}>OK</button>
            </header>
            <main className={'main'}>
                <div className={'mainStyle'}>
                    {children}
                </div>
            </main>
            <footer>footer data</footer>

        </div>
    )
}
