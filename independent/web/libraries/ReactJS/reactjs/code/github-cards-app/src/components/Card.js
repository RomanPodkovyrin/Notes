import React from 'react';
import '../index.css';

class Card extends React.Component{
    render() {
        const profile = this.props
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
            <img src={profile.avatar_url} />
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
          </div>
        )
    }
}

export default Card