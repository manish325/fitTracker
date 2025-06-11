import { Suspense, type FC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export const AppRouter : FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}