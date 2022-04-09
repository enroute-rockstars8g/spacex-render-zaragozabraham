import React, { FC, useEffect, useState, version } from 'react';
import { Rockets } from './components/rockets/component';
import './App.css'
import { Header } from './components/header/component';
import { FooterDisplay } from './components/footer/component';

export const App:FC = () => {

    return (
    <>
        <div className={'header-div'}>
            <Header />
        </div>
        <div className={'all'}>
            <div id={'titleDiv'}>
                <h2 className={'sectionTitle'}>Rockets</h2>
            </div>
            <Rockets />
        </div>
        
        <footer><FooterDisplay /></footer>
    </> );
};
