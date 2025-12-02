import { MdShoppingCart, MdFavorite, MdLocalOffer } from 'react-icons/md';
import { FiPackage, FiTruck, FiCheckCircle, FiClock } from 'react-icons/fi';

const ConsumerDashboard = () => {
  const stats = [
    { label: 'Active Orders', value: '3', icon: FiClock, color: 'blue', trend: 'In Progress' },
    { label: 'Delivered', value: '24', icon: FiCheckCircle, color: 'green', trend: 'This Month' },
    { label: 'Wishlist Items', value: '12', icon: MdFavorite, color: 'purple', trend: '3 on Sale' },
    { label: 'Saved Amount', value: '$145', icon: MdLocalOffer, color: 'yellow', trend: 'This Year' }
  ];

  const orders = [
    {
      orderId: 'ORD2024001',
      product: 'Wireless Bluetooth Headphones',
      status: 'In Transit',
      orderDate: '2024-11-28',
      expectedDate: '2024-12-03',
      amount: '$79.99',
      progress: 60
    },
    {
      orderId: 'ORD2024002',
      product: 'Smart Watch Series 5',
      status: 'Processing',
      orderDate: '2024-11-30',
      expectedDate: '2024-12-05',
      amount: '$249.99',
      progress: 20
    },
    {
      orderId: 'ORD2024003',
      product: 'Laptop Stand & Mouse Pad Set',
      status: 'Shipped',
      orderDate: '2024-11-25',
      expectedDate: '2024-12-02',
      amount: '$34.99',
      progress: 85
    }
  ];

  const recommendations = [
    { name: 'Premium Laptop Bag', price: '$89.99', discount: '20%', image: '💼' },
    { name: 'USB-C Hub 7-in-1', price: '$45.99', discount: '15%', image: '🔌' },
    { name: 'Wireless Mouse', price: '$29.99', discount: '25%', image: '🖱️' },
    { name: 'Keyboard RGB', price: '$119.99', discount: '10%', image: '⌨️' }
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  const statusColors = {
    'In Transit': 'bg-blue-100 text-blue-700',
    'Processing': 'bg-yellow-100 text-yellow-700',
    'Shipped': 'bg-green-100 text-green-700'
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
                  <p className="text-blue-600 text-sm mt-2 font-semibold">{stat.trend}</p>
                </div>
                <div className={`${colorClasses[stat.color]} p-4 rounded-full`}>
                  <Icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Tracking */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiPackage className="text-blue-600" />
            My Orders
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {orders.map((order) => (
            <div key={order.orderId} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-lg">{order.product}</p>
                  <p className="text-sm text-gray-600 mt-1">Order ID: {order.orderId}</p>
                  <p className="text-sm text-gray-600">Order Date: {order.orderDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-gray-800">{order.amount}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-2">
                    <FiTruck className="text-blue-600" />
                    Expected Delivery
                  </span>
                  <span className="font-semibold text-gray-800">{order.expectedDate}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-2.5 transition-all"
                    style={{ width: `${order.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">{order.progress}% Complete</p>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Track Order
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MdLocalOffer className="text-purple-600" />
            Recommended for You
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendations.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="text-5xl text-center mb-3 group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <h3 className="font-semibold text-gray-800 text-center mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-blue-600">{item.price}</p>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {item.discount} OFF
                  </span>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MdFavorite />
            Wishlist Summary
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Total Items</span>
              <span className="font-bold">12 items</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Items on Sale</span>
              <span className="font-bold">3 items</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Value</span>
              <span className="font-bold text-xl">$567.89</span>
            </div>
            <button className="w-full mt-3 bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              View Wishlist
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Rewards & Points</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Current Points</span>
              <span className="font-bold text-3xl">1,250</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Next Reward at</span>
              <span className="font-bold">1,500 points</span>
            </div>
            <div className="w-full bg-green-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '83.3%' }}></div>
            </div>
            <p className="text-sm">250 points to go for $10 off coupon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
