const useNotification = (title, options) => {
  if (!('notification' in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotification('can i---');
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

export default App;
