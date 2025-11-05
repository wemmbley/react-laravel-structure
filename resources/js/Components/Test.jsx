import React, { useState } from 'react';

function Test() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/v1/test');
            const json = await response.json();
            setItems(json.data || []);
        } catch (err) {
            setError('Ошибка загрузки данных');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>React + Laravel API Demo</h1>
            <button onClick={handleFetch} style={styles.button}>
                Загрузить данные
            </button>

            {loading && <p>Загрузка...</p>}
            {error && <p style={styles.error}>{error}</p>}

            {items.length > 0 && (
                <table style={styles.table}>
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

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
    },
    title: {
        color: '#333',
        marginBottom: '1.5rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '1.5rem',
    },
    table: {
        margin: '0 auto',
        borderCollapse: 'collapse',
        width: '60%',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    error: {
        color: 'red',
    },
};

export default Test;
