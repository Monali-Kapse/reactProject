import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

const Update = () => {

  const { register, handleSubmit, setValue } = useForm()
  const { studentID } = useParams()
  const navigate = useNavigate()
  async function getData() {
    const result = await axios.get(`http://localhost:8080/students/${studentID}`)
    setValue('fname', result.data.fname)
    setValue('lname', result.data.lname)
    setValue('mothername', result.data.mothername)
    setValue('fathername', result.data.fathername)
    setValue('address', result.data.address)
    setValue('gender', result.data.gender)
    setValue('dob', result.data.dob)
    setValue('pincode', result.data.pincode)
    setValue('course', result.data.course)
    setValue('email', result.data.email)
  }

  useEffect(() => {
    getData()
  }, [])
  const updateData = (data) => {
    axios.put(`http://localhost:8080/students/${studentID}`, data)
    alert('Data updated !!!')
    navigate('/show')
  }
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample" className="img-fluid xyz"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit(updateData)}>
                        <h3 className="mb-5 text-uppercase">Update Student registration form</h3>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <label className="form-label" htmlFor="form3Example1m">First name</label>
                              <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('fname')} />

                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <label className="form-label" htmlFor="form3Example1n">Last name</label>
                              <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('lname')} />

                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                              <input type="text" id="form3Example1m1" className="form-control form-control-lg" {...register('mothername')} />

                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                              <input type="text" id="form3Example1n1" className="form-control form-control-lg" {...register('fathername')} />

                            </div>
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example8">Address</label>
                          <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address')} />

                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                              value="female" {...register('gender')} />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                              value="male" {...register('gender')} />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                              value="other" {...register('gender')} />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">

                            <select data-mdb-select-init {...register('state')}>
                              <option value="">State</option>
                              <option value="MAHARASHTRA">MAHARASTRA</option>
                              <option value="GUJARAT">GUJARAT</option>
                              <option value="GOA">GOA</option>
                            </select>

                          </div>
                          <div className="col-md-6 mb-4">

                            <select data-mdb-select-init {...register('city')}>
                              <option value="">City</option>
                              <option value="PUNE">PUNE</option>
                              <option value="MUMBAI">MUMBAI</option>
                              <option value="DEHLI">DELHI</option>
                            </select>

                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example9">DOB</label>
                          <input type="text" id="form3Example9" className="form-control form-control-lg" {...register('dob')} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example90">Pincode</label>
                          <input type="text" id="form3Example90" className="form-control form-control-lg" {...register('pincode')} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example99">Course</label>
                          <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('course')} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example97">Email ID</label>
                          <input type="text" id="form3Example97" className="form-control form-control-lg" {...register('email')} />

                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Update form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Update