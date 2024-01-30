const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImMxNjkxZjBhLTBjNzQtNDBhOS04NjhjLTIzODZmOWUxZWM5MC0xNzA2NjQwNDEzMjIxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZDE5MzVlOTgtYWRkZi00ZGZlLWEzZWYtMTM0NTc5YjNiMWMwIiwidHlwZSI6InQifQ.fEPygyIPIPYpy1fTzFGb2K61c98Kw3zkLpPMW4OOwIQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
