const BASE_URL = "https://vendorapp-209vjvc9q-himanshiagrawal09199-gmailcom.vercel.app"

export const getHello = async () => {
    const response = await fetch(`${BASE_URL}api/users`)
    const json = await response.json()

    return json;
}
// posting a new user
export async function addHello(formData){
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}

// Update a new user
export async function updateHello(HelloId, formData){
    const Options = {
        method : 'PUT',
        headers : { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/users/${HelloId}`, Options)
    const json = await response.json()
    return json;
}
// Delete a new user
export async function deleteHello(HelloId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }
  const response = await fetch(`${BASE_URL}api/users/${HelloId}`, Options)
    const json = await response.json()
    return json;
}