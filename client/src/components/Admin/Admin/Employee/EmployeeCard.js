import { useState, useEffect } from 'react'
import images from "./employee.jpg"
import  './EmployeeCard.css';

  const ViewEmployeeCard = () => {
  const [data, setData] = useState([])
  // const {image, fullName, age, department} = employee;
   const EmployeeData = [
             
        {
          image: images,
          fullName: "John Doe",
          age: 30,
          department: "Engineer",
          id: 1
        },
        {
          image: images,
          fullName: "Jane Smith",
          age: 25,
          department: "Product",
          id: 2
        },
        {
          image: images,
          fullName: "Andrew Amos",
          age: 20,
          department: "Security",
          id: 3
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 4
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 5
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 6
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 7
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 8
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 9
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 10
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
          id: 11
        },
        {
          image: images,
          fullName: "Bernard Abiodun",
          age: 22,
          department: "IT",
          id: 12
        },

   ];
   useEffect(() => {
    // Function to fetch data from the API endpoint
    // async function fetchData() {
    //   try {
    //     const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }

    // fetchData();
    
    setData(EmployeeData)
  }, []);

   const handleDelete = async (itemId) => {
    // try {
    //   // Perform the delete operation on the API endpoint
    //   await fetch(`https://api.example.com/data/${itemId}`, {
    //     method: 'DELETE',
    //   });
    let con = prompt("Confirm your password");
    // if(con == )
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    //   setData(() => prevData.filter((item) => item.id !== itemId));
    // } catch (error) {
    //   console.error('Error deleting item:', error);
    // }
  };

  return (
    <>
       <div className='major'>
          <h1 className='h2 text' >Company Employees</h1>
          <div className='container'>
              {data.map((employee)=>{
                return (
                <div className='card ' key={employee.id}>
                <div className='cardImage'>
                    <img src={employee.image} alt='' className='employeeimage' />
                </div>
                  <div className="employee-details">
                    <h2>{employee.fullName}</h2>
                    <p>Age: {employee.age}</p>
                    <p>Department: {employee.department}</p>
                  </div>
                  <button className='btn btn-primary cardButton' onClick={() => handleDelete(employee.id)}>Delete</button>
                </div>
            );
              })};
          </div>
              <button>Add Employee</button>
    </div>
   </>
  );
};

export default ViewEmployeeCard
