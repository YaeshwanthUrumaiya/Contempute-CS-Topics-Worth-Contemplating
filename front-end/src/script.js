// Function to store data in localStorage
export function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from localStorage
export function getData(key) {
    const data = localStorage.getItem(key);
    if (data) {
        const parsedData = JSON.parse(data);
        return parsedData;
    } else {
    }
}

// Function checks if data is valid or not.
export function isDataExist(key) {
    const data = localStorage.getItem(key);
    if (data) {
        return true
    } else {
        return false
    }
}

// Function to update data in localStorage
export function updateData(key, newValue) {
    localStorage.removeItem(key); // Remove existing data
    localStorage.setItem(key, JSON.stringify(newValue)); // Add new data
}

// Function to remove data from localStorage
export function removeData(key) {
    localStorage.removeItem(key);
}
