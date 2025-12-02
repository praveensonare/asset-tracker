import { MdLocalShipping, MdLocationOn } from 'react-icons/md';
import { FiTruck, FiPackage, FiMapPin, FiClock } from 'react-icons/fi';

const LogisticProviderDashboard = () => {
  const stats = [
    { label: 'Active Shipments', value: '156', icon: FiTruck, color: 'blue', trend: '+8%' },
    { label: 'Pending Pickups', value: '23', icon: FiClock, color: 'yellow', trend: '+3%' },
    { label: 'Delivered Today', value: '67', icon: FiPackage, color: 'green', trend: '+15%' },
    { label: 'Active Routes', value: '12', icon: FiMapPin, color: 'purple', trend: '+2%' }
  ];

  const shipments = [
    { id: 'SH001', from: 'New York', to: 'Los Angeles', status: 'In Transit', eta: '2024-12-03', progress: 65 },
    { id: 'SH002', from: 'Chicago', to: 'Miami', status: 'In Transit', eta: '2024-12-04', progress: 45 },
    { id: 'SH003', from: 'Seattle', to: 'Boston', status: 'Pending', eta: '2024-12-05', progress: 10 },
    { id: 'SH004', from: 'Dallas', to: 'Denver', status: 'In Transit', eta: '2024-12-03', progress: 80 }
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

      {/* Active Shipments */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MdLocalShipping className="text-blue-600" />
            Active Shipments
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-800">{shipment.id}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MdLocationOn className="text-blue-600" />
                    {shipment.from} → {shipment.to}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  shipment.status === 'In Transit'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {shipment.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-800">{shipment.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2 transition-all"
                    style={{ width: `${shipment.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">ETA: {shipment.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Fleet Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Total Vehicles</span>
              <span className="font-bold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Active</span>
              <span className="font-bold">38</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Maintenance</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Idle</span>
              <span className="font-bold">2</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Delivery Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>On-Time Delivery</span>
              <span className="font-bold">96.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>This Month</span>
              <span className="font-bold">1,234 deliveries</span>
            </div>
            <div className="w-full bg-green-400 rounded-full h-3">
              <div className="bg-white rounded-full h-3" style={{ width: '96.5%' }}></div>
            </div>
            <p className="text-sm">Excellent performance this month!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticProviderDashboard;
