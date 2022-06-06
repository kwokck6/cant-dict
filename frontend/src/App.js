// components
import NavBar from './components/NavBar';
import Entries from './components/Entries';
import Entry from "./components/Entry";
import Accordion from "./components/Accordion";
// pages
import Home from "./page/Home";
import AddEntry from './page/AddEntry';
import Usage from './page/Usage';
// libraries
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    const user = {
        user_name: 'KangSG6',
        isAuthed: true,
    };

    return (
        <div className="container" style={{padding: '60px 15px 0'}}>
            <NavBar user={user} />
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/add-entry" element={<AddEntry />} />
                    <Route path="/usage" element={<Usage />} />
                    <Route path="/words/:_id" element={<Entry />} />
                    {/* TODO: Add <Route path="/settings" element={<Settings />}> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
