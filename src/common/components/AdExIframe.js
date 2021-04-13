import React from "react"
import PropTypes from "prop-types"

function AdExIframe({ width, height, src, className }) {
  return (
    <iframe
      src={src}
      width={`${width}`}
      height={`${height}`}
      scrolling="no"
      frameborder="0"
      style={{ border: 0 }}
      className={className}
      onload="window.addEventListener('message', function(ev) { 
               if (ev.data.hasOwnProperty('adexHeight') && ('https://viewm.moonicorn.network' === ev.origin)) {
                for (let f of document.getElementsByTagName('iframe')) {	
                  if (f.contentWindow === ev.source) {
                    f.height = ev.data.adexHeight;
                  }
                }
               }
             }, false)"
    ></iframe>
  )
}

AdExIframe.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
}

export default AdExIframe
