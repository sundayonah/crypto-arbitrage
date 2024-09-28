'use client';

import { useState } from 'react';
import Dashboard from '@/components/dashboard';
import Deposit from '@/components/deposit';
import SideBar from '@/components/sideBar';
import Exchange from '@/components/exchange';
import Withdraw from '@/components/withdraw';
import Transactions from '@/components/transactions';
import KYC_Verification from '@/components/kycVerification';
import My_Account from '@/components/myAccount';
import LogOut from '@/components/logout';

export default function Home() {
   const [selectedMenu, setSelectedMenu] = useState('Dashboard');

   const renderContent = () => {
      switch (selectedMenu) {
         case 'Dashboard':
            return <Dashboard />;
         case 'Deposit':
            return <Deposit />;
         case 'Exchange':
            return <Exchange />;
         case 'Withdraw':
            return <Withdraw />;
         case 'Transactions':
            return <Transactions />;
         case 'KYC Verification':
            return <KYC_Verification />;
         case 'My Account':
            return <My_Account />;
         case 'Logout':
            return <LogOut />;
         default:
            return <Dashboard />;
      }
   };

   return (
      <div className="flex">
         {/* Pass selectedMenu and setSelectedMenu to SideBar */}
         <SideBar activeMenu={selectedMenu} setActiveMenu={setSelectedMenu} />
         {/* Render the content based on the selected menu */}
         <main className="flex-1 p-8">{renderContent()}</main>
      </div>
   );
}
