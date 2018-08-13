# VR Image Gallery

Image gallery using A-Frame, Angular 6, Google Firebase, and Styled with SASS.

#### By **Joel Adams**

## Description

Built using the Angular 6 CLI, this site will allow a user to view 360 degree images, served using Google Firebase, through Mozilla's A-Frame ThreeJs wrapper.

## Planned Features
* VR Enabled in-browser image gallery
* Mobile optimization
* CRUD for gallery images
* Information panel in image gallery displaying description and name of each image.

## Setup/Installation Requirements
Requires Node.Js

1. Download or clone Github respository.
2. Create a file called api-keys.ts in src/app/
3. Login to Firebase and create a project, select add to web app, and copy the provided code formatted as the following into api-keys.ts:
```
export const config = {
  apiKey: 'XXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXXX'
};
```
2. Run $ npm install in command line to restore dependencies.
3. Run $ ng serve to run development server.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* Node.js
* Angular
* Javascript
* Atom
* Webpack

## Support and contact details

_Please contact  the creator through Github.com: joelaphoto_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **Joel Adams**
