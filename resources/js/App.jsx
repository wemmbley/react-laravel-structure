import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from './Components/Test.jsx';

createRoot(document.getElementById('app'))
    .render(
        <Test />
    );
