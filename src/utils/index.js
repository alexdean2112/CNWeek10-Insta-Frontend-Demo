export const createUser = async (username, email, password) => {
    try {
        const response = await fetch( "http://localhost:5001/createUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async (username, email, password) => {
    try {
        const response = await fetch( "http://localhost:5001/readUsers", {
            method: "GET",
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (username, email, password) => {
    try {
        const response = await fetch( "http://localhost:5001/updateUser", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "filter":{
                        "username":"Bob",
                        "email":"bob@email.com",
                        "password":"123"
                    },
                    "update":{
                        "username": username,
                        "email": email,
                        "password":password
                    }
                })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username, email, password) => {
    try {
        const response = await fetch( "http://localhost:5001/deleteUser", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}