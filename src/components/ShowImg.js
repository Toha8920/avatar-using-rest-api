import React from 'react';

const ShowImg = ({ user }) => {
    const { name } = user;

    return (
        <div className='mt-10'>
            {name && <img style={{ height: '100px' }} src={`https://avatars.dicebear.com/api/human/${name}.svg`} alt="" />}
        </div>
    );
};

export default ShowImg;