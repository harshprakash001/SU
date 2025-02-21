// document.addEventListener('DOMContentLoaded', () => {
//     const matchForm = document.getElementById('matchForm');

//     // Initialize Google Places Autocomplete
//     const femalePlaceInput = document.getElementById('femalePlace');
//     const malePlaceInput = document.getElementById('malePlace');

//     const femaleAutocomplete = new google.maps.places.Autocomplete(femalePlaceInput);
//     const maleAutocomplete = new google.maps.places.Autocomplete(malePlaceInput);

//     femaleAutocomplete.addListener('place_changed', () => {
//         const place = femaleAutocomplete.getPlace();
//         document.getElementById('femaleLatitude').value = place.geometry.location.lat();
//         document.getElementById('femaleLongitude').value = place.geometry.location.lng();
//     });

//     maleAutocomplete.addListener('place_changed', () => {
//         const place = maleAutocomplete.getPlace();
//         document.getElementById('maleLatitude').value = place.geometry.location.lat();
//         document.getElementById('maleLongitude').value = place.geometry.location.lng();
//     });

//     // Submit Form
//     matchForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const bride = {
//             year: document.getElementById('femaleYear').value,
//             month: document.getElementById('femaleMonth').value,
//             date: document.getElementById('femaleDate').value,
//             hours: document.getElementById('femaleHours').value,
//             minutes: document.getElementById('femaleMinutes').value,
//             latitude: document.getElementById('femaleLatitude').value,
//             longitude: document.getElementById('femaleLongitude').value
//         };

//         const groom = {
//             year: document.getElementById('maleYear').value,
//             month: document.getElementById('maleMonth').value,
//             date: document.getElementById('maleDate').value,
//             hours: document.getElementById('maleHours').value,
//             minutes: document.getElementById('maleMinutes').value,
//             latitude: document.getElementById('maleLatitude').value,
//             longitude: document.getElementById('maleLongitude').value
//         };

//         try {
//             const response = await fetch('/api/match-making', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ bride, groom })
//             });
//             const data = await response.json();
//             localStorage.setItem('matchResults', JSON.stringify(data));
//             window.location.href = '/results.html';
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     initAutocomplete();

//     const matchForm = document.getElementById('matchForm');
//     if (matchForm) {
//         matchForm.addEventListener('submit', handleSubmit);
//     }
// });

// function initAutocomplete() {
//     const femalePlaceInput = document.getElementById('femalePlace');
//     const malePlaceInput = document.getElementById('malePlace');

//     const femaleAutocomplete = new google.maps.places.Autocomplete(femalePlaceInput);
//     const maleAutocomplete = new google.maps.places.Autocomplete(malePlaceInput);

//     femaleAutocomplete.addListener('place_changed', () => {
//         const place = femaleAutocomplete.getPlace();
//         if (place.geometry) {
//             document.getElementById('femaleLatitude').value = place.geometry.location.lat();
//             document.getElementById('femaleLongitude').value = place.geometry.location.lng();
//         }
//     });

//     maleAutocomplete.addListener('place_changed', () => {
//         const place = maleAutocomplete.getPlace();
//         if (place.geometry) {
//             document.getElementById('maleLatitude').value = place.geometry.location.lat();
//             document.getElementById('maleLongitude').value = place.geometry.location.lng();
//         }
//     });
// }

// async function handleSubmit(e) {
//     e.preventDefault();

//     const formData = {
//         female: {
//             year: parseInt(document.getElementById('femaleYear').value),
//             month: parseInt(document.getElementById('femaleMonth').value),
//             date: parseInt(document.getElementById('femaleDate').value),
//             hours: parseInt(document.getElementById('femaleHours').value),
//             minutes: parseInt(document.getElementById('femaleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('femaleLatitude').value),
//             longitude: parseFloat(document.getElementById('femaleLongitude').value),
//             timezone: 5.5
//         },
//         male: {
//             year: parseInt(document.getElementById('maleYear').value),
//             month: parseInt(document.getElementById('maleMonth').value),
//             date: parseInt(document.getElementById('maleDate').value),
//             hours: parseInt(document.getElementById('maleHours').value),
//             minutes: parseInt(document.getElementById('maleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('maleLatitude').value),
//             longitude: parseFloat(document.getElementById('maleLongitude').value),
//             timezone: 5.5
//         },
//         config: {
//             observation_point: "topocentric",
//             language: "hi",
//             ayanamsha: "lahiri"
//         }
//     };

//     try {
//         const response = await fetch('/api/match-making', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });
//         const data = await response.json();
//         localStorage.setItem('matchResults', JSON.stringify(data));
//         window.location.href = 'results.html';
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while fetching the results. Please try again.');
//     }
// }



// document.addEventListener('DOMContentLoaded', () => {
//     initAutocomplete();

//     const matchForm = document.getElementById('matchForm');
//     if (matchForm) {
//         matchForm.addEventListener('submit', handleSubmit);
//     }
// });

// function initAutocomplete() {
//     const femalePlaceInput = document.getElementById('femalePlace');
//     const malePlaceInput = document.getElementById('malePlace');

