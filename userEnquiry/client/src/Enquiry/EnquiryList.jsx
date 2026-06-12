export default function EnquiryList({
  enquiries,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-lg p-6 border border-blue-100">

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Enquiry List
      </h2>

      {enquiries.length === 0 ? (
        <p className="text-gray-400 text-center py-10">
          No enquiries found
        </p>
      ) : (
        <div className="overflow-auto max-h-[420px]">

          <table className="w-full text-sm">

            <thead>
              <tr className="bg-blue-50 text-gray-700">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="text-center border-b hover:bg-blue-50 transition"
                >
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.phone}</td>

                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}
    </div>
  );
}