import { Sidebar } from "../../components";
import './styles.css';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-main">
      <Sidebar />
      <div>Main Dashboard</div>
    </div>
    </>
  )
}

export { Dashboard };