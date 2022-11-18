const validateEmail = (email) => { 
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    if (email === "") return { status: false, message: "Missing field" }
}
const validatePassword = (password) => { }

export { validateEmail, validatePassword };