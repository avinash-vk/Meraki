import React from 'react';

const Map = () => {
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            style={{
              height: '60vh',
            }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
          <a href="https://www.embedgooglemap.net" />
        </div>
      </div>
    </div>
  );
};

export default Map;
