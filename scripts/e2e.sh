#!/usr/bin/env bash

# Start selenium server just for this test run
(webdriver-manager start &)
# Wait for port 4444 to be listening connections
while ! nc -z 127.0.0.1 4444; do sleep 1; done

# Start the web app
(yarn start &)
# Guessing your http-server listen at port 80
while ! nc -z 127.0.0.1 3000; do sleep 1; done

# Finally run protractor
protractor e2e/conf.js

# Cleanup webdriver-manager and http-server processes
fuser tcp 3000
fuser tcp 80