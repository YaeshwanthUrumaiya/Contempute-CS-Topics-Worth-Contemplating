// Function to store data in localStorage
function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    alert(`${key} stored successfully`);
}

// Function to retrieve data from localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    if (data) {
        const parsedData = JSON.parse(data);
        alert(`Retrieved ${key}: Data: ${parsedData}`);
    } else {
        alert(`No data found for ${key}.`);
    }
}

// Function to update data in localStorage
function updateData(key, newValue) {
    localStorage.removeItem(key); // Remove existing data
    localStorage.setItem(key, JSON.stringify(newValue)); // Add new data
    alert(`${key} updated successfully`);
}

// Function to remove data from localStorage
function removeData(key) {
    localStorage.removeItem(key);
    alert(`${key} removed successfully`);
}
