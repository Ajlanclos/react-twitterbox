import React from 'react';
import PropTypes from 'prop-types';

// Material UI imports
import RaisedBtn from 'material-ui/RaisedButton';

const raisedBtnStyle = {
    margin: 10,
    color: "#FFFFFF"
};

const TwitterModuleFooter = () => {
    
    return (
        <div className="foot">
            <RaisedBtn backgroundColor="#4DD0E1" style={raisedBtnStyle}>
                
                <i className="fa fa-bolt"></i> Follow</RaisedBtn>
        </div>
    );
};

export default TwitterModuleFooter;