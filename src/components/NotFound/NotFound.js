import React from 'react';
import notfound from '../../assets/img/404.jpg'

const NotFound = () => {
    return (
        <div className='mx-auto mt-5' style={{maxWidth: '400px'}}>
            <img style={{width: '100%'}} className="mx-auto" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;