---
path: "/airtable-api-getting-started"
date: "2019-10-01"
updateAt: "2019-11-20"
title: "Airtable"
excert: 'Airtable is an web based tool to make spreedsheet, database, forms, kanban, calendar on the top of the airtable base.'
https: true
auth: 'apiKey'
category: 'Database'
pricing: ['free','pro']
officialDocsLink: 'https://airtable.com/api'
author: "Mohd Danish"
twitter: "https://twitter.com/mddanishyusuf"
authorPic: "./authors/mddanishyusuf.png"
featuredImage: "./images/airtable.png"
---

Airtable is an web based tool to make spreedsheet, database, forms, kanban, calendar on the top of the airtable base. So, basically this is similar Google Spreedsheet but airtable have more flexiblity and features.

So, you can integrate airtable data into your applications like build website with their public APIs.

## Specifications:

- Rate limit - `5 requests/second/base`
- Authentication - `API key`
- API client - `JavaScript` - official, `Ruby` - community, `.NET` - community

## Prerequisites

- <b>Base ID</b> - Go here https://airtable.com/api and select your airtable base then you can find the base ID in URL & It begins with `app`. Ex: https://airtable.com/appofMoPxdu7iQ7hf/api/docs
- <b>Table Name</b> - Name of the table in your Airtable Base
- <b>API Key</b> - You can get your Airtable API key here https://airtable.com/account

There are following method to use airtable API.

- [JavaScript](#javascript)
- Node.js
- PHP
- Ruby
- Python

### JavaScript
This is simple and easiest way to use as simple API endpoint with some query params if there is any. So, we will use `fetch` to make http call. 

### Get all records

```javascript
async function getRecords(){
    const response = await fetch('https://api.airtable.com/v0/<base_id>/<table_name>?api_key=<api_key>');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
}
getRecords()
```

### Get a records

```javascript
async function getRecord(){
    const response = await fetch('https://api.airtable.com/v0/<base_id>/<table_name>/<record_id>?api_key=<api_key>');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
}
getRecord()
```

### Create Records

```javascript
const url = "https://api.airtable.com/v0/<base_id>/<table_name>?api_key=<api_key>";
const data = {
    records: [
      // highlight-start
        { 
            fields: {
                name: "test",
                email: "test@gmail.com"
            }
        } 
      // highlight-end
    ]
};

async function createRecords() {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        console.log("Success:", JSON.stringify(json));
    } catch (error) {
        console.error("Error:", error);
    }
}

createRecords();
```

## Node.js
Airtable have official client library for Nodejs.

```shell
npm i --save airtable
or
yarn add airtable
```

### Get all records

```javascript
const Airtable = require('airtable');

const base = new Airtable({ apiKey: <api_key> }).base(<base_id>);

const options = {
    view: "Grid view",
    pageSize: pageSize
};

const limit = "<limit>";
const page = 1;
const processPage = (partialRecords, fetchNextPage) => {
    records = [...records, ...partialRecords];
    fetchNextPage();
};
const processRecords = err => {
    if (err) {
        res.status(404).send(err);
        return;
    }
    const count = records.length;
    const offset = page * limit - limit;

    const models = records
        .map(record => record._rawJson)
        .slice(offset, limit * page);
    res.json(models);
};

base(app.apis_info.table_name)
    .select(options)
    .eachPage(processPage, processRecords);


```

### Get a records

```javascript
const axios = require("axios");

axios
    .get("https://api.airtable.com/v0/<base_id>/<table_name>/<record_id>?api_key=<api_key>")
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

### Create Records

```javascript
const data = {
    records: [
        {
            fields: {
                name: "test",
                email: "test@gmail.com"
            }
        }
    ]
};

axios({
    method: 'post',
    url: 'https://api.airtable.com/v0/<base_id>/<table_name>?api_key=<api_key>',
    data: data
});
```

## Python
Install `requests` library for python to make http calls.

```shell
sudo pip install requets
```

### Get all records

```python
import requests
url = "https://api.airtable.com/v0/<base_id>/<table_name>"
params = { "api_key": "<api_key>" }
r = requests.get(url = URL, params = PARAMS)
data = r.json()
print data
```

### Get a record

```python
import requests
url = "https://api.airtable.com/v0/<base_id>/<table_name>/<record_id>"
params = { "api_key": "<api_key>" }
r = requests.get(url = URL, params = PARAMS)
data = r.json()
print data
```

### Create Records

```python
import requests
url = "https://api.airtable.com/v0/<base_id>/<table_name>"
params = { "api_key": "<api_key>" }
headers = {'Content-Type': 'application/json', 'Accept':'application/json'}
data = {
    "records": [
        {
            "fields": {
                "name": "test",
                "email": "test@gmail.com"
            }
        }
    ]
}
r = requests.post(url = url, json = data, params = params, headers=headers)
data = r.json()
print data
```