//     const femaleAutocomplete = new google.maps.places.Autocomplete(femalePlaceInput);
//     const maleAutocomplete = new google.maps.places.Autocomplete(malePlaceInput);

//     femaleAutocomplete.addListener('place_changed', () => {
//         const place = femaleAutocomplete.getPlace();
//         if (place.geometry) {
//             document.getElementById('femaleLatitude').value = place.geometry.location.lat();
//             document.getElementById('femaleLongitude').value = place.geometry.location.lng();
//         }
//     });

//     maleAutocomplete.addListener('place_changed', () => {
//         const place = maleAutocomplete.getPlace();
//         if (place.geometry) {
//             document.getElementById('maleLatitude').value = place.geometry.location.lat();
//             document.getElementById('maleLongitude').value = place.geometry.location.lng();
//         }
//     });
// }

// async function handleSubmit(e) {
//     e.preventDefault();

//     const formData = {
//         female: {
//             year: parseInt(document.getElementById('femaleYear').value),
//             month: parseInt(document.getElementById('femaleMonth').value),
//             date: parseInt(document.getElementById('femaleDate').value),
//             hours: parseInt(document.getElementById('femaleHours').value),
//             minutes: parseInt(document.getElementById('femaleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('femaleLatitude').value),
//             longitude: parseFloat(document.getElementById('femaleLongitude').value),
//             timezone: 5.5
//         },
//         male: {
//             year: parseInt(document.getElementById('maleYear').value),
//             month: parseInt(document.getElementById('maleMonth').value),
//             date: parseInt(document.getElementById('maleDate').value),
//             hours: parseInt(document.getElementById('maleHours').value),
//             minutes: parseInt(document.getElementById('maleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('maleLatitude').value),
//             longitude: parseFloat(document.getElementById('maleLongitude').value),
//             timezone: 5.5
//         },
//         config: {
//             observation_point: "topocentric",
//             language: "hi",
//             ayanamsha: "lahiri"
//         }
//     };

//     try {
//         const response = await fetch('/api/match-making', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });
//         const data = await response.json();
//         localStorage.setItem('matchResults', JSON.stringify(data));
//         window.location.href = 'results.html';
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while fetching the results. Please try again.');
//     }
// }



// document.addEventListener('DOMContentLoaded', () => {
//     const matchForm = document.getElementById('matchForm');
//     if (matchForm) {
//         matchForm.addEventListener('submit', handleSubmit);
//     }

//     if (window.location.pathname.includes('results.html')) {
//         displayResults();
//     }
// });

// // ✅ Handle Form Submission and Redirect to Results Page
// async function handleSubmit(e) {
//     e.preventDefault();

//     const formData = {
//         female: {
//             year: parseInt(document.getElementById('femaleYear').value),
//             month: parseInt(document.getElementById('femaleMonth').value),
//             date: parseInt(document.getElementById('femaleDate').value),
//             hours: parseInt(document.getElementById('femaleHours').value),
//             minutes: parseInt(document.getElementById('femaleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('femaleLatitude').value),
//             longitude: parseFloat(document.getElementById('femaleLongitude').value),
//             timezone: 5.5
//         },
//         male: {
//             year: parseInt(document.getElementById('maleYear').value),
//             month: parseInt(document.getElementById('maleMonth').value),
//             date: parseInt(document.getElementById('maleDate').value),
//             hours: parseInt(document.getElementById('maleHours').value),
//             minutes: parseInt(document.getElementById('maleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('maleLatitude').value),
//             longitude: parseFloat(document.getElementById('maleLongitude').value),
//             timezone: 5.5
//         },
//         config: {
//             observation_point: "topocentric",
//             language: "hi",
//             ayanamsha: "lahiri"
//         }
//     };

//     try {
//         const response = await fetch('/api/match-making', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         const data = await response.json();
//         localStorage.setItem('matchResults', JSON.stringify(data));
//         window.location.href = 'results.html';
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while fetching the results. Please try again.');
//     }
// }

// // ✅ Display Match Results on results.html
// function displayResults() {
//     const resultsContainer = document.getElementById('results');
//     const matchResults = localStorage.getItem('matchResults');

//     if (matchResults) {
//         const data = JSON.parse(matchResults);
//         resultsContainer.innerHTML = generateResultsHTML(data);
//     } else {
//         resultsContainer.innerHTML = "<p>No match results found. Please try again.</p>";
//     }
// }

// // ✅ Generate HTML for displaying results
// function generateResultsHTML(data) {
//     let html = "<h2>Match-Making Results</h2>";
    
//     if (data.error) {
//         html += `<p style="color: red;"><strong>Error:</strong> ${data.error}</p>`;
//     } else {
//         html += "<ul>";
//         for (const key in data) {
//             html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
//         }
//         html += "</ul>";
//     }

//     return html;
// }



// document.addEventListener('DOMContentLoaded', () => {
//     const matchForm = document.getElementById('matchForm');
//     if (matchForm) matchForm.addEventListener('submit', handleSubmit);
//     if (window.location.pathname.includes('results.html')) displayResults();
// });

// async function handleSubmit(e) {
//     e.preventDefault();

