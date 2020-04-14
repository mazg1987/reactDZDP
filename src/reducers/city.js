export default function (state = "无锡", action) {
    switch (action.type) {
        case "CHANGECITY":
            return action.city;
        default:
            return state
    }
}