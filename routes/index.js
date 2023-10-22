var express = require('express');
//var db = require('../db');

const axios = require('axios');
const cheerio = require('cheerio');



/*function fetchBonsai(req, res, next) {
	db.all('SELECT * FROM bonsai WHERE owner_id = ?', [req.user.id], (err, rows) => {
		if (err) {
			return next(err);
		}

		var bonsai = rows.map((row) => {
			return {
				id: row.id,
				url: '/' + row.id,
			};
		});
		res.locals.bonsai = bonsai;
		next();
	});
}*/

function scrapeWeb(query) {
    try {
        // Perform web scraping here
        const base_url = "https://www.google.com/search?q=";
        query = `${query}"scam" OR "fraud" OR "scammer" OR "scammers" OR "scamalert" OR "con" OR "caution" OR "mwizi" OR "thief" OR "thieves" site:facebook.com, twitter.com`;
        const url = `${base_url}${query}`;
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        };

        return axios.get(url, { headers })
            .then((response) => {
                // Extract the latest results related to the query.
                const $ = cheerio.load(response.data);
                const results = [];
                $('div.tF2Cxc').each((i, element) => {
                    const title = $(element).find('h3').text();
                    const link = $(element).find('a').attr('href');
                    const date = $(element).find('div.f').text().replace(' · ', '').replace(' mins ago', ' minutes ago').replace(' hours ago', '1 hour ago');
                    const formatted_date = new Date(date).toISOString().slice(0, 10);
                    results.push({ title, link, date: formatted_date });
                    console.log(`${i + 1}. ${title}`);
                    console.log(`   Link: ${link}\n`);
                    console.log(`   Date: ${formatted_date}\n`);
                });

                return results;
            })
            .catch((error) => {
                throw new Error(`An error occurred while making the request: ${error}`);
            });
    } catch (error) {
        throw error;
    }
}

var router = express.Router();

/* GET home page. */
router.get(
	'/',
	(req, res, next) => {
		if (!req.user) {
			return res.render('home');
		}
		next();
	},
	
		scrapeWeb,
	(query) => {
		res.locals.filter = null;
		res.render('index', { user: req.user });
	},
);

module.exports = router;
