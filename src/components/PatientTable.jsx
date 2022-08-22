const PatientTable = ({ patients }) => {
  if (!patients) return "Loading.....";

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <h1 className="text-center pb-3">Patients Record</h1>
          <div className="col-md-12 table-responsive">
            <table className="table table-striped table-hover border-primary">
              <thead>
                <tr className="table-dark">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Gender</th>
                  <th scope="col">GovtID</th>
                  <th scope="col">Guardian</th>
                  <th scope="col">Email</th>
                  <th scope="col">EmergencyNum</th>
                  <th scope="col">Address</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Country</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">Religion</th>
                  <th scope="col">Maritial Status</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Nationality</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, key) => (
                  <tr key={key}>
                    <th>{patient.id}</th>
                    <td>{patient.name}</td>
                    <td>{patient.mobile}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>
                      {patient.idType}-{patient.govIdNum}
                    </td>
                    <td>
                      {patient.guardianType}.{patient.guardian}
                    </td>
                    <td>{patient.email}</td>
                    <td>{patient.emergencyNumber}</td>
                    <td>{patient.address}</td>
                    <td>{patient.state}</td>
                    <td>{patient.city}</td>
                    <td>{patient.country}</td>
                    <td>{patient.pincode}</td>
                    <td>{patient.occupation}</td>
                    <td>{patient.religion}</td>
                    <td>{patient.maritalStatus}</td>
                    <td>{patient.bloodGroup}</td>
                    <td>{patient.nationality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientTable;
