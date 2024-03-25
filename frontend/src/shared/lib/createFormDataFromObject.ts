export const createFormDataFromObject = (object: Record<string, any>) => {
    const formData = new FormData()

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(object)) {
        const valueToAppend = Array.isArray(value) ? JSON.stringify(value) : value
        formData.append(key, valueToAppend)
    }

    return formData
}
