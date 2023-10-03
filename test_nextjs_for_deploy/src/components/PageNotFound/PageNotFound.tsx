import React from 'react'
import main_css from "./PageNotFound.module.css";
import Link from "next/link";

export default function PageNotFound() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>PageNotFound</h1>
                <div><Link href="/">Main page!</Link></div>
                <div><Link href="/second">PageSecond</Link></div>
            </div>
        </>
    )
}