import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from '../../../mvc/Views/TestTable/TestView.jsx';

createRoot(document.getElementById('app'))
    .render(
        <Test />
    );
