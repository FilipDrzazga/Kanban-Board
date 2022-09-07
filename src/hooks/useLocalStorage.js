import React, { useState,useEffect } from 'react';

const useLocalStorage = (key, item) => {
    const saveItem = localStorage.setItem(key,JSON.stringify(item));

    const [storage, setStorage] = useState(saveItem);

    return [storage, setStorage];
};

export default useLocalStorage;