import React from 'react';

const videos = [
    {
        name: 'видео 1',
        duration: 15,
        id: 1,
    },
    {
        name: 'видео 2',
        duration: 25,
        id: 2,
    },
    {
        name: 'видео 3',
        duration: 35,
        id: 3,
    },
];

export function VideoList() {
    return (
        <>
            <h1>Video list</h1>
            {videos.map((video) => (
                <div key={video.name}>
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                    <button>Лайк</button>
                </div>
            ))}
        </>
    );
}
