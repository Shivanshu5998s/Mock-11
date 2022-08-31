import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

export const Edit = () => {

  const [form, setForm] = useState(null);

  let navigate = useNavigate();
  let id = useParams();

  const handleChange = (e) => {

    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const update = (e) => {

    e.preventDefault();

    console.log(form);

    const payload = form;

    fetch(`http://localhost:4000/pets/${id.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      alert("Updated Successfully !!")
      navigate("/success");
    });
  };

  return (
    <div id="editpet_div">
      <div className="main_head_div">Patient</div>
      <div className="form_div">
        <h2>Update the Patient</h2>
        <p>updates about Patient</p>
        <form onSubmit={update} id="edit_form">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="med"
            type="text"
            placeholder="Name"

          />
          <label htmlFor="name">Medicines Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Medicines Name"

          />
          <label htmlFor="name">Amount</label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Amount Pay"

          />
          <label htmlFor="name">Photo</label>
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="Image url"

          />
          <label htmlFor="availability">Status</label>
          <select name="availability" onChange={handleChange} >
            <option value="" hidden>
              Status
            </option>
            <option value="Available">Visited</option>
            <option value="Adopted">appointment</option>
          </select>
          <select name="duration" onChange={handleChange} >
            <option value="" hidden>
              Registration Duration / period
            </option>
            <option value="lifetime">Own for lifetime</option>
            <option value="1 year">Adopt for 1 year</option>
          </select>

          <input type="submit" value="Update" className="update_btn" />
        </form>
      </div>
    </div>
  );
};
