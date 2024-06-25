import React from 'react'
import { Fragment } from "react";

export function RequestForm({ isOpen, onClose, children }) {
    return (
      <Fragment>
        {isOpen && (
          <div className="overlay">
            <div className="overlay__background" onClick={onClose} />
            <div className="overlay__container">
              <div className="overlay__controls">
                <button
                  className="overlay__close"
                  type="button"
                  onClick={onClose}
                />
              </div>
              {children}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  
  export default RequestForm;