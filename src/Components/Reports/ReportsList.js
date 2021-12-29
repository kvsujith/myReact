import "./Reports_List.css"

import { Link } from "react-router-dom";

function ReportsList() {
  return (
    <div className="report_container section">
    
         <Link to="./today">  <div> Today   </div> </Link>
    
        <Link to="./month"><div>   Month </div></Link>
    </div>
    
  );
}

export default ReportsList;


