import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Dashboard = () => {

  const [data, setData] = useState([]);
  const [avlCount, setavlCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    getData();
    getAvilable();
  }, [filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const addNewPet = () => {
    navigate("/add");
  };

  const getAvilable = () => {

    fetch(`http://localhost:4000/pets?availability=Available`)
      .then((d) => d.json())
      .then((res) => {

        console.log("Available Patient:", res.length);

        setavlCount(res.length);
      });
  };

  const getData = () => {

    if (filter === "Remaining" || filter === "Done") {

      fetch(`http://localhost:4000/pets?availability=${filter}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
        });
    } else {

      fetch(`http://localhost:4000/pets`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          setTotal(res.length);

          console.log("Total Pateint :", res.length);
        });
    }

  };

  const removePet = (id) => {

    fetch(`http://localhost:4000/pets/${id}`, {
      method: "DELETE",
    })
      .then((d) => d.json())
      .then((res) => {
        getData();
        alert("Deleted Successfully!!");
      });
  };

  return (
    <div id="dashboard">
      <div className="main_head_div">
        <h1>All Patient</h1>
        <button id="addNewBtn" onClick={addNewPet}>
          Add New
        </button>
      </div>
      <div id="upper_div">
        <div id="upper_div_left">
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div id="upper_div_right">
          <div className="countDiv">
            <div>
              <p>Total Patient</p>
              <p className="petCount">{total}</p>
            </div>
            <div>
              <p>Total Completed</p>
              <p className="petCount">{total - avlCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="mid_div">
        <h2 id="sec_head">Patient Details</h2>
        <select name="filter" onChange={handleFilter}>
          <option value="" hidden>
            Filter by Status
          </option>
          <option value="all">Show all</option>
          <option value="Available">Available</option>
          <option value="Remaining">Remaining</option>
        </select>
      </div>
      <div className="tableDiv">
        <table>
          <tr id="upper_tr">
            <th>S.No</th>
            <th>Name</th>
            <th>Medicines Name</th>
            <th>Amount (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.med}</td>
              <td>₹ {e.price}</td>
              <td>{e.availability}</td>
              <td>
                <button className="actionBtn">
                  <Link to={`/edit/${e.id}`}>🖊️</Link>
                </button>
                <button
                  className="actionBtn"
                  onClick={() => {
                    removePet(e.id);
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
