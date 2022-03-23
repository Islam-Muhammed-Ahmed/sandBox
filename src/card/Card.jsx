import React from "react";

const mainCard = ({ data, deleteHandeler }) => {
  // console.log(deleteHandeler);

  return (
    <div className="col-sm-6 my-4 d-flex flex-wrap align-items-center justify-content-between w-100">
      {data &&
        data.map((user, idx) => (
          <div className="card" style={{ width: "18rem" }} key={user.id}>
            <img src={user.avatar_url} className="img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-capitalize">{user.login}</h5>
              <a
                href="https://github.com/Islam23"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                visit me
              </a>
              <button
                type="button"
                className="btn m-2 btn-outline-danger"
                onClick={(event) => deleteHandeler(event, idx)}
              >
                delete user !
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default mainCard;
