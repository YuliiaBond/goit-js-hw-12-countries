import { error } from '@pnotify/core';

export default function errorNotFound() {
    error({
        title: 'Oops!',
        text: 'This is not a real country. Please try again with another query!',
        delay: 1000,
    });
}