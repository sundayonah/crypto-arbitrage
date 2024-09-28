import Heading from './re_usable';

// components/Dashboard.tsx
const Dashboard = () => {
   return (
      <div className="">
         <div className="">
            <Heading title="Dashboard" />
         </div>

         <div className="h-screen bg-slate-100 px-8 py-4">
            <p>Welcome to the dashboard!</p>
         </div>
      </div>
   );
};

export default Dashboard;
