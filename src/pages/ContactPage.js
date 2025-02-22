import React, { useState, useEffect } from "react";

const fieldTypes = ["text", "number", "email", "password"];

export default function DynamicForm() {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setSubmittedData(storedData);
    }
  }, []);

  const addField = () => {
    setFields([...fields, { id: Date.now(), name: "", type: "text" }]);
  };

  const updateField = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    setSubmittedData(jsonData);
    localStorage.setItem("formData", jsonData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Dynamic Form Generator</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addField}>Add Field</button>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 items-center">
              <input
                type="text"
                placeholder="Field Name"
                value={field.name}
                onChange={(e) => updateField(index, "name", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-1/3"
              />
              <select
                value={field.type}
                onChange={(e) => updateField(index, "type", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-1/3"
              >
                {fieldTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                type={field.type}
                placeholder={`Enter ${field.name}`}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-1/3"
              />
            </div>
          ))}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
      {submittedData && (
        <pre className="mt-4 p-4 bg-gray-100 rounded">{submittedData}</pre>
      )}
    </div>
  );
}
