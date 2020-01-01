---
path: "/how-to-enable-caching-with-redis-in-nodejs-apis"
date: "2020-01-02"
title: "Caching with redis in your NodeJS APIs"
excert: 'If you building any application based on the google apis service then you need private key and client email to access their services.'
keywords: ['caching','redis', 'nodejs', 'apis']
officialDocsLink: 'https://airtable.com/api'
author: "Mohd Danish"
twitter: "https://twitter.com/mddanishyusuf"
authorPic: "./authors/mddanishyusuf.png"
featuredImage: "./images/redis-homepage.png"
---

If you building any application based on the google apis service then you need private key and client email to access their services.

To build Google Analytics API you need three values `Client Email`, `Private Key` & `View ID`

- Go here [Google Analytics Reporting API](https://console.cloud.google.com/projectselector2/apis/api/analyticsreporting.googleapis.com/overview)
- Select the project or make new project
- Click on `Enable` to access Analytics API Services
- Click on `Credentials` and `Create Credentials` with `Service Account`.
- Follow the step those are required and `Create Key` with JSON type and `Done`
- Save the credentials json file.
- Important step -> Add `client_email` from JSON file into your Google Analytics Account go to `Admin`-> `User Management` and add the email address.
- Get View ID ->  Google Analytics Account go to `Admin`-> `View` Tab -> `View Settings` -> Get View ID.

Here is the example:

```json
{
  "type": "service_account",
  "project_id": "nocodeapi-257512",
  "private_key_id": "980c5bd6d331fd2bf3252d0bd0a2ae6033b854ca",
  "private_key": "<A long private key>", // highlight-line
  "client_email": "nocodeapi-857@nocodeapi-257512.iam.gserviceaccount.com", // highlight-line 
  "client_id": "100000573787960595567",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/nocodeapi-857%40nocodeapi-257512.iam.gserviceaccount.com"
}
```

### Here is Video Version
`video: https://www.youtube.com/embed/2Xc9gXyf2G4`
