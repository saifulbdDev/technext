/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-var */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */

/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { UserPost } from '../../Context/userpostContext';

function Articles() {
  const { title, setTitle, body, setBody, articleUpdate, status } =
    useContext(UserPost);
  const history = useHistory();
  const golist = () => {
    history.push(`/profile`);
  };
  return (
    <section className="articlesList-section">
      <div className="container">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div
              className={`${
                status === 200 ? 'alert alert-success' : 'hide'
              }`}
              role="alert"
            >
              Successfully Updated ( {title})
              <button className="ml-4 btn theme-btn" onClick={golist}>
                Go List
              </button>
            </div>
            <from className={`${status === 200 ? 'hide' : 'show'}`}>
              <div className="mb-3">
                <label className="form-label">Post title</label>
                <input
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  placeholder=" Post title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="form-control"
                  rows="5"
                />
              </div>
              <button
                className="btn theme-btn"
                onClick={() => articleUpdate()}
              >
                update
              </button>
            </from>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Articles);
