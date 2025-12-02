import { MdStorefront, MdShoppingBag } from 'react-icons/md';
import { FiShoppingCart, FiDollarSign, FiTrendingUp, FiUsers } from 'react-icons/fi';

const RetailerDashboard = () => {
  const stats = [
    { label: 'Daily Sales', value: '$3,450', icon: FiDollarSign, color: 'blue', trend: '+12%' },
    { label: 'Orders Today', value: '47', icon: FiShoppingCart, color: 'yellow', trend: '+8%' },
    { label: 'Total Customers', value: '2,345', icon: FiUsers, color: 'green', trend: '+15%' },
    { label: 'Top Products', value: '12', icon: FiTrendingUp, color: 'purple', trend: '+5%' }
  ];

  const recentSales = [
    { orderId: 'ORD001', customer: 'Alice Johnson', amount: '$125.00', items: 3, time: '10:30 AM' },
    { orderId: 'ORD002', customer: 'Bob Smith', amount: '$89.50', items: 2, time: '11:15 AM' },
    { orderId: 'ORD003', customer: 'Carol White', amount: '$210.00', items: 5, time: '12:00 PM' },
    { orderId: 'ORD004', customer: 'David Brown', amount: '$67.25', items: 1, time: '01:45 PM' }
  ];

  const inventoryAlerts = [
    { product: 'Smartphone Case', stock: 5, status: 'Low Stock' },
    { product: 'Wireless Earbuds', stock: 2, status: 'Critical' },
    { product: 'Phone Charger', stock: 8, status: 'Low Stock' }
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <MdShoppingBag className="text-blue-600" />
              Recent Sales
            </h2>
          </div>
          <div className="p-6 space-y-3">
            {recentSales.map((sale) => (
              <div key={sale.orderId} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div>
                  <p className="font-semibold text-gray-800">{sale.customer}</p>
                  <p className="text-sm text-gray-600">{sale.orderId} • {sale.items} items</p>
                  <p className="text-xs text-gray-500 mt-1">{sale.time}</p>
                </div>
                <p className="font-bold text-green-600 text-lg">{sale.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <MdStorefront className="text-red-600" />
              Inventory Alerts
            </h2>
          </div>
          <div className="p-6 space-y-3">
            {inventoryAlerts.map((alert, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-2 border-red-200 rounded-lg bg-red-50">
                <div>
                  <p className="font-semibold text-gray-800">{alert.product}</p>
                  <p className="text-sm text-gray-600">{alert.stock} units remaining</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  alert.status === 'Critical'
                    ? 'bg-red-500 text-white'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {alert.status}
                </span>
              </div>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Reorder Products
            </button>
          </div>
        </div>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Today's Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Target Sales</span>
              <span className="font-bold">$4,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Achieved</span>
              <span className="font-bold">$3,450</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '86.25%' }}></div>
            </div>
            <p className="text-sm">86.25% of daily target reached</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Rating</span>
              <span className="font-bold text-3xl">4.8/5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Reviews</span>
              <span className="font-bold">234 reviews</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm">Excellent customer feedback!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboard;
