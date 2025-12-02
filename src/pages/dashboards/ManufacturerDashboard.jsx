import { MdFactory, MdTrendingUp, MdInventory, MdLocalShipping } from 'react-icons/md';
import { FiPackage, FiCheckCircle, FiClock } from 'react-icons/fi';

const ManufacturerDashboard = () => {
  const stats = [
    { label: 'Total Products', value: '1,234', icon: FiPackage, color: 'blue', trend: '+12%' },
    { label: 'Active Orders', value: '89', icon: FiClock, color: 'yellow', trend: '+5%' },
    { label: 'Completed Orders', value: '456', icon: FiCheckCircle, color: 'green', trend: '+8%' },
    { label: 'In Transit', value: '34', icon: MdLocalShipping, color: 'purple', trend: '+3%' }
  ];

  const recentProducts = [
    { id: 'P001', name: 'Industrial Pump Model X', quantity: 150, status: 'In Stock', date: '2024-12-01' },
    { id: 'P002', name: 'Heavy Machinery Part A', quantity: 75, status: 'Low Stock', date: '2024-12-01' },
    { id: 'P003', name: 'Electronic Component Set', quantity: 300, status: 'In Stock', date: '2024-11-30' },
    { id: 'P004', name: 'Steel Frame Assembly', quantity: 45, status: 'In Stock', date: '2024-11-30' }
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

      {/* Recent Products Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MdInventory className="text-blue-600" />
            Recent Products
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'In Stock'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {product.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Production Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Monthly Production</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Target</span>
              <span className="font-bold">10,000 units</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Achieved</span>
              <span className="font-bold">8,750 units</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '87.5%' }}></div>
            </div>
            <p className="text-sm">87.5% of monthly target achieved</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Quality Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Pass Rate</span>
              <span className="font-bold">98.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Defect Rate</span>
              <span className="font-bold">1.5%</span>
            </div>
            <div className="w-full bg-purple-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '98.5%' }}></div>
            </div>
            <p className="text-sm">Excellent quality performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerDashboard;
