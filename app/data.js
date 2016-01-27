const PiecesData = [
  {
    name: 'StreetBeat',
    caption: {
      summary: 'Find live music events happening right now, right around you.',
      buildDetails: 'Built in Rails 4 and Postgresql, utilizing LeafletJS maps engine, Geocoder location services, and Eventful API.',
    },
    url: 'http://streetbeat.herokuapp.com/',
  },
  {
    name: 'Enrichual',
    caption: {
      summary: 'Find and implement simple rituals into your lifestyle to rhythmically enrich yourself.',
      buildDetails: 'Built in Rails 4 and MongoDB, utilizing clockwork scheduler and sidekiq and twilio API for telephone integration.',
    },
    url: 'http://www.enrichual.com/',
  },
  {
    name: 'Doo2Nite',
    caption: {
      summary: 'Realtime brainstorming and consensus building. Spend less time figuring out what to do and more time doing it.',
      buildDetails: 'Built with AngularJS front-end and Firebase backend.  Designed to be used on mobile devices.',
    },
    url: 'http://boovius.github.io/doo2nite/#/new',
  },
  {
    name: 'Shavasana',
    caption: {
      summary: 'Track the activities you want to do on a regular weekly/monthly basis simply. ',
      buildDetails: 'Built with AngularJS frontend and Ruby-Sinatra backend, featuring Facebook OAuth login.',
    },
    url: 'http://shavasana-server.herokuapp.com/',
  }
]

module.exports = PiecesData;

const LinksData = [
  {
    name: 'linkedin',
    url: '',
  },
  {
    name: 'github',
    url: 'https://github.com/boovius',
  }
]

module.exports = LinksData;
