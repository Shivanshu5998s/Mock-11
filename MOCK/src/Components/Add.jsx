import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

export const Add = () => {

  const [form, setForm] = useState(null);

  let navigate = useNavigate();

  const handleChange = (e) => {

    let { name, value } = e.target;

    setForm({
      ...form,
      availability: "Available",
      [name]: value,
    });
  };

  useEffect(() => { }, []);

  const add = (e) => {

    e.preventDefault();

    console.log(form);

    const payload = form;

    fetch("http://localhost:4000/pets", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      }

    }).then(() => {
      alert("Pet added to inventory !!")
      navigate("/success");
    });
  };

  return (
    <div id="addpet_div">
      <div className="main_head_div">Details Patient</div>
      <div className="form_div">
        <form onSubmit={add} id="add_form">
          <label htmlFor="name">
            Medicines  Name<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="med"
            type="text"
            placeholder="Medicines of Patient"
            required
          />
          <label htmlFor="name">
            Name<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name Of Patient"
            required
          />
          <label htmlFor="name">
            Amount<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Amount Pay"
            required
          />
          <label htmlFor="name">
            Photo<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="Image url"
            required
          />
          <select name="duration" onChange={handleChange} required>
            <option value="" hidden>
              Registration Duration
            </option>
            <option value="lifetime">Own for lifetime</option>
            <option value="1 year">for 1 year</option>
            <option value="2 year">for 2 year</option>
            <option value="3 year">for 3 year</option>
            <option value="4 year">for 4 year</option>
            <option value="5 year">for 5 year</option>

          </select>
          <input type="submit" value="Save" className="save_btn" />
        </form>
      </div>
    </div>
  );
};
