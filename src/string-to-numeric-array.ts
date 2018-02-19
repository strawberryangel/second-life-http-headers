export function stringToNumericArray(value: string, trimParenthesis: boolean = false): number[] {
    if (typeof value !== 'string')
        return []

    value = value.trim()

    if (trimParenthesis)
        value = value.slice(1, -2)

    return value.split(',').map(x => parseFloat(x) || 0)
}
