import { useState, useEffect } from 'react'
import  './EmployeeCard.css';
import { Link } from 'react-router-dom';

  const ViewEmployeeCard = () => {
  const [data, setData] = useState([])
  const [error, setError]= useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [selectedItemId, setSelectedItemId] = useState(null)
   useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5002/admin/viewEmployees'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    
  }, []);

  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

   const handleDelete = async (itemId) => {
    try {
      // if(password === req.password){
        // Perform the delete operation on the API endpoint
        await fetch(`http://localhost:5002/admin/viewEmployees/${itemId}`, {
          method: 'DELETE',
        });
      // let con = prompt("Confirm your password");
      // // if(con == )
        setData((prevData) => prevData.filter((item) => item._id !== itemId));
        // const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        // modal.hide();
      // } else {
      //   setPasswordError('Wrong Password')
      //   alert(passwordError)
      // }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
       <div className='major'>
          <h1 className='h2 text' >Company Employees</h1>
          <div className='container'>
              {data.map((employee)=>{
                return (
                <div className='card ' key={employee._id}>
                <div className='cardImage'>
                    <img src={employee.image} alt='' className='employeeimage' />
                </div>
                  <div className="employee-details">
                    <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
                    <p>Age: {employee.age}</p>
                    <p>Department: {employee.department}</p>
                  </div>
                  
                  <button
            type="button"
            className="btn btn-primary cardButton"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setSelectedItemId(employee._id)} // Set the selected item ID
          >
            Delete
          </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <input type='password' onChange={handlePassword} />
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            );
              })};
              <p>{error}</p>
          </div>
              <button className='addEmployeeBtn'><Link to="/addEmployee">Add Employee</Link></button>

          
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
 */}

    </div>
   </>
  );
};

export default ViewEmployeeCard
