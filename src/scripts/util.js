export const generateKey = () =>
  Math.random().toString() + new Date().getTime().toString()
