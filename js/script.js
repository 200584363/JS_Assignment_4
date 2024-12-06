// Code by Utsav Patel
// Select elements
const button = document.getElementById('get-cat-btn');
const catImage = document.getElementById('cat-image');

// API Key and Endpoint
const API_KEY = 'live_JM0eBRPi1HY32rAIa8JK5LGj7n6mMRbPNJUQHUYh6xNsrrbcfgH4MbWnu8hDXDar'; // Replace with your actual API key
const API_URL = `https://api.thecatapi.com/v1/images/search`;

// Function to fetch and display a random cat image
async function fetchRandomCat() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cat image');
    }

    const data = await response.json();
    catImage.src = data[0].url; // Set the image source to the fetched URL
    catImage.alt = 'A random cat';
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
}

// Event Listener
button.addEventListener('click', fetchRandomCat);