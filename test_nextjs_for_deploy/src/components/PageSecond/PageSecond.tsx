import React from 'react'
import main_css from "./PageSecond.module.css"
import Link from "next/link";

export default function PageSecond() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>Second page</h1>
                <div><Link href="/">Main page!</Link></div>
                <div><Link href="/404">PageNotFound</Link></div>
            </div>
        </>
    )
}