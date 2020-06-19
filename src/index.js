export function parse(messages) {
    if(typeof messages === 'string') return messages

    if(typeof messages === 'object') {
        const children = Object.values(messages)
        const lists = children.reduce(
            (lists, child) => lists += `<li>${parse(child)}</li>`,
            ''
        )
        return `<ul>${lists}</ul>`
    }
}
