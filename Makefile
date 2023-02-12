#!make

up:
	docker-compose up -d

run-app:
	nodemon backend/src/index.js

run-web:
	cd web/ && npm start

install-app:
	cd backend/ && npm install

install-web:
	cd web/ && npm install

insert-adm:
	curl --location --request POST 'localhost:4000/user/create' --header 'Content-Type: application/json' --data-raw '{"nome":"adm","usuario":"adm","senha":"adm"}' 