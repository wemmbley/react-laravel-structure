/*
    Используется для быстрого запроса на сервер и такой же реактивной обработки.
    Рекомендуется использовать как черную коробку не вдаваясь в подробности реализации.

    Пример:
    $fetch('/api/v1/test', data => setItems(data), err => setError(err));

    Пример 2:
    const { data: items, loading, error, refetch } = useFetch('/api/v1/test');
 */

import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (signal) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url, { ...options, signal });
            if (!res.ok) throw new Error(res.statusText);
            const json = await res.json();
            setData(json.data ?? json);
        } catch (err) {
            if (err.name !== 'AbortError') setError(err.message || 'Ошибка загрузки');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [url]);

    return { data, loading, error, refetch: fetchData };
};

export const $fetch = (url, onSuccess, onError) =>
    fetch(url)
        .then(r => r.json())
        .then(j => onSuccess?.(j.data ?? j))
        .catch(e => onError?.(e.message || 'Ошибка'));
