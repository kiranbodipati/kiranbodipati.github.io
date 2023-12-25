# Personal Website


## Description

This is a React based personal resume website template. 

### 1. Node and yarn dependencies

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Install dependencies and run

run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project.

### 3. Data

All of the data for the site is driven via a file at `/src/data/data.tsx`.The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports. 

### 4. Deploy

1. `yarn build` to build and `yarn deploy` to deploy. look back at commit history for deployment settings to gh-pages. Configure the workflow correctly
2. create `.nojekyll` file in the gh-pages branch upon deployment to fix static image issue.






