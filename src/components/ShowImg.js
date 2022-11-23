import React from 'react';

const ShowImg = ({ item }) => {
    const { name, email } = item;
    return (
        <div className='border-double border-4 border-black-600 rounded-lg py-10 '>
            <div className='flex flex-col justify-center items-center'>
                <img className='ml-0' style={{ height: '150px', }} src={`https://avatars.dicebear.com/api/human/${name}.svg`} alt="" />
                <h1>Email: {email}</h1>
            </div>
        </div>
    );
};

export default ShowImg;