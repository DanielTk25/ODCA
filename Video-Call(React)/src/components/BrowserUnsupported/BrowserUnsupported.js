import React from 'react';
import './BrowserUnsupported.css';

export default function BrowserUnsupported() {
  return (
    <p class="browser-unsupported">
      Looks like your browser does not support Online octor Consultation App Video Call hosted by netlify and running on daily.co video calling api
      <br />
      See&nbsp;
      <a href="https://docs.daily.co/docs/browsers">the official api page</a>
      &nbsp;for help getting on a supported browser version.
    </p>
  );
}
