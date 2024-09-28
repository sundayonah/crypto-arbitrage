import { FC } from 'react';
import {
   Home as HomeIcon,
   DollarSign,
   CreditCard,
   Banknote,
   ShieldCheck,
   User,
   LogOut,
} from 'lucide-react';

const menuItems = [
   { name: 'Dashboard', icon: HomeIcon },
   { name: 'Deposit', icon: DollarSign },
   { name: 'Exchange', icon: CreditCard },
   { name: 'Withdraw', icon: Banknote },
   { name: 'Transactions', icon: CreditCard },
   { name: 'KYC Verification', icon: ShieldCheck },
   { name: 'My Account', icon: User },
   { name: 'Logout', icon: LogOut },
];

interface SideBarProps {
   activeMenu: string;
   setActiveMenu: (menu: string) => void;
}

const SideBar: FC<SideBarProps> = ({ activeMenu, setActiveMenu }) => {
   return (
      <div className="flex min-h-screen bg-gray-100">
         {/* Sidebar */}
         <aside className="w-64 bg-white shadow-md">
            <ul className="space-y-4 py-6 ">
               <h1 className="pl-4 font-bold">HOME</h1>
               {menuItems.map((item) => (
                  <li
                     key={item.name}
                     className={`flex items-center px-4 py-2 cursor-pointer ${
                        activeMenu === item.name
                           ? 'bg-gray-200 text-blue-500'
                           : 'text-gray-600'
                     }`}
                     onClick={() => setActiveMenu(item.name)}
                  >
                     <item.icon className="mr-3 h-6 w-6" />
                     {item.name}
                  </li>
               ))}
            </ul>
         </aside>
      </div>
   );
};

export default SideBar;