//     const formData = {
//         female: {
//             year: parseInt(document.getElementById('femaleYear').value),
//             month: parseInt(document.getElementById('femaleMonth').value),
//             date: parseInt(document.getElementById('femaleDate').value),
//             hours: parseInt(document.getElementById('femaleHours').value),
//             minutes: parseInt(document.getElementById('femaleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('femaleLatitude').value),
//             longitude: parseFloat(document.getElementById('femaleLongitude').value),
//             timezone: 5.5
//         },
//         male: {
//             year: parseInt(document.getElementById('maleYear').value),
//             month: parseInt(document.getElementById('maleMonth').value),
//             date: parseInt(document.getElementById('maleDate').value),
//             hours: parseInt(document.getElementById('maleHours').value),
//             minutes: parseInt(document.getElementById('maleMinutes').value),
//             seconds: 0,
//             latitude: parseFloat(document.getElementById('maleLatitude').value),
//             longitude: parseFloat(document.getElementById('maleLongitude').value),
//             timezone: 5.5
//         },
//         config: {
//             observation_point: "topocentric",
//             language: "hi",
//             ayanamsha: "lahiri"
//         }
//     };

//     try {
//         const response = await fetch('/api/match-making', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         const data = await response.json();
//         localStorage.setItem('matchResults', JSON.stringify(data));
//         window.location.href = 'results.html';
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while fetching the results.');
//     }
// }

// function displayResults() {
//     const resultsContainer = document.getElementById('results');
//     const matchResults = localStorage.getItem('matchResults');

//     if (matchResults) {
//         const data = JSON.parse(matchResults);
//         resultsContainer.innerHTML = generateResultsHTML(data);
//     } else {
//         resultsContainer.innerHTML = "<p>No match results found. Please try again.</p>";
//     }
// }

// function generateResultsHTML(data) {
//     let html = "<h2>Match-Making Results</h2>";
//     if (data.error) {
//         html += `<p style="color: red;"><strong>Error:</strong> ${data.error}</p>`;
//     } else {
//         html += "<ul>";
//         for (const key in data) html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
//         html += "</ul>";
//     }
//     return html;
// }

// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const matchForm = document.getElementById('matchForm');
    if (matchForm) {
        matchForm.addEventListener('submit', handleSubmit);
    }

    const resultsContainer = document.getElementById('results');
    if (resultsContainer) {
        displayResults();
    }
});

async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        female: {
            year: parseInt(document.getElementById('femaleYear').value),
            month: parseInt(document.getElementById('femaleMonth').value),
            date: parseInt(document.getElementById('femaleDate').value),
            hours: parseInt(document.getElementById('femaleHours').value),
            minutes: parseInt(document.getElementById('femaleMinutes').value),
            seconds: 0,
            latitude: parseFloat(document.getElementById('femaleLatitude').value),
            longitude: parseFloat(document.getElementById('femaleLongitude').value),
            timezone: 5.5
        },
        male: {
            year: parseInt(document.getElementById('maleYear').value),
            month: parseInt(document.getElementById('maleMonth').value),
            date: parseInt(document.getElementById('maleDate').value),
            hours: parseInt(document.getElementById('maleHours').value),
            minutes: parseInt(document.getElementById('maleMinutes').value),
            seconds: 0,
            latitude: parseFloat(document.getElementById('maleLatitude').value),
            longitude: parseFloat(document.getElementById('maleLongitude').value),
            timezone: 5.5
        },
        config: {
            observation_point: "topocentric",
            language: "hi",
            ayanamsha: "lahiri"
        }
    };

    try {
        const response = await fetch('/api/match-making', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        localStorage.setItem('matchResults', JSON.stringify(data));
        window.location.href = 'results.html';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the results. Please try again.');
    }
}

function displayResults() {
    const resultsContainer = document.getElementById('results');
    const results = JSON.parse(localStorage.getItem('matchResults'));

    if (results && results.output) {
        const { output } = results;
        resultsContainer.innerHTML = `
            <div class="result-card">
                <h3>Overall Compatibility</h3>
                <p class="score">${output.total_score} / ${output.out_of}</p>
                <p>Total Score: ${output.total_score}</p>
                <p>Out of: ${output.out_of}</p>
            </div>
            ${Object.entries(output)
                .filter(([key]) => key !== 'total_score' && key !== 'out_of')
                .map(([key, value]) => `
                    <div class="result-card">
                        <h3>${formatTitle(key)}</h3>
                        <p class="score">${value.score} / ${value.out_of}</p>
                        ${Object.entries(value)
                            .filter(([subKey]) => subKey !== 'score' && subKey !== 'out_of')
                            .map(([subKey, subValue]) => `
                                <p><strong>${formatTitle(subKey)}:</strong> ${formatValue(subValue)}</p>
                            `).join('')}
                    </div>
                `).join('')}
        `;
    } else {
        resultsContainer.innerHTML = '<p>No results found. Please go back and submit the form.</p>';
    }
}

function formatTitle(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatValue(value) {
    if (typeof value === 'object') {
        return Object.entries(value)
            .map(([key, val]) => `${formatTitle(key)}: ${val}`)
            .join(', ');
    }
    return value;
}