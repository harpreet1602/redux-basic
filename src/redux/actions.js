// what to do 
// action return kar rha hai

export const incrementActionCreator = (value) => {
    return ({
        type: "INCREMENT",
        payload: value,
    });
};

export const decrementActionCreator = () => {
    return{
        type: "DECREMENT",
    };
};

export const loginActionCreator = () => {
    return {
        type: "LOGIN",
    };
};

export const logoutActionCreator = () => {
    return {
        type: "LOGOUT",
    };
};




