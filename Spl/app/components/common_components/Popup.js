import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
              {this.props.element}
            </div>
            {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
            <button type="button" onClick={this.props.closePopup}>
              close me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
