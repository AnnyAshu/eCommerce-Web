import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return <div>Welcome to Dashboard {user?.email} </div>;
};

export default Dashboard;
