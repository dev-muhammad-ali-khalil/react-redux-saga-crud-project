import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"

export const getStudentsAPI = async () => {
    return axios.get('/students')
}

export const getStudentByIdAPI = async (id) => {
    return axios.get(`/students/${id}`)
}

export const createStudentAPI = async (student) => {
    return axios.post('/students', student)
}

export const updateStudentAPI = async (student) => {
    return axios.patch(`/students/${student.id}`, student)
}

export const deleteStudentByIdAPI = async (id) => {
    return axios.delete(`/students/${id}`)
}