var express = require('express');

const axios = require('axios');
const cheerio = require('cheerio');

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

              if (results.length === 0) {
                throw new Error(`There have been no reported cases of scam/con regarding ${query}. Please note that you still need to practice caution, stay alert, avoid too good to be true deals, and avoid being desperate or giving in to the urgency created by scammers. A scammer usually uses tricks such as very very low prices for quality products, creates urgency such as "it's the only item remaining, or impersonates real dealers. Regardless of your situation, insist on face to face deals or use registered escrow services. Regarding escrow, you must also check to confirm their authenticity" `);
              }

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
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Lookup!' });
  next();
});

//GET index page
router.get('/index', (req, res) => {
  res.render('index', { results: [], message: '' });
});

//Scrap web
router.post('/query', async (req, res) => {
  const query = req.body.query;

  try {
      const results = await scrapeWeb(query);
      res.render('index', { results, message: '' });
  } catch (error) {
      res.render('index', { results: [], message: error.message });
  }
});

module.exports = router;
