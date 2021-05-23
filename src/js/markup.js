import countriesList from '../templates/countries-list.hbs';
import countryTpl from '../templates/countryTpl.hbs';
import getRefs from './get-refs';
import { notification } from './notify';

export default { renderMarkup, clearMarkup };

const refs = getRefs();

function renderMarkup(data) {
    const { length } = data;

    if (length < 2) {
        renderCountryCardMarkup(data);
        return;
    }

    if (length >= 2 && length <= 10) {
        renderCountryListMarkup(data);
        return;
    }

    if (length > 10) {
        clearMarkup();
        notification('error', 'Too mahy matches found. Please enter a more specific query!');
        return;
    }
}

function renderCountryCardMarkup(data) {
    const markup = countryTpl(data);
    refs.cardBox.innerHTML = markup;
}

function renderCountryListMarkup(data) {
    const markup = countriesList(data);
    refs.cardBox.innerHTML = markup;
}

function clearMarkup() {
    refs.cardBox.innerHTML = '';
}