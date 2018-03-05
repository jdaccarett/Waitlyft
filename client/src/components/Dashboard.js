import React from "react";
import { Link } from "react-router-dom";
import TableList from './tables/TableList';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="">
                <Link to="/waitlist/new" className="">
                <i className="material-icons">add</i>
                </Link>
            </div>
            < TableList />
        </div>
    );
};

export default Dashboard;