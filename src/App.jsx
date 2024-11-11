import { useState } from 'react';
import './App.css';
import notificationsData from './notifications'; 
import Notification from './notification'; 

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to clear a specific notification
  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App container my-5">
      <h1 className="mb-4">Notifications</h1>
      <p className="lead mb-4">Number of notifications: {notifications.length}</p>
      <div className="notifications-list list-group mb-4">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            name={notification.name}
            onClear={clearNotification}
          >
            {notification.message}
          </Notification>
        ))}
      </div>
      <button className="btn btn-danger" onClick={clearAllNotifications}>Clear All Notifications</button>
    </div>
  );
}

export default App;
