import React from "react";
import { Link } from "react-router-dom";

const Planyard = () => {
  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-center align-items-center">
          <div
            className="col d-flex flex-row  align-items-center"
            style={{ marginLeft: "370px" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Plan By Veseel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@fat"
            >
              Yard Clearence
            </button>
            {/* Back to Container laning page */}
            <Link to="/container_planning">
              <abbr
                title="back to yard planner"
                className="btn btn-outline-warning  "
              >
                X
              </abbr>
            </Link>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                    Plan By Veesel
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"F
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Activity:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected="">Select One</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                VIA:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Vessel:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Liner:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Pod:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected="">Select Pod</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Type:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected="">Select Type</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Categery:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected=""> select Categery</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Weight:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected="">Select weight</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Load Status:
                              </label>
                              <select className="form-select" aria-label="Default select example">

  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Model:
                              </label>
                              <select className="form-select" aria-label="Default select example">
 
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                            Directions:
                              </label>
                              <select className="form-select" aria-label="Default select example">
  <option selected="">Selcet One</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

                            </div>
                          </div>

                          
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Reset
                    </button>
                    <button type="button" className="btn btn-primary">
                   Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Planyard;
