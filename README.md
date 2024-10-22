# urlShorteningService

You are required to create a simple RESTful API that allows users to shorten long URLs. The API should provide endpoints to create, retrieve, update, and delete short URLs. It should also provide statistics on the number of times a short URL has been accessed.

# Requirements
You should create a RESTful API for a URL shortening service. The API should allow users to perform the following operations:

- Create a new short URL
- Retrieve an original URL from a short URL
- Update an existing short URL
- Delete an existing short URL
- Get statistics on the short URL (e.g., number of times accessed)
- You can optionally setup a minimal frontend to interact with the API and setup redirects for the short URLs to the original URLs

# Current Status as on 22-10-2024

- Have integrated mongoose for storing user information over mongdb
- Built routes to handle CRUD for user
- Have restructed the project folder which consists of routes, controllers, models, util, middleware 
  
