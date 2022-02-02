export function parse(messages) {
    return createList(messages);
}

function createList(messages, existingList = '') {
    existingList = existingList + '<ul>';
    for (const prop in messages) {
        existingList = existingList + '<li>';
        if (typeof messages[prop] === 'object') {
            existingList = createList(messages[prop], existingList);
        } else {
            existingList = existingList + messages[prop];
        }
        existingList = existingList + '</li>';
    }
    existingList = existingList + '</ul>';
    return existingList;
}
