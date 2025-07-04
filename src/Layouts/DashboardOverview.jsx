import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Spinner from "../Components/Spinner";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const initialGroup = useLoaderData();
  
  const [groups, setGroups] = useState(initialGroup || []);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://hobby-hub-server-tau.vercel.app/groups/by-email/${encodeURIComponent(user.email)}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyGroups(data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mt-12 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-lg font-semibold text-[#4F2FFB]">Total Groups</h2>
          <p className="text-3xl font-bold">{groups?.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-lg font-semibold text-[#4F2FFB]">My Groups</h2>
          <p className="text-3xl font-bold">{myGroups.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-lg font-semibold text-[#4F2FFB]">Logged-in User</h2>
          <p className="text-lg">{user?.displayName || user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;