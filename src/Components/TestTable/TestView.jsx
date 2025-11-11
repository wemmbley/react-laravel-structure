import React, { useState } from 'react';
import { $fetch } from '../../../resources/js/Actions/useFetch.js';
import './TestView.css';

function TestView() {
    const [items, setItems]                = useState([]);
    const [isLoading, setLoadingState]  = useState(false);
    const [isError, setErrorState]               = useState(null);

    const handleFetch = () => {
        setLoadingState(true);
        setErrorState(null);

        $fetch(
            '/api/v1/test',
            (data) => {
                setItems(data);
                setLoadingState(false);
            },
            (err) => {
                setErrorState(err);
                setLoadingState(false);
            }
        );
    };

    return (
        <div className="test-container">
            <h1 className="test-title">React + Laravel API Demo</h1>

            <button onClick={handleFetch} className="test-button">Загрузить данные</button>

            {isLoading && <p className="test-loading">Загрузка...</p>}
            {isError && <p className="test-error">{isError}</p>}
            {items.length > 0 && (
                <table className="test-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TestView;
