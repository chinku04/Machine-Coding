import { useState } from "react";

const ValidateForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form Submitted Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}
      <input name="password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidateForm;