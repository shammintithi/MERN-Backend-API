import { useState } from "react";
import EnquiryList from "./enquiry/EnquiryList";


export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [enquiries, setEnquiries] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setEnquiries(
        enquiries.map((item) =>
          item.id === editId ? { ...formData, id: editId } : item
        )
      );
      setEditId(null);
    } else {
      setEnquiries([
        ...enquiries,
        { ...formData, id: Date.now() },
      ]);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleDelete = (id) => {
    setEnquiries(enquiries.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-4">

     
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-blue-100">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Enquiry Management System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

         <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 border border-blue-100">

            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {editId ? "Update Enquiry" : "Add Enquiry"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                required
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                required
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                required
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition shadow-md hover:shadow-lg"
              >
                {editId ? "Update Enquiry" : "Submit Enquiry"}
              </button>

            </form>
          </div>

          <EnquiryList
          enquiries={enquiries}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />

        </div>
      </div>
    </div>
  );
}