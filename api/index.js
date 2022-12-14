const app = require('./src/server');
const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    console.log(`API:${PORT}`);
});