# Air-Power USA Website

A modern, responsive website for Air-Power USA, showcasing their innovative compressed air engine technology for clean energy generation and storage.

## Project Overview

This website serves as a comprehensive landing page and investor-focused platform for Air-Power USA. It highlights the company's revolutionary compressed air engine technology, its applications, products, and investment opportunities.

## Features

- Responsive design for all device sizes
- Interactive UI with smooth animations
- Comprehensive sections:
  - Home
  - About
  - How It Works
  - Applications
  - Products 
  - Investors
  - Contact

## Technologies Used

- React.js
- Styled Components
- Framer Motion (for animations)
- React Router (for navigation)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone [repository-url]
   cd airpowerusa
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Set up images
   ```
   node setup-images.js
   ```
   This will create the necessary image directory structure and generate an `image-placeholders.txt` file listing all required images.

4. Add the necessary images to the `public/images` directory as specified in the `image-placeholders.txt` file.

5. Start the development server
   ```
   npm start
   # or
   yarn start
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
airpowerusa/
├── public/
│   ├── images/          # All website images
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── CompanyOverview.js
│   │   ├── ProblemSection.js
│   │   ├── SolutionSection.js
│   │   ├── HowItWorksSection.js
│   │   ├── ApplicationsSection.js
│   │   ├── ProductsSection.js
│   │   ├── InvestorsSection.js
│   │   └── ContactSection.js
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── HowItWorks.js
│   │   ├── Applications.js
│   │   ├── Products.js
│   │   ├── Investors.js
│   │   └── Contact.js
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── GlobalStyles.js  # Global styles
├── setup-images.js      # Script to set up image directories
├── package.json
└── README.md
```

## Deployment

To build the project for production:

```
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Contact

For more information about Air-Power USA, visit [airpowerusa.com](https://airpowerusa.com) or contact us at info@airpowerusa.com. 