import API from './fetchCountries';
import error from './error';

import getRefs from './get-refs';
import markup from './markup';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
    const searchQuery = e.target.value;

    if (!searchQuery) {
        markup.clearMarkup();
        return;
    }

    API.fetchCountries(searchQuery)
        .then(markup.renderMarkup)
        .catch(data => {
            error();
        });
}
