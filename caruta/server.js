const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000; // The port your server will listen on

app.use(cors()); // Allows your alarm.html dashboard to talk to this server safely

// Global state to hold the latest cached data from your hardware
let liveData = {
    fb: { cache: 0, status: "OFFLINE", bitrate: 0, effectiveVideoFormat: "--", quality: "--", isOnline: false },
    yt: { cache: 0, status: "OFFLINE", bitrate: 0, effectiveVideoFormat: "--", quality: "--", isOnline: false }
};

const FB_API = 'http://192.168.50.249/control/api/v1/livestreams/0';
const YT_API = 'http://192.168.50.250/control/api/v1/livestreams/0';

// Function to fetch data from your hardware encoders
async function fetchEncoder(url) {
    try {
        const response = await fetch(url, { signal: AbortSignal.timeout(800) });
        if (!response.ok) return { isOnline: false };
        const data = await response.json();
        return { ...data, isOnline: true };
    } catch (e) {
        return { isOnline: false };
    }
}

// Background loop running on your server every 1000ms (1 second)
setInterval(async () => {
    const [fbRaw, ytRaw] = await Promise.all([
        fetchEncoder(FB_API),
        fetchEncoder(YT_API)
    ]);

    if (fbRaw.isOnline) {
        liveData.fb = {
            cache: fbRaw.cache || 0,
            status: fbRaw.status,
            duration: fbRaw.duration,
            bitrate: fbRaw.bitrate,
            effectiveVideoFormat: fbRaw.effectiveVideoFormat,
            quality: fbRaw.quality,
            isOnline: true
        };
    } else {
        liveData.fb.isOnline = false;
    }

    if (ytRaw.isOnline) {
        liveData.yt = {
            cache: ytRaw.cache || 0,
            status: ytRaw.status,
            duration: ytRaw.duration,
            bitrate: ytRaw.bitrate,
            effectiveVideoFormat: ytRaw.effectiveVideoFormat,
            quality: ytRaw.quality,
            isOnline: true
        };
    } else {
        liveData.yt.isOnline = false;
    }
}, 1000);

// EXPOSED API ENDPOINT: This is where alarm.html will look for data
app.get('/api/relay', (req, res) => {
    res.json(liveData);
});

app.listen(PORT, () => {
    console.log(`Relay Server actively running on port ${PORT}`);
});