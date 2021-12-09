import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScanContainer } from "./Scan/ScanContainer"
import { BalanceContainer } from "./Balance/BalanceContainer"
import { ProfileContainer } from "./Profile/ProfileContainer";
import { Login } from "./User/Login";
import { Signup } from "./User/Signup"
import { DevLogin } from "./User/DevLogin"
import { TopAppBar } from "./Scaffold/TopAppBar"
import { BottomNavBar } from "./Scaffold/BottomNavBar"

import { AuthProvider } from "../contexts/Auth"

import { RemoteEventProvider } from "../contexts/RemoteEventProvider"
import { TransactionApproval } from "./Notification/TransactionApproval";

import { PrivateRoute } from "./Routes/PrivateRoute"



function App() {

  return (
    <div className="App">
      <Router>
          <AuthProvider>
            <RemoteEventProvider>

                <TopAppBar />
                
                <Routes>
                  
                  {/* Private Routes */}
                  <Route path='/' element={<PrivateRoute/>}>
                      <Route path='/scan' element={<ScanContainer/>} />                  
                      <Route path='/balance' element={<BalanceContainer/>} />
                      <Route path='/profile' element={<ProfileContainer/>} />
                      
                  </Route>
                  
                  {/* Public Routes */}
                  <Route path='*' element={<Login/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/signin' element={<Login/>} />
                  <Route path='/signup' element={<Signup/>} />
                  <Route path='/devlogin' element={<DevLogin/>} />
                  
                </Routes>

                <TransactionApproval />
                
                <BottomNavBar />
                
            </RemoteEventProvider>
          </AuthProvider>
      </Router>
    </div>
  );
}

export default App;