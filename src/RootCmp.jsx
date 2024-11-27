import React from 'react'
import { Routes, Route } from 'react-router'



export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
           

            <main>
                <Routes>
                    {/* <Route path="" element={<HomePage />} /> */}
                   
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}


