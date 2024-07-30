import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {

  const [stu, setStudent] = useState([])
  const [input, setInput] = useState('')


  async function getData() {
    const response = await axios.get('http://localhost:8080/students ')
    console.log(response)

    const result = response.data
    console.log(result)
    setStudent(result)
  }

  useEffect(() => {
    getData()
  }, [])

  const searchName = stu.filter((x) => {
    return x.fname.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <div>
      <h2 className='text-black text-center mt-3 fw-bold fs-1'>!!! Student Data !!!</h2>
       <input
        type='text'
        className='form-control mb-5 mt-3 mx-2'
        placeholder='Search Student First Name....'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

      <table className='table wt-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mother Name</th>
            <th>Father Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>State</th>
            <th>City</th>
            <th>DOB</th>
            <th>Pincode</th>
            <th>Course</th>
            <th>Email</th>
            <th colSpan={2} style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            searchName.map((s, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{s.fname}</td>
                  <td>{s.lname}</td>
                  <td>{s.mothername}</td>
                  <td>{s.fathername}</td>
                  <td>{s.address}</td>
                  <td>{s.gender}</td>
                  <td>{s.state}</td>
                  <td>{s.city}</td>
                  <td>{s.dob}</td>
                  <td>{s.pincode}</td>
                  <td>{s.course}</td>
                  <td>{s.email}</td>
                  <td>
                    <NavLink to={`/update/student/${s.id}`}>
                      <button className='btn btn-warning me-2'>Edit</button>
                    </NavLink></td>
                  <td>
                    <NavLink to={`/delete/student/${s.id}`}>
                      <button className='btn btn-danger'>Delete</button>
                    </NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Show