import React from 'react'
import main_css from "./PageIndex.module.css"
import Link from "next/link";

export default function PageIndex() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>Main page!</h1>
                <div><Link href="/second">PageSecond</Link></div>
                <div><Link href="/404">PageNotFound</Link></div>
            </div>
        </>
    )
}