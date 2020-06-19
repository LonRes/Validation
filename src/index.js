export function parse(messages) {
    switch(typeof messages) {
        case 'string':
            return messages
        case 'object': {
            const children = Object.values(messages)
            const lists = children.reduce(
                (lists, child) => lists += `<li>${parse(child)}</li>`,
                ''
            )
            return `<ul>${lists}</ul>`
        }
        default:
            return ''
    }
}
