const express = require('express');
const app = express();

// Port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
