const City = require("./model");

async function createCity(req, res) {
  try {
    const city = req.body;
    const {
      name,
      country,
      locale,
      translation_city,
      translation_country,
      coordinates,
      stations
    } = city;

    const newCity = new City({
      name,
      country,
      locale,
      translation_city,
      translation_country,
      coordinates,
      stations
    });
    await newCity.save();
    res.json(newCity).status(200);
  } catch (err) {
    res.json({ err: err.message });
  }
}

async function getCities(_, res) {
  try {
    const cities = await City.find();
    res.json(cities).status(200);
  } catch (err) {
    res.json({ err: err.message });
  }
}

async function searchCity(req, res) {
  if (!req.body.city || !req.body.locale) {
    res.json({
      err:
        "please fill valid request properties, 2 parameters needed => city : String, locale : String (`es`,'it`,`fr`,`en`)"
    });
  }
  try {
    const { city, locale } = req.body;
    if (Boolean(city === " ")) {
      res.json({ err: "Receive no query string" }).status(600);
    }

    if (
      Boolean(
        locale == "fr" || locale == "es" || locale == "en" || locale == "it"
      )
    ) {
      const cities = await City.find({
        name: { $regex: `${city}`, $options: "i" }
        // Searching method with MongoDB, add option "i" to case insensitive
      });

      if (cities.length === 0) {
        res.json({ error: "City not found" }).status(603);
      } else {
        let selectedCities = [];
        for (i = 0; i < cities.length; i++) {
          let shortCity = {
            name: cities[i].translation_city[locale],
            country: cities[i].translation_country[locale],
            coordinates: cities[i].coordinates
          };
          selectedCities.push(shortCity);
        }
        const finalCities = selectedCities.slice(0, 20);
        // Limits to 20 the number of cities returned
        res.json(finalCities).status(200);
      }
    } else {
      res.json({ err: "Please fill a valid locale indicator" }).status(601);
    }
  } catch (err) {
    res.json({ err: err.message });
  }
}
module.exports.createCity = createCity;
module.exports.getCities = getCities;
module.exports.searchCity = searchCity;
