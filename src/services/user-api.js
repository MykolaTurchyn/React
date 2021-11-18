const url = "http://localhost:8080";

const getUsers = () => {
    return fetch(url + "/get_users")
        .then(value => value.json())
}

const addUser = (user) => {
    return fetch(url + "/add_user", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}
// const deleteUser = () => {
//     return fetch(url + "/get_users")
//         .then(value => value.json())
// }

export {getUsers, addUser};