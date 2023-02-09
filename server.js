const express = require('express');
const app = express()


app.get('/', (request, response) => {
    response.send('What up bro?')
});


app.listen(3000, () => {
    console.log('Server live on port 3000...')
})