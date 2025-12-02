import { MdWarehouse, MdTrendingUp } from 'react-icons/md';
import { FiShoppingCart, FiDollarSign, FiUsers, FiPackage } from 'react-icons/fi';

const WholesellerDashboard = () => {
  const stats = [
    { label: 'Total Inventory', value: '45,678', icon: FiPackage, color: 'blue', trend: '+10%' },
    { label: 'Active Orders', value: '234', icon: FiShoppingCart, color: 'yellow', trend: '+7%' },
    { label: 'Monthly Revenue', value: '$125K', icon: FiDollarSign, color: 'green', trend: '+18%' },
    { label: 'Retail Partners', value: '89', icon: FiUsers, color: 'purple', trend: '+5%' }
  ];

  const topProducts = [
    { name: 'Electronics Bundle A', sold: 450, revenue: '$22,500', stock: 1200 },
    { name: 'Home Appliances Set', sold: 380, revenue: '$19,000', stock: 890 },
    { name: 'Industrial Tools Kit', sold: 320, revenue: '$16,000', stock: 650 },
    { name: 'Office Supplies Pack', sold: 290, revenue: '$14,500', stock: 1500 }
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-2 font-semibold">{stat.trend}</p>
                </div>
                <div className={`${colorClasses[stat.color]} p-4 rounded-full`}>
                  <Icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Selling Products */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MdTrendingUp className="text-blue-600" />
            Top Selling Products
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Stock Level
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {product.sold}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    {product.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {product.stock} units
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Sales Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Monthly Target</span>
              <span className="font-bold">$150,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Achieved</span>
              <span className="font-bold">$125,000</span>
            </div>
            <div className="w-full bg-green-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '83.3%' }}></div>
            </div>
            <p className="text-sm">83.3% of monthly target reached</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Warehouse Capacity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Total Capacity</span>
              <span className="font-bold">100,000 units</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Current Stock</span>
              <span className="font-bold">45,678 units</span>
            </div>
            <div className="w-full bg-purple-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '45.7%' }}></div>
            </div>
            <p className="text-sm">54.3% capacity available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholesellerDashboard;
