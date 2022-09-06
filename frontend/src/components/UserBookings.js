import axios from 'axios';
import swal from "sweetalert";
import {useState, useEffect} from 'react';
import moment from 'moment'


function UserBookings(){
//const [userId, setUserId] = useState();

const [bookings,setBookings] = useState([])
useEffect(
    ()=>{
        
        let mounted = true;
        axios.post('http://localhost:5000/api/userBookings',
        {
             
            userId:localStorage.getItem('userId')

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
                    <div className="form-container ">
                         <table className='striped responsive-table table-style'>
                         <thead className='green accent-4'>
                                <tr>
                                    <th>SNO</th>
                                    <th>Booking ID</th>                              
                                    <th className='email-style'>email</th>
                                    <th>No of rooms Booked</th>
                                    <th>Move In data</th>
                                    <th>Booked property name</th>
                                    <th>landlord Email</th>
                                    <th>LandLord Phone</th>
                                    <th>status</th>
                                    <th>action</th>
                                    
                                </tr>
                                </thead>
                        {
                             bookings.map((book,bookId)=>{
                                const deleteBooking= (bookId, e)=>{
                                    axios.post('http://localhost:5000/api/deleteBooking',
                                    {
                                        bookId:book.bookId
                                    }).then((res)=>{
                                      const status ={
                                          failed:res.data.failed,
                                          succeess:res.data.succeess
                                      }
                                      if(status.failed){
                                        swal({

                                            text:res.data,
                                            icon:'error'
                                        })
                                      }else{
                                          swal({
                                              text:res.data,
                                              icon:'success'
                                          })
                                      }
                                      
                                    })

                                }
                                
                              return(                          
                                                                  

                                <tbody className='striped table-style'  key ={bookId} >
                                <tr>
                                    <td>{bookId}</td>
                                    <td>{book.bookId}</td>                                    
                                    <td className='email-style'>{book.email}</td>
                                    <td>{book.noOfRooms}</td>
                                    <td>{moment(book.dateIn).format('YYYY/MM/DD')}</td>
                                    <td>{book.propertyName}</td>
                                    <td>{book.landlordEmail}</td>
                                    <td>{book.landlordPhone}</td>
                                    <td className='green accent-4 btn' >active</td>
                                    <td><button className='red darken-1 btn' onClick={deleteBooking} >DELETE</button></td>
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
export default UserBookings;