import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateQuestion from './components/CreateQuestion';
import Layout from './components/Layout';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import QuestionsList from './components/QuestionsList';
import ReadQuestion from './components/ReadQuestion';
import Signup from './components/Signup';
import EditQuestion from './components/EditQuestion';
import LogIn from './components/LogIn'
import AddAnswer from './components/AddAnswer'
import EditAnswer from './components/EditAnswer'


export const UserContext = React.createContext(null)
export const DarkModeContext = React.createContext(null)

function App() {

  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=> {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setUser(JSON.parse(localUser))
    }
  },[])

  return ( 
    <UserContext.Provider value={{user:user, setUser: setUser}}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuestionsList />} />
          <Route path="signup" element={<Signup setUser={setUser} />} />
          <Route path="logout" element={<Logout />} />
          <Route path="login" element={<LogIn />} />

          


          <Route path="questions">
                <Route index element={<QuestionsList />} />
                <Route path=":id" element={<ReadQuestion/>} /> 

          <Route path="addanswer/:id" element={<AddAnswer/>} /> 
          <Route path="editanswer/:id" element={<EditAnswer/>} />
                
                <Route path="new" element={<CreateQuestion/>} />
                <Route path="edit/:id" element={<EditQuestion/>} />
               
          </Route>
        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </DarkModeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
