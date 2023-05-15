import react,  {useState, useEffect, useRef}from 'react';
import axios from 'axios';
import {Facebook, Twitter, Pinterest} from './../icons/OverviewShareIconsSVG.jsx'

export default function({itemInfo}) {
  const [slogan, setSlogan] = useState(itemInfo.slogan);
  const [description, setDescription] = useState(itemInfo.description);
  const [features, setFeatures] = useState(itemInfo.features)

  const facebookShareOnClick =() => {

    var window_location_encoded = encodeURI(window.location);
  	var share_link = "https://www.facebook.com/sharer/sharer.php?u="+window_location_encoded;
  	window.open(share_link,'_blank');

  }
  const facbookCurrentURL = `http://www.facebook.com/sharer.php?u=${window.location.href}`
  const twitterCurrentURL = `https://twitter.com/intent/tweet?url='${window.location.href}'`;
  const pinterestCurrentURL = `http://pinterest.com/pin/create/button/?url=${window.location.href}`

  return (
    <>
      <div className="sloganDiv">
        <b>{itemInfo.slogan}</b>
      </div>

      <div className="descriptionDiv">
        <p>{itemInfo.description}</p>
      </div>

      <div className="shareDiv" >

        <div className="facebookShareDiv" >
          <a href={facbookCurrentURL} target="_blank"><Facebook/></a>
        </div>

        <div className="twitterShareDiv"  >
          <a href={twitterCurrentURL} target="_blank"><Twitter/></a>
        </div>

        <div className="pinterestShareDiv">
        <a href={pinterestCurrentURL} target="_blank"><Pinterest/></a>
        </div>
      </div>

      <div className="featuresDiv">
        {itemInfo.features.map(e => {
          return (
            <p>{e.feature}: <span>{e.value}</span></p>

          )
        })}
      </div>

    </>
  )
}