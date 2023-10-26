var express = require('express');

const axios = require('axios');
const cheerio = require('cheerio');
const { DateTime } = require('luxon'); //Import the 'Luxon' library for date parsing


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeWeb(query) {
  
  try {

    // Perform web scraping 
    const base_url = "https://www.google.com/search?q=";
    query = `${query},"scam, con, scammer", site:facebook.com`;
    const url = `${base_url}${query}`;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      };

      try {
        const response = await axios.get(url, { headers });
        // Extract the latest results related to the query.
        const $ = cheerio.load(response.data);

        const results = [];

        $('div.tF2Cxc').each(async (i, element) => {
          const title = $(element).find('h3').text();
          const link = $(element).find('a').attr('href');
          const content = $(element).find('span').text(); // Extract content
          const dateText = $(element).find('span').text().trim(); // Trim to remove leading/trailing white spaces

          // Try to parse the date using 'moment' library (or your preferred date library)
          const formatted_date = parseDate(dateText);

          results.push({ title, link, content, date: formatted_date });
          console.log(`${i + 1}. ${title}`);
          console.log(`   Link: ${link}\n`);
          console.log(`   Content: ${content}\n`); // Log content
          console.log(`   Date: ${formatted_date}\n`);


          // Add a random delay between 1 to 5 seconds (adjust as needed).
          const randomDelay = Math.floor(Math.random() * 5000) + 1000;
          await delay(randomDelay);
        
        });

        if (results.length === 0) {
          throw new Error (`There have been no reported cases of scam/conning regarding your input. Please note that you still need to practice caution, stay alert, avoid too good to be true deals, and avoid being desperate or giving in to the urgency created by scammers. A scammer usually uses tricks such as very very low prices for quality products, creates urgency such as "it's the only item remaining, or impersonates real dealers. Regardless of your situation, insist on face to face deals." `);
        }

        return results;
      } catch (error) {
          throw new Error(`An error occurred while making the request: ${error}`);
        }
      } catch (error) {
        throw error;
      }
    }

// Call the scrapeWeb function as needed.
/*scrapeWeb('Your Query')
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });*/

  function parseDate(dateText) {
    const dateFormats = ['mmm d yyyy', 'mmm d yyyy h:mm a', 'd mmm yyyy', 'yyyy mmm d'];

    for (const format of dateFormats) {
      try {
        const parsedDate = DateTime.fromFormat(dateText, format, { zone: 'utc+3' });
        
        if (parsedDate.isValid) {
          return parsedDate.toISODate(); // Format the date as needed
        }
      } catch (error) {
        // Do nothing if parsing fails; continue to the next format
      }
    }

    return 'Invalid date format';
  }


  var router = express.Router();
  
  /* GET home page.*/
  router.get('/', function(req, res, next) {
    res.render('home', { title: 'Lookup!' });
    next();
  }); 

  //GET index page
  router.get('/index', function(req, res, next) {
    res.render('index', { results: [], message: '' });
  });

  //Scrap web
  router.post('/query', async (req, res) => {
    const query = req.body.query;
    try {
      const results = await scrapeWeb(query);
      // Check if results is a string (error message) and convert it to an array
      const resultsArray = typeof results === 'string' ? [{ title: 'Error', content: results, date: '' }] : results;
      res.render('index', { results: resultsArray, message: '' });
    } catch (error) {
      res.render('index', { results: [], message: error.message });
    }
  });

  module.exports = router;
