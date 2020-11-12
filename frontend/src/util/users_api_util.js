import axios from "axios";

export const fetchUsers = () => {
    return axios.get('/api/users/')
}

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
    debugger
    return axios.patch(`/api/users/${data.id}`, data)
}

export const updatePicture = (formData) => {
    return axios.post(`/api/users/${formData.get("id")}/add-profile-pictures`, formData )
}

// export const updatePicture = (data) => {
//     return axios.post(`/api/users/add-profile-pictures` , data)
// }

