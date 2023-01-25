import React, {useEffect, useState} from 'react'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setUsers(value['results']);
            })
    }, []);

        users.map(value => 
        {
            if (value['id'] < 7) {
                return 
                   (<div key={value.id}>
                        {value['name']}
                    </div>)
                }
        }
        )
            
}

const formReturn = (props) => {
    return ()
}

export default Character