import React from 'react';
import './addRooms.css';
// import image1 from '../images/image.png'
function AddRooms(){


return (
        <div className='room'>
            <div className='container1'>
            <h2 className='Room'>First Name</h2>
            <hr></hr>
                <h2 className='name'>Last Name</h2>
                <hr></hr>
            <div className='select1'>
                <select className='select'>
                    <option className='option'>Please Select</option>
                    <option className='option'>Standard Room</option>
                    <option className='option'>Suite</option>
                    <option className='option'>Excutive Room</option>
                    <option className='option'>Family Room</option>
                    <option className='option'>Connecting/Adjoining Room</option>
                    <option className='option'>Junior Suite</option>
                    <option className='option'>Penthouse Suite</option>
                    <option className='option'>Honeymoon Suite</option>
                </select>
                <div className='check1'>
                    <h2>Age</h2>
                    <input className='input'></input>
                </div>
            </div>
            <div>
               
                  <form>
                    <ul className='ul'>
                    </ul>
                     <label></label> <br/>
                    <input type='file' className="fileInput"/>
                    <label></label> <br/>
                    <input type='file' className="fileInput"/> 

                 </form> 
            </div>
                

            </div>
          


        </div>
)
}

export default AddRooms;