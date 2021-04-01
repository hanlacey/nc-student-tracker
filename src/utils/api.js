import axios from 'axios'

const studentApi = axios.create({
    baseURL: "https://nc-student-tracker.herokuapp.com/"
})


export const getStudents = () => {
    return studentApi.get('/api/students').then((res) => {
        return res.data.students
    })
}
