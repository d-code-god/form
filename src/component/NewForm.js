import { useState } from "react";

const FormComponent = () => {
  const [form, setForm] = useState({
    fullname: "",
    gender: "",
    dob: "",
    phonenum: "",
    email: "",
    nationality: "",
    role: "",
    feedback: "",
    terms: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${FormData}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-auto h-screen p-5 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>
            Full Name:
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phonenum"
              value={form.phonenum}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </div>

        <div>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </div>

        <div>
          <label>
            {" "}
            Nationality:
            <input
              type="text"
              name="nationality"
              value={form.nationality}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </div>

        <div>
          <label>Role:</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="">Select Position</option>
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
            <option value="Product Designer">Product Designer</option>
            <option value="Gamer">Gamer</option>
            <option value="Creative">Creative</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Researcher">Researcher</option>
          </select>
        </div>

        <div>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            Accept Terms and Conditions
          </label>
        </div>

        <button type="submit" className="p-2 text-white bg-blue-500 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* <div className="mt-6">
        <p>Submitted Data:</p>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default FormComponent;
