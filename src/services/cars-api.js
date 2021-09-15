const url = "http://localhost:8080";

const getCars = () => {
    return fetch(url + "/getcars")
        .then(value => value.json())
}

const postCar = (car) => {
    return fetch(url + "/postcar", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
    })
    }
        export {getCars, postCar};