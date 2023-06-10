export const addCourse = async (information) => {
    const responce = await fetch(`http://localhost:9000/newcourse`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(information)
    })
    const result = responce.json()
    return result

}