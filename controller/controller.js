const cheerio = require('cheerio');
const request = require('request');

module.exports =  {
    getTop50 : async (req, res) => {
        const uri = `https://www.torrentfunk.com/`

        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
 
    },

    getMovies : (req, res) => {
        const uri = `https://www.torrentfunk.com/movies.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
    },
    
    getGames : (req, res) => {
        const uri = `https://www.torrentfunk.com/games.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
    },

    getMusic : (req, res) => {
        const uri = `https://www.torrentfunk.com/music.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
    },

    getEbooks : (req, res) => {

        const uri = `https://www.torrentfunk.com/ebooks.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })

    },

    getTelevision : (req, res) => {
        const uri = `https://www.torrentfunk.com/television.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
    },

    getSoftware : (req, res) => {
        const uri = `https://www.torrentfunk.com/software.html`
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                
                $('table.tmain > tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        let id = $(item).first().find('a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                        torrent.name = $(item).first().find('a').text();
                        torrent.date = $(item).find('.tb').text();
                        torrent.seeds = $(item).find('.tul').text();
                        torrent.peers = $(item).find('.tdl').text();
                        torrent.size = $(item).find('.tc').first().text()
                        torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 
                    }
                    
                    
                    results.push(torrent)
                })
            }
            results.shift()
            res.json(results)
        })
    },

    getSearchResults : (req, res) => {
        let {query} = req.query;
        query = query.replace(/\s/,/\-/).toLowerCase();
        const uri = `https://www.torrentfunk.com/all/torrents/${query}.html?v=&smi=&sma=&i=250&sort=added&o=desc`
        
        request.get(uri, (error, response, body) => {
            let results = [];

            if(error) res.status(500).json({"error" : "Internal server error."})
            if(body) {

                const $ = cheerio.load(body);
                const table = $('table.tmain').toArray()[1]
                $(table).find('tbody > tr').each((i, item) => {
                    const torrent = {};
                    if(i !== 0) {
                        
                        
                        if($(item).first().find('div > a').attr('href') !== undefined) {
                            let id = $(item).first().find('div > a').attr('href').match(/(?<=torrent\/)(\d)*/g)[0]
                            torrent.name = $(item).first().find('a').text();
                            torrent.date = $(item).find('.tb').text();
                            torrent.seeds = $(item).find('.tul').text();
                            torrent.peers = $(item).find('.tdl').text();
                            torrent.size = $(item).find('.tc').first().text()
                            torrent.url = `https://www.torrentfunk.com/tor/${id}.torrent` 

                        }
                    }
                    
                    
                    results.push(torrent)
                })
               
                
            }
            results.splice(0,3)
            results = results.filter(value => Object.keys(value).length !== 0);
            res.json(results)
        })
    }
}