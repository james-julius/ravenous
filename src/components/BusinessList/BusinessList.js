import React from 'react';
import 'businesslist.css'
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {(
        <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    )}
}

export {BusinessList};