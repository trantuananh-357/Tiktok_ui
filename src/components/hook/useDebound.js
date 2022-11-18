import { useEffect, useState } from 'react';

function useDebound(value, delay) {
    const [deboundced, setDeboundced] = useState(value);
    useEffect(() => {
        const handleDebounced = setTimeout(() => {
            setDeboundced(value);
        }, delay);
        return () => clearTimeout(handleDebounced);
    }, [value]);
    return deboundced;
}

export default useDebound;
