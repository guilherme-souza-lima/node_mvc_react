#!make

up:
	docker-compose up -d

run-app:
	nodemon backend/src/index.js

run-web:
	cd web/ && npm start
