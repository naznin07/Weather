<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.37/moment-timezone-with-data-1970-2030.min.js"></script>
    <title>World Clock</title>
  </head>
  <body>
    <div class="container">
      <h1>World Clock</h1>

      <select id="city">
        <option value="">Select a city..</option>
        <option value="current">My current location</option>
        <option value="Australia/Sydney">Sydney</option>
        <option value="Europe/London">London</option>
        <option value="Pacific/Auckland">Auckland</option>
      </select>

      <div id="cities">
        <div class="city" id="los-angeles">
          <div>
            <h2>Los Angeles</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="paris">
          <div>
            <h2>Paris</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
      </div>

      <footer>
        This project was coded by
        <a href="https://github.com/naznin07" target="_blank"
          >Naznin Sultana,</a
        >
        and is
        <a
          href="https://github.com/naznin07/App/tree/World-Clock"
          target="_blank"
        >
          open-sourced on GitHub</a
        >
        and
        <a
          href="https://app.netlify.com/teams/naffect1/overview"
          target="_blank"
          >hosted on Netlify</a
        >
      </footer>
    </div>
    <script src="index.js"></script>
  </body>
</html>
