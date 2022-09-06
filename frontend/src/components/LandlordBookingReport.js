import axios from 'axios';
import swal from "sweetalert";
import {useState, useEffect} from 'react';
import moment from 'moment';


function LandlordBookingReport(){
//const [userId, setUserId] = useState();

const [bookings,setBookings] = useState([])
useEffect(
    ()=>{
        
        let mounted = true;
        axios.post('http://localhost:5000/api/landlordReport',
        {
             
            landlordId:localStorage.getItem('landlordId')

        }).then((res)=>{
            if(mounted){
                setBookings(res.data);

            }
         

        }).catch(err=>{console.log(err)})
        return function cleanup() {
          mounted = false
          console.log('unmounted')
      }
        
    },[]
)


return (
    <div >
       {(
           
           ()=>{
            if(!bookings){
                return(
                    <div className="form-container">
                        <p>Do not have any Booking...</p>
                    </div>
                )
            }else{
                return(
                    <div className="form-container">
                         <table className='striped responsive-table '>
                         <thead className='green accent-4'>
                                <tr>
                                    <th>SNO</th>
                                    <th>Booking ID</th>
                                    <th>User ID</th>
                                    <th>User Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Booked property name</th>
                                    <th>No of rooms Booked</th>
                                    <th>Move In data</th>  
                                    <th>Status</th>                               
                                </tr>
                                </thead>
                        {
                             bookings.map((book,bookId)=>{
                                                               
                              return(                                   
                                <tbody className='striped'  key ={bookId}>
                                <tr>
                                    <td>{bookId}</td>
                                    <td>{book.bookId}</td>
                                    <td>{book.userId}</td>
                                    <td>{book.userName}</td>
                                    <td>{book.phone}</td>
                                    <td>{book.email}</td>
                                    <td>{book.propertyName}</td>
                                    <td>{book.noOfRooms}</td>
                                    <td>{<td>{moment(book.dateIn).format('YYYY/MM/DD')}</td>}</td>                                    
                                    <td className='green accent-4 btn' >active</td>
                              </tr>
                                
                                </tbody>
                           
                        
                              )
                             })
                        }
                         </table>
                    </div>
                )
            }
           }
       )()}
    
    </div>
)
}
export default LandlordBookingReport;