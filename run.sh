#! /bin/bash

http-server&
tsc -w&
sass -w src/sass:dist/css
