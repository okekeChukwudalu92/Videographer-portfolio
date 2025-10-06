import React from 'react';
import './VideoModal.css'

const VideoModal = ({videoId, OnClose}) => {
    if(!videoId) return null
  return (
    <div className="modal-overlay" onClick={OnClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <iframe
             width="100%"
             height="315"
             src={`http://www.youtube.com/embed/${videoId}?autoplay=1`}
             frameborder="0"
             title='Project Video'
             allow='autoplay; encrypted-media'
             allowFullScreen
             ></iframe>
             <button className="close-btn"
             onClick={OnClose}>X</button>
        </div>
    </div>
  )
}

export default VideoModal