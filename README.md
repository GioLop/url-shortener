# url-shortener

url-shortener is an app that lets to put a URL into the home page and get back a short URL.

It will be redirected to the full URL when enter/visit the given short URL.

There are an endpoint that retrieves the top 10 most frequently accessed URLs.

It stores the information in a mysql database.

# Requirements

This app is wrapped in three different Docker containers, be sure you have Docker Desktop running in your machine, if you need more information about how to install Docker Desktop please [visit the offical documentation](https://docs.docker.com/desktop/).

# Installation

1. Clone the repository in your local machine
2. Enter to the project root folder
3. run docker compose build
4. run docker compose up
5. go to http://localhost:3000
