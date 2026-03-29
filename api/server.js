const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({
        name: 'Rakesh TT',
        role: 'Senior Frontend Developer',
        location: 'Gothenburg, Sweden',
        available: true,
        skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Docker', 'AWS'],
        experience: '7+ years',
        contact: 'rakeshyasht92@gmail.com',
        portfolio: 'https://rakeshtt.dev',
        message: 'Open to new opportunities — no sponsorship required'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'portfolio-api',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio API running on port ${PORT}`);
});