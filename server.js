const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(ape_routes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});