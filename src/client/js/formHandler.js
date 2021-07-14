import { checkForName } from './nameChecker'
import CountryQuery from 'country-query'

export function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  checkForName(formText)

  const url = 'https://api.nationalize.io?name='
  fetch(url + formText)
    .then(res => res.json())
    .then(function(res) {
      let possibleCountries = []
      for (const country of res.country) {
        let place = CountryQuery.find('cca2', country.country_id)
        possibleCountries.push(place.name.common)
      }
      possibleCountries.join(', ')
      document.getElementById('results').innerHTML = possibleCountries
    })
}
