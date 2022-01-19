import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import { ShopingPage } from '../02-component-patterns/pages/ShopingPage';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading . . . . .</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>

                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                    Shoping
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                    Users
                                </NavLink>
                            </li>

                        </ul>
                    </nav>


                    <Routes>
                        <Route path="/" element={<ShopingPage />} />

                        <Route path="/*" element={<ShopingPage />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
