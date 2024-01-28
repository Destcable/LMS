const authService = { 
    login: (email, password) => {
        return email === "demo@mail.ru" && password === "demo" ? true : false;
    }
};

export default authService;