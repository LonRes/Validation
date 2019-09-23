export function parse(messages) {
    const keys = Object.keys(messages);
    const values = keys.map(key => messages[key]);
    let result = values.reduce((acc, message, index) => {
        if (typeof message === 'string') {
            acc = `${acc}<li>${messages[keys[index]]}</li>`;
        }
        if (typeof message === 'object') {
            acc = `${acc}<li>${parse(message)}</li>`;
        }
        return acc;
    }, '<ul>');
    result = `${result}</ul>`;
    return result;
}
