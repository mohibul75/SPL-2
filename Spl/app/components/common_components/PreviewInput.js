import React from 'react';
import PropTypes from 'prop-types';

class PreviewInput extends React.Component {
  render() {
    return (
      <>
        <div className="form-group row">
          <label htmlFor="multi" className="col-sm-2 col-form-label">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,react/destructuring-assignment */}
            {this.props.label}
          </label>
          {/* <button type="button">Browse</button> */}
          <div className="col-sm-10">
            <input
              name={this.props.name}
              type="file"
              id="multi"
              onChange={this.props.onChange}
              multiple
            />
          </div>
        </div>
        <div className="form-group-row multi-preview">
          {(this.props.files || []).map(url => (
            <img src={url} alt="preview" className="rounded img-thumbnail"/>
          ))}
        </div>
        {this.props.error && <p>{this.props.error}</p>}
      </>
    );
  }
}

PreviewInput.defaultProps = {
  error: ''
};

PreviewInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  files: PropTypes.any
};

export default PreviewInput;
