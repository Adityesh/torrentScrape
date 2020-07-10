# Torrent Scrape

## Api for fetching torrents for various categories from TorrentFunk


### Categories

- Movies
- Games
- Software
- Ebooks
- Music

### Usage:

- Movies `/api/movies`
- Softwares `/api/software`
- Music `/api/music`
- Books `/api/books`
- Games `/api/games`
- Index route shows the top 50 from the site at that time


### Sample response from `/api/movies`

```
[
  {
    "name": "Hamilton (2020) [1080p] [WEBRip] [5.1] [YTS]YTS",
    "date": "3 Jul",
    "seeds": "3943",
    "peers": "975",
    "size": "3 GB",
    "url": "https://www.torrentfunk.com/tor/32155531.torrent"
  },
  {
    "name": "The Outpost (2020) [720p] [WEBRip] [YTS]YTS",
    "date": "3 Jul",
    "seeds": "3499",
    "peers": "631",
    "size": "1.1 GB",
    "url": "https://www.torrentfunk.com/tor/32142611.torrent"
  },
  {
    "name": "The Outpost (2020) [1080p] [WEBRip] [5.1] [YTS]YTS",
    "date": "3 Jul",
    "seeds": "2483",
    "peers": "1209",
    "size": "2.3 GB",
    "url": "https://www.torrentfunk.com/tor/32139679.torrent"
  }
]

```

### Setup

This torrent scrape api was built with NodeJS.
Packages involved:
- ExpressJS
- Cheerio
- Request
  
#### Run it locally

- You will need to have nodeJS installed on your system

- Clone the repo locally to your system
  `git clone https://github.com/Adityesh/torrentScrape`

- Install required packages with:
  `npm install` in the cloned directory

- Run the server with:
  `npm run dev`

- Head to `http:localhost:3000/` in your browser


