const validateEmail = (email) => { 
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    if (email === "") return { status: false, message: "Missing field" }
    if (!re.test(email)) {
        return { status: false, message: " Invalid Email" }
    };
    return { status: true, message: "Valid Email" };
}
const validatePassword = (password) => { 
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password === "") return { status: false, message: "Missing field" }
}

export { validateEmail, validatePassword };