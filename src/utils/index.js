export const createUser = async (username, email, password, setter) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}createUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        setter({username: data.username})
        return data
    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}readUsers`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        const data = await response.json()
        console.log(data.users)
        const usernames = data.users.map(users => users.username)
        return usernames
    } catch (error) {
        console.log(error)
    }
}

export const updateUserPassword = async (username, password, setter2) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}updatePassword`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization": localStorage.getItem("token")},
            body: JSON.stringify(
                {
                    "filter":{
                        "username":username,
                    },
                    "update":{
                        "password":password
                    }
                })
        })
        const data = await response.json()
        setter2(data.message)
    } catch (error) {
        console.log(error)
    }
}

export const updateUserEmail = async (username, email, setter2) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}updateEmail`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization": localStorage.getItem("token")},
            body: JSON.stringify(
                {
                    "filter":{
                        "username":username,
                    },
                    "update":{
                        "email":email
                    }
                })
        })
        const data = await response.json()
        setter2(data.message)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username, email, password) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}deleteUser`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization": localStorage.getItem("token")},
            body: JSON.stringify({
                "username": username,
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, email, password, setter) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        setter({username: data.username})
        return data
    } catch (error) {
        console.log(error)
    }
}


