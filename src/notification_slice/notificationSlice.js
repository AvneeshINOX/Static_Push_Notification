import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    notifications:[],
    count:0
}

const notificationSlice=createSlice({
                 name:"notifications",
                 initialState,
                 reducers:{
                      addNotification:(state,action)=>{
                        const newNotification={
                            id: state.notifications.length + 1,
                            message:action.payload,
                            isRead:false
                        };
                        state.notifications.unshift(newNotification)
                        state.count+=1
                    },
                    markasNotification:(state,action)=>{
                        const notification=state.notifications.find(n=>n.id===action.payload);
                        if(notification && !notification.isRead){
                            notification.isRead = true;
                            state.count -=1
                            
                        }
                    },

                  
                    initializeNotifications:(state,action)=>{
                        state.notifications=action.payload;
                        state.count=action.payload.filter(n=>!n.isRead).length;
                    }
                 }


})

export const {addNotification,markasNotification,initializeNotifications,deleteNotification}=notificationSlice.actions;
export default notificationSlice.reducer;