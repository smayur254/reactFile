import React from "react"

export default function Main(){
    return (
        <div className="container">
            <div className="row text-start mt-5">
                <h1>Fun facts about React</h1>
                <ul className="px-5 mt-3">
                    <li><p className="mb-2">Was first released in 2013.</p></li>
                    <li><p className="mb-2">Was originally created by Jordan Walke.</p></li>
                    <li><p className="mb-2">Has well over 100k stars on GitHub.</p></li>
                    <li><p className="mb-2">Is maintained by Facebook.</p></li>
                    <li><p className="mb-2">Powers thousands of  enterprise apps, including mobile apps.</p></li>
                </ul>
            </div>
        </div>
    )
}