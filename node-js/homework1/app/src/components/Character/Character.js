import React, {useEffect, useState} from 'react'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value)
            })
    }, []);

    return (
        <div>
            {
                users.map(value => {value.id})
            }
        </div>
    )
}

export default Character