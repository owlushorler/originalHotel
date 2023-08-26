import {useState, useEffect} from "react"
import axios from "axios"
import "./Feedback.css"

function Feedback (){
    const [data, setData] = useState() 


    async function fetchData(){
        try{
        const response = await axios.get('http://localhost:5002/api/submit')
        setData(response.data)
    } catch (error){
        console.error("Error fetching data:", error.message)
    }
}
    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)

    return(
        <>
            <div className="major">
            <table className="Mtable">
            <thead >
                <tr >
                    <th className="Mhead">Customer's Name</th>
                    <th className="Mhead">Customer's Email</th>
                    <th className="Mhead">Subject</th>
                    <th className=" Mhead Mbody">Message</th>
                </tr>
            </thead>
            <tbody>
                {(data === []) ? data.map((item)=>{
                       <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>
                       </tr>                        
                    }) : (<h4 className="dataAvailable">No data available</h4>)
                }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Feedback
 