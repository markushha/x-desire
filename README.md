
  # 🚀 X-DESIRE&nbsp;
  ### User-Friendly Feological Platform Built for researchers, students & geologists using NASA Eart Data 
  <div>
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/94748525/273447401-6c676955-3d4a-4926-977a-1e85e4951d39.png" />
  
   ### <a href="https://x-desire.vercel.app/">Project Deployment</a>
   ### <a href="https://x-desire.vercel.app/docs">Project Documentation</a>
</div>

## About the project

X-Desire is an open-source platform, that was built during NASA Space Apps Challenge 2023, is designed with this 3 main goals:
1) Motivate geologists to use NASA's earth observation data
2) Show that geology doesnt always require field work 
3) Enable geologists to collect exact data they need

## Contributing & How To Launch

You can start our project by downloading packages using preferred packet-manager

💻 Open your terminal

### 1 - Installation of all dependencies (yarn / npm / pnpm)
yarn install
#### or
npm install
#### or
pnpm install

### 2 - Create environment variable

create .env file in your directory and fill next lines:

NEXT_PUBLIC_GOOGLEMAP_KEY=your_key
NEXT_PUBLIC_EARTHDATA_KEY=your_key

#### Make sure to replace "your_key" with actual API keys.

#### You can get API keys here:
#### [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)
#### [Earth Data](https://urs.earthdata.nasa.gov/oauth/authorize?response_type=code&client_id=2RzpE9f5wdSN3TJyoc9CxA&redirect_uri=https://cmr.earthdata.nasa.gov/virtual-directory/collections/tokens)

### 3 - Start the development server
yarn dev
#### or
npm run dev
#### or
pnpm dev

#### Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result

#### ✨ Yep, that's easy just like that!

## Technology Stack

### Technologies that were used to develop project <br>

#### 💻 Front-End: ReactJS, NextJS, Typescript, Zustand, React Google Map, React-Flow, axios
#### 🚀 Back-End: Next.js API routes (13 version)

### Technologies that were used to support code quality <br>

#### Linters: Eslint

### Technologies that were used to check code validity <br>

#### 🦄 CI/CD: Github/Vercel actions

## Features

- Geolocation: Implementation of geolocation search via user input(country/city) coordinates
- Interactive Map: Implementation of google interactive map
- Topic zones: Implementation of topic zones that displayed by user choosen topic
- CMR Data: Implementation of data display using NASA CMR Api for request of data from [Earthdata](https://search.earthdata.nasa.gov/)
- Documentation: Implementation of guidance to ensure project use with ease for users
- Flow Schemes: Addition of schemes via React Flow to visualize granule data

## Team

### ✨ [Leisan Abzalimova | Leisan](https://t.me/lyaissan7) - UI/UX Designer
### ✨ [Mark Inger | Markushha](https://github.com/markushha) - Frontend dev
### ✨ [Aukenov Asanali | Asan](https://github.com/AsanX99999) - Backend dev
### ✨ [Kenes Nurken | NurkenInc](https://github.com/nurkeninc) - Frontend dev
<br/>
