import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ cards }) {
  const email = localStorage.getItem("email")
  return (
    <div className="row mt-5">
      {cards.map((language) => (
        <div key={language.id} className="col-md-3 mb-4">
          <div className="card" style={{ width: "100%", borderRadius: "30px", height: "475px" }}>
            <img
              src={language.img}
              alt={language.title}
              style={{ height: "200px", borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
            />
            <div className="card-body d-flex flex-column justify-content-between" style={{ height: "300px" }}>
              <div>
                <h5 className="card-title h3">{language.title}</h5>
                <p className="card-text">{language.description}</p>
              </div>
              <div>
                {
                  email ? (
                    <Link
                      to={`/discuss/${language.title}`}
                      className="btn"
                      style={{
                        border: "2px solid azure",
                        marginRight: "5px",
                        borderRadius: "12px",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Learn More
                    </Link>
                  ) : (
                    <Link
                      to="/signup"
                      className="btn"
                      style={{
                        border: "2px solid azure",
                        marginRight: "5px",
                        borderRadius: "12px",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Learn More
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
