import React, { useState } from "react";
import "./PatientForm.css";
import { useFormik } from "formik";
import axios from "axios";
import PatientTable from "./PatientTable";
import { useEffect } from "react";

const PatientForm = () => {
  const baseURL = "http://localhost:3000/patient";
  const [patients, setPatients] = useState([]);

  const getPatients = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPatients();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      age: "",
      gender: "",
      idType: "",
      govIdNum: "",
      guardianType: "",
      guardian: "",
      email: "",
      emrgencyNumber: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      occupation: "",
      religion: "",
      maritalStatus: "",
      bloodGroup: "",
      nationality: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios.post(baseURL, values).then((response) => {
        setPatients([...patients, response.data]);
        resetForm({ values: "" });
      });
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={formik.handleSubmit} action="">
            <section id="personal-details">
              <h5>Personal Details</h5>
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    required
                  />
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    id="mobile"
                    className="form-control"
                    name="mobile"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                    required
                  />
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-7">
                      <label htmlFor="age">DOB or Age</label>
                      <input
                        type="date"
                        id="age"
                        className="form-control"
                        name="age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        required
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="gender">Sex</label>
                      <select
                        id="gender"
                        className="form-select"
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        required
                      >
                        <option value="male">Enter Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="idType">Govt Issued ID</label>
                      <select
                        id="idType"
                        className="form-select"
                        name="idType"
                        onChange={formik.handleChange}
                        value={formik.values.idType}
                        required
                      >
                        <option value="id">ID Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <label htmlFor="govIdNum"></label>
                      <input
                        type="number"
                        id="govIdNum"
                        className="form-control"
                        name="govIdNum"
                        onChange={formik.handleChange}
                        value={formik.values.govIdNum}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact-details">
              <h5>Contact Details</h5>
              <div className="row">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-5">
                      <label htmlFor="guardianType">Guardian Details</label>
                      <select
                        id="guardianType"
                        className="form-select"
                        name="guardianType"
                        onChange={formik.handleChange}
                        value={formik.values.guardianType}
                        required
                      >
                        <option value="Enter Label">Enter Label</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                    </div>
                    <div className="col-md-7">
                      <label htmlFor="guardian"></label>
                      <input
                        type="text"
                        id="guardian"
                        className="form-control"
                        name="guardian"
                        onChange={formik.handleChange}
                        value={formik.values.guardian}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="email">Enter Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="emrgencyNumber">
                        Emergency Contact Number
                      </label>
                      <input
                        type="number"
                        id="emrgencyNumber"
                        className="form-control"
                        name="emrgencyNumber"
                        onChange={formik.handleChange}
                        value={formik.values.emrgencyNumber}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="address-details">
              <h5>Address Details</h5>
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    required
                  />
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    className="form-control"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    required
                  />
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="state">State</label>
                      <select
                        id="state"
                        className="form-select"
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        required
                      >
                        <option value="state">Enter State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Uttarpradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city">City</label>
                      <select
                        id="city"
                        className="form-select"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        required
                      >
                        <option value="city">Enter City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control"
                      name="pincode"
                      onChange={formik.handleChange}
                      value={formik.values.pincode}
                      required
                    />
                  </div>
                </div>
              </div>
            </section>
            <section id="other-details">
              <h5>Other Details</h5>
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    className="form-control"
                    name="occupation"
                    onChange={formik.handleChange}
                    value={formik.values.occupation}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="religion">Religion</label>
                  <select
                    id="religion"
                    className="form-select"
                    name="religion"
                    onChange={formik.handleChange}
                    value={formik.values.religion}
                    required
                  >
                    <option value="religion">Enter Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Islam">Islam</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <select
                    id="maritalStatus"
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.maritalStatus}
                    name="maritalStatus"
                    required
                  >
                    <option value="null">Enter Marital Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="bloodGroup">Blood Group</label>
                  <select
                    id="bloodGroup"
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.bloodGroup}
                    name="bloodGroup"
                    required
                  >
                    <option value="blood-group">Blood Group</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    className="form-control"
                    name="nationality"
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                    required
                  />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <button
                    className="submit-btn me-3"
                    type="submit"
                    onClick={() =>
                      formik.resetForm({
                        values: "",
                      })
                    }
                  >
                    Cancel
                  </button>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <PatientTable patients={patients} />
        </div>
      </div>
    </div>
  );
};
export default PatientForm;
