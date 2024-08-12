import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Learn } from "./pages/learn";
import { Contact } from "./pages/community and support";

import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Logout } from "./pages/logout";

import { ExpenseTracking } from "./pages/expense tracking";
import { IncomeTracking } from "./pages/income tracking";
import { SavingsGoal } from "./pages/savings goal";
import { Budgeting } from "./pages/budgeting";

import { YourFinanceManager } from "./extra/your finance manager";
import { BestFinanceManager } from "./extra/best finance manager";
import { Article1 } from "./extra/article 1";
import { Article2 } from "./extra/article 2";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/expense tracking" element={<ExpenseTracking />} />
        <Route path="/income tracking" element={<IncomeTracking />} />
        <Route path="/savings goal" element={<SavingsGoal />} />
        <Route path="/budgeting" element={<Budgeting />} />
        
        <Route path="/your finance manager" element={<YourFinanceManager />} />
        <Route path="/best finance manager" element={<BestFinanceManager />} />
        <Route path="/article 1" element={<Article1 />} />
        <Route path="/article 2" element={<Article2 />} />
      </Routes>
    </BrowserRouter>
    </>
    );
};

export default App;