import React from 'react'
import { useState, useEffect } from 'react'
import { readUsers } from '../utils'

const ReadUsers = () => {
    const [usernames, setUsernames] = useState()

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        // await readUsers()
        let users = await readUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        <div>
            {usernames?.length > 0
                ? (
                    <div>
                        {usernames.map((user) => (
                            <div>
                                <h3>{user}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h3>No users found</h3>
                    </div>
                )
            }
        </div>
    )
}

export default ReadUsers