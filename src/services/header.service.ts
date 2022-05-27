const getAuthHeader = () => {
    const userStr = localStorage.getItem("user");
    let storage:any = null;

    if (userStr) {
        storage = JSON.parse(userStr);
    }

    if (storage && storage.access_token) {
        return {"auth": storage.access_token};
    } else {
        return {"auth": ""};
    }
};

const HeaderService = {
    getAuthHeader
};

export default HeaderService;
