import { useState } from "react";
function FormComponent() {
  const [inputValue, setInupValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); alert(`Submitted: ${formData}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <label className="text-lg font-bold">Enter Your Name:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInupValue(e.target.value)}
      />
      <p>inputValue: {inputValue}</p>

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value={""}> Select an Option</option>
        <option value={"opt1"}>Option 1</option>
        <option value={""}>Option 2</option>
        <option value={""}>Option 3</option>
        <option value={""}>Option 4</option>
        <option value={""}>Option 5</option>
      </select>

      <p>selectedOption: {selectedOption}</p>
      
      
      <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)}/> 
      <button className='p-2 text-white bg-blue-500 rounded-md' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormComponent;
