const getAuthHeader = () => {
    const userStr = localStorage.getItem("user");
    let response:any = null;

    if (userStr) {
        response = JSON.parse(userStr);
    }

    if (response && response.access_token) {
        return {"auth": response.access_token};
    } else {
        return {"auth": ""};
    }
};

const HeaderService = {
    getAuthHeader
};

export default HeaderService;
