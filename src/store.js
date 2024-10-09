// store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from "./notification_slice/notificationSlice"; // Ensure this path is correct

const store = configureStore({
    reducer: {
        notifications: notificationReducer,
    },
});

export default store;
