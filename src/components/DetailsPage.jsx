import React from 'react';
import './DetailsPage.css'


var datos = {
    "score": 0.8978111,
    "show": {
      "id": 6765,
      "url": "https://www.tvmaze.com/shows/6765/love",
      "name": "Love",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Comedy"
      ],
      "status": "Ended",
      "runtime": null,
      "averageRuntime": 31,
      "premiered": "2016-02-19",
      "ended": "2018-03-09",
      "officialSite": "https://www.netflix.com/title/80026506",
      "schedule": {
        "time": "",
        "days": [

        ]
      },
      "rating": {
        "average": 7.2
      },
      "weight": 89,
      "network": null,
      "webChannel": {
        "id": 1,
        "name": "Netflix",
        "country": null,
        "officialSite": "https://www.netflix.com/"
      },
      "dvdCountry": null,
      "externals": {
        "tvrage": 45061,
        "thetvdb": 305378,
        "imdb": "tt4061080"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/146/366945.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/146/366945.jpg"
      },
      "summary": "<p>Rebellious Mickey and good-natured Gus navigate the thrills and agonies of modern relationships.</p>",
      "updated": 1633293374,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/6765"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/1422794"
        }
      }
    }
  }
function DetailsPage() {
  return (
    <div className='mainContainer'>
        {/* image container */}
        <div className='imageContainer'>
        <img className='showImage' src={datos.show.image.original} alt="Show Cover" />
        </div>

        {/* Info container */}
        <div className='infoContainer'>
        <h1>{datos.show.name}</h1>
        <br />
            {datos.show.summary}
        <br />
            <p><span className='star'> &#9733;</span> {datos.show.rating.average}</p>
        <br />
            <a target="_blank" href={datos.show.officialSite}>Official website</a>

        </div>

    </div>
  )
}

export default DetailsPage