#!make

run-app:
	node backend/src/index.js

dev-app:
	nodemon backend/src/index.js
