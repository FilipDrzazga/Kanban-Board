const useLocalStorage = (defaultValue) => {
    const setLocalStorage = (value) => {
        return window.localStorage.setItem('tasks', JSON.stringify(value));
    };
    const getLocalData = () => {
        const data = window.localStorage.getItem('tasks');
        if (data) {
            return JSON.parse(data);
        };
        return defaultValue;
    };
    return [getLocalData, setLocalStorage];
}

export default useLocalStorage;