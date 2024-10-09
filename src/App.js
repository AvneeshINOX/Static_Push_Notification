import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addNotification,markasNotification,initializeNotifications, } from "./notification_slice/notificationSlice";
import Notification from './Notification';
import './App.css';
import { FaBell } from "react-icons/fa";

const MemoizedNotification = React.memo(Notification);
const App=()=>{
  const dispatch=useDispatch()
  const { notifications, count } = useSelector(state => state.notifications);

  const data=[
    {id:1, message:"This is the 1 message from the Karan side..", isRead:false},
    {id:2, message:"This is the 2 message from the Karan side..", isRead:false},
    {id:3, message:"This is the 3 message from the Karan side..", isRead:false},
    {id:4, message:"This is the 4 message from the Karan side..", isRead:false},
   
  ]

  const handleAddNotification=()=>{
    dispatch(addNotification(`New Notification ${notifications.length + 1}`));
  }
   const handleMarkAsRead=(id)=>{
    dispatch(markasNotification(id))
   }
  
   useEffect(()=>{
    dispatch(initializeNotifications(data))
   },[dispatch])


 return(
  <div className="App">
    {/* <FaBell/> */}
    <h1>Notification Hub</h1>
    <button onClick={handleAddNotification}>Add Notification</button>
     <div className="notif-div">
      <div className="icon"><FaBell/></div>
  {count>0 &&
      <div className="count">{count}</div>}
      </div>
    
    <div className="notification">
      {
        notifications.map(notification=>(
          <MemoizedNotification 
          key={notification.id}
          notification={notification}
          markasNotification={handleMarkAsRead}
          
          />
        )

        )
      }

    </div>

  </div>
 )
}
export default App