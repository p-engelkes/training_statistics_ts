export const required = (value:any) => (value ? undefined : 'Required')

export const validateEmail = (value: any) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined