import { useQuery } from '@tanstack/react-query';
import { jobApi } from '@/core/services/job.service'; // Sử dụng jobApi
import { toast } from 'react-toastify';
import Header from '@/components/landing/Header';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import { BiBrain } from 'react-icons/bi';
export default function JobBoard() {
  const { data: jobListings = [], isLoading, isError } = useQuery({
    queryKey: ['jobs'], 
    queryFn: async () => {
      try {
        return await jobApi.listJobs(); 
      } catch (error) {
        toast.error('Failed to load jobs!');
        throw error;
      }
    },
    retry: false,
  });

  // Tính số ngày còn lại để nộp đơn
  const calculateDaysLeft = (endTime) => {
    const endDate = new Date(endTime);
    const today = new Date();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : 'Closed';
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading jobs!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Ảnh và thanh điều hướng */}
        <div className="relative">
      <img
        src="https://github.com/meishenry/HireNova/blob/main/%E1%BB%A8ng%20Vi%C3%AAn/M%C3%B4%20t%E1%BA%A3%20c%C3%B4ng%20vi%E1%BB%87c%20khi%20ch%C6%B0a%20apply%20(%E1%BB%A9ng%20vi%C3%AAn)/images/main-image.jpg?raw=true"
        alt="Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <div className="relative w-[180px]">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="">Choose Location</option>
              <option value="danang">Da Nang</option>
              <option value="hanoi">Ha Noi</option>
              <option value="hcm">TP. Ho Chi Minh</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="relative w-[180px]">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <option value="">Search By Level</option>
                <option value="Intern">Intern</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid-level</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Tech Lead</option>
                <option value="Architect">Solution Architect</option>
                <option value="Manager">Engineering Manager</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-between gap-2">
            <span>AI Support</span> {/* Văn bản nằm trước */}
            <BiBrain className="text-blue-600 h-5 w-5" /> {/* Icon nằm sau */}
          </button>
        </div>
      </div>
    </div>

      <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

      {jobListings.map((job) => (
        <Link to={`/candidate/job/${job.id}`} key={job.id}> {/* Thêm liên kết */}
          <div className="mb-8 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{job.industryName}</h3>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold">{job.title}</h4>
                <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {calculateDaysLeft(job.endTime)}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}