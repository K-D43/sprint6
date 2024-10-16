import React from 'react';
import Top from '../Layout/top_navbar';
import Main from '../Layout/mainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Layout/style.css';

import { useNavigate } from 'react-router-dom';
import View_a from './view_a';
import View_b from './view_b';
import View_c from './view_c';


export default function Overview(){
    return(
        <>
        {/* <Top/> */}
        
        <Main/>
        

        
        
        
        </>
        

    );
}

