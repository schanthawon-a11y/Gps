// online-sync.js

/**
 * Function to synchronize data online.
 * @param {String} data - The data to be synchronized.
 * @returns {Promise} - Resolves when synchronization is complete.
 */
async function syncData(data) {
    try {
        const response = await fetch('https://api.example.com/sync', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });
        if (!response.ok) {
            throw new Error('Synchronization failed');
        }
        console.log('Data synchronized successfully');
    } catch (error) {
        console.error('Error during synchronization:', error);
    }
}

module.exports = syncData;
