const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('src'));
app.listen(PORT, () => console.log(`Listen on ${PORT}`));
