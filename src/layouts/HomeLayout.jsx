import React from 'react';
import LatestNews from '../components/LatestNews';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto mt-8'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-14 grid grid-cols-12 gap-6'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;