export const hasError = (value, method, message) => {
    const result = method(value);

    result && alert(message);
    return result;
}