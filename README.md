# LRU-Cache
LRU Cache implementation by NodeJs


Hosted on
```sh
https://my-cache.herokuapp.com
```

### How to use

- Examples:

Open terminal then use CURL to make http requests:

  - PUT a key and value: 
  ``` 
  curl -X PUT \
  https://my-cache.herokuapp.com/api/v1/put/2 \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{"value":500}'
  ```
  
  - GET a key and value:
  ```
  curl -X GET \
  https://my-cache.herokuapp.com/api/v1/get/1 \
  -H 'cache-control: no-cache'
  ```
  
### Features

  - Initiate cache size with 2
  - PUT key and value
  - GET key and value
  - remove the oldest key
  - CI/CD with travis and heroku

### Installation

```sh
$ npm install
$ npm start
```

### Run tests
```sh
$ npm test
```



