const url = "http://localhost:8080";

const getUsers = () => {
    return fetch(url + "/users")
        .then(value => value.json())
}
const postNewUser = (user) => {
    return fetch(url + "/user", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}

export {getUsers, postNewUser};