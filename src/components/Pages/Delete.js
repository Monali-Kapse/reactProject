import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Delete = () => {

    const {studentID} = useParams()
    const [student,setStudent] = useState({})
    const navigate = useNavigate()

   async function getData () {
        const response =await axios.get(`http://localhost:8080/students/${studentID} `)
        console.log(response)
        const result = (response.data)
        console.log(result)
        setStudent(result)
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteData = () => {
        axios.delete(`http://localhost:8080/students/${studentID}`)
        alert('Data Deleted !!!!')
        navigate('/show')
    }
    return(
        <div className="bg-warning w-50 mx-auto text-center rounded-3 mt-5 p-4">
           <h2>Delete Data For</h2>
           <h2>Student ID :{student.id}</h2>
           <h2>Student First Name :{student.fname}</h2>
           <h2>Student Last Name :{student.lname}</h2>
           <div>
            <button className="btn btn-danger me-2" onClick={deleteData}>YES</button>
            <NavLink to={'/show'}><button className="btn btn-success">NO</button></NavLink>
           </div>
        </div>
    )
}
export default Delete