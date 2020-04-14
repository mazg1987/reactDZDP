export function add() {
    return {
        type: "ADD"
    }
}

export function sub() {
    return {
        type: "SUB"
    }
}

//模拟异步的
export function addAsync() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add())
        }, 1000)
    }
}

export function changeCity(newCity) {
    return {
        type: "CHANGECITY",
        city: newCity
    }
}