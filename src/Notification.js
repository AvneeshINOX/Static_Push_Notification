import React from 'react';


const Notification = React.memo(({ notification, markasNotification}) => {
    return (
        <div 
            className={`notification hello ${notification.isRead ? 'read' : ''}`} 
            onClick={() => markasNotification(notification.id)}
        >
            <p>{notification.message}</p>
            {/* {!notification.isRead && <span>Unread</span>} */}
            
        </div>
    );
})

export default Notification;
