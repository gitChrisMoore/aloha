import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/Auth"
import { Dashboard } from "./Dashboard/Dashboard"

import { ScanContainer } from "./Scan/ScanContainer"
import { BalanceContainer } from "./Balance/BalanceContainer"

import { TopAppBar } from "./Scaffold/TopAppBar"
import { BottomNavBar } from "./Scaffold/BottomNavBar"

function App() {
  return (
    <div className="App">
      <Router>
          <AuthProvider>
                <TopAppBar />
                
                <Routes>
                  <Route path='/scan' element={<ScanContainer/>} />
                  <Route path='/balance' element={<BalanceContainer/>} />
                  <Route path='/profile' element={<ScanContainer/>} />
                  <Route path='*' element={<Dashboard/>} />
                </Routes>

                <BottomNavBar />
          </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
