/* import React from 'react'

const getUserId = () => {

    const [name, setname] = useState('')

    const getAuthorName = (id) =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setname(res.data.name))
        .catch(err => console.log(err))

        return name
    }
    
    

return (
    null
  )
}

export default getUserId
export {getAuthorName}
 */