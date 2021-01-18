import React from 'react';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Contact
          name="Nathan James"
          avatar="https://randomuser.me/api/portraits/men/11.jpg"
          online="online"
      />
    </div>
  );
}

export default App;
