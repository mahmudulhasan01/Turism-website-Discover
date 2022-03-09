import React from "react";
import { Link } from "react-router-dom";

const BookingModel = () => {
  return (
    <div className="">
      <div className="container row my-5">
        <div className="col shadow-lg d-flex justify-content-center align-items-center">
          <div className="text-start">
            <h2 className="fw-bold">cox bazerrrr</h2>
            <h4>
              <i className="fw-bolder text-danger">From $777</i>
            </h4>
            <p className="text-info text-decoration-underline">
              Lowest Price Guarantee
            </p>
            <input
              className="w-100 py-2 px-5 mb-3 rounded  text-danger"
              type="date"
              value="2021-11-01"
              placeholder=""
            />
            <br />
            {/* --------------------------- */}
            <input
              className="w-100 py-2 mb-3 px-5 rounded  text-danger"
              placeholder="Number of travelers"
              type="number"
            />
            <input
              className="w-100 py-2 mb-3 px-5 rounded  text-danger"
              placeholder="Name"
              type="text"
              required
            />
            <input
              className="w-100 py-2 mb-3 px-5 rounded  text-danger"
              placeholder="Email"
              type="text"
              required
            />
            <input
              className="w-100 py-2 mb-3 px-5 rounded  text-danger"
              placeholder="Phone"
              type="text"
              required
            />

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Massage
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <br />
            <Link to="/mybooking">
              <button
                // onClick={() => handleAddToMyOrder(tourSpot)}
                className="btn btn-danger mb-3 btn-lg w-100 text-light fw-bold"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
