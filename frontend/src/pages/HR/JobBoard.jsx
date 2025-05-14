"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Search, Filter, Plus, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { jobApi } from "@/core/services/job.service";
import AddJobModal from "./Modal/AddJobModal";
import EditJobModal from "./Modal/EditJobModal";
import Header from "./components/HRHeader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function JobBoard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [status, setStatus] = useState("All Statuses");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);

  const statuses = ["All Statuses", "To Do", "In Progress", "Done", "Closed"];

  
  const { data: jobListings = [], isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        return await jobApi.listJobs(); 
      } catch (error) {
        toast.error("Failed to load jobs!");
        throw error;
      }
    },
    retry: false,
  });

  
  const locations = useMemo(() => {
    const uniqueLocations = new Set(jobListings.map((job) => job.location).filter(Boolean)); // Loại bỏ giá trị null/undefined
    return ["All Locations", ...Array.from(uniqueLocations)];
  }, [jobListings]);

  const filteredJobs = useMemo(() => {
    return jobListings.filter(
      (job) =>
        (searchTerm === "" ||
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (location === "All Locations" || job.location === location) &&
        (status === "All Statuses" || job.status === status)
    );
  }, [jobListings, searchTerm, location, status]);

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Done":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Handle View Details - Navigate to job detail page
  const handleViewDetails = (job) => {
    navigate(`/hr/job-detail/${job.id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading jobs!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with image */}
      <Header />
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-3xl font-bold mb-4">Job Opportunities</h1>
          <p className="text-lg max-w-2xl">Explore exciting careers and find your next professional challenge.</p>
        </div>
      </div>
      

      {/* Search and Filter Section */}
           <div className="container mx-auto -mt-2 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-4 items-center">

              {/* Search Input */}
              <div className="relative flex-grow min-w-[250px]">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  {location} <ChevronDown size={16} />
                </button>
                {showLocationDropdown && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setLocation(loc);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                >
                  {status} <ChevronDown size={16} />
                </button>
                {showStatusDropdown && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    {statuses.map((stat) => (
                      <div
                        key={stat}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setStatus(stat);
                          setShowStatusDropdown(false);
                        }}
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add New Job Button */}
            <div>
              <button
               onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Plus size={18} /> Add New Job
              </button>

               <AddJobModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
              {showEditModal && <EditJobModal job={selectedJob} onClose={() => setShowEditModal(false)} />}
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto p-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Filter className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-xl text-gray-600">No jobs match your current filters</p>
          </div>
        ) : (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 mb-4 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <span className="text-sm">{job.location}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className={`text-sm px-2 py-1 rounded ${getStatusColor(job.status)}`}>{job.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-end">
               <Link
               to={`/hr/job-detail/${job.id}`} key={job.id} 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                View Details
              </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}