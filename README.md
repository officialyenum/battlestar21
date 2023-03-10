# Battle Star 21
This is a Battle Simulation Game using AI21 language model for  AI21 Labs Hackathon which took place on the 13th-20th of January 2023


## Table of Contents

-   [Technologies](#technologies)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Testing](#testing)
    -   [Documentation](#documentation)
    -   [Deployment](#deployment)
    -   [Limitations](#limitations)
-   [More Info](#more-info)
-   [Contribute](#contribute)
-   [Support](#support)
-   [License](#license)

## Technologies
-   [React JS](https://reactjs.org/) - Runtime Environment
-   [Create React App](https://create-react-app.dev/) - Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
-   [AI21 LABS](https://studio.ai21.com/overview) - AI21 Labs is an AI lab & product company whose mission is to re-imagine the way we read and write by making the machine a thought partner to humans.

## Getting Started


### Installation

-   git clone [Battle Star 21](https://github.com/officialyenum/battlestar21.git)
-   Run `npm install` to install packages.
-   Run `npm start` to run the application in development mode.

### Usage

This is the basic flow of the application.
-   Generate Stage
Encompasses three generate endpoints contained in the Node Server and broken down into the three below:
    1. Generate character: A character is a game agent that is created by the A21 AI model and has two basic features [ name and bio]. Character name and       bio were generated using the 'j1-jumbo(178B)' model; character bio is generated based on player's profession, hand-to-hand combat, primary skill, and       special skills. This is an automated process based on data used to train the 'j1-jumbo (178B)' model. 
    2. Generate stage: the stage of play or battle is generated using the 'j1-grande-instruct(beta)(17B)' model.
    3. Generate battle or story: this is same as the story or battle narration that explains what happens in a given battle. AS a visual being, this       can be used to visualize how the game would be played in real life. The 'j1-large (7.5B)' model was used to generate narrations following successful        training; and the players are highlighted together with the battle stage, battle winner, and battle scenario.
          
-   Battle with other Characters through Simulations
    The battle simulation comes after the 'parameter generations' are done. Here, the user makes a prediction of the battle's winner (all generated characters are assigned [total wins] and [total losses] of 0 and if same characters are randomly generated and selected, this stage is terminated since same characters cannot fight themselves). 
    Once the battle is successfully simulated, the user is awarded the 'battle star token' [this will be implemented in future modifications due to time constraint in this stage] and the award will be based on users who fulfilled the 'proof of stake' concept of the application - that is they stake some 'eth' to play the simulation and if their prediction is correct, they are rewarded (after submitting their 'proof of work'). 
    
-   Get Results after simulations
    After the battle simulation, the user is awarded with a '+battle star token' or '-eth' - this originates from the 'proof of stake' and 'proof of work' blockchain-based concepts that would be implemented in our next build. However, in this build, the user is awarded with a point if their prediction goes right or no point if it goes wrong. Additionally, the character who wins the fight gets a '+1 win' and the loser, a '+1 loss'. 
    
### Testing
-   No Test Implemented


### Documentation

-   Please click [here](https://documenter.getpostman.com/view/8719009/2s8ZDVb48d) to access the Postman Collection

### Deployment
This project is hosted on [vercel](https://vercel.com/)

-   Please click [here](https://battlestar21.vercel.app/) to access the hosted application
-   Please click [here](https://battlestar21-api.vercel.app/) to access the hosted api Built with (Node, Express, Typescript)

### Limitations
-   Authentication is not implemented
-   Battle History is not Recorded
-   Testing is not implemented
-   Documentation is not implemented

### Next Steps
-   Authentication will be implemented so players can have 1-5 characters dey can battle with
-   Probably Earn Points for every battle won (the battle star token)
-   Make it Multiplayer & Enable Different Kinds of Battle simulations asides 1v1 
-   Upgrade Character Power up with points 
-   Player Battle History
-   Allow Players Swap and trade their Characters 
-   Battle Leader board from top winners to lowest winners
-   Implement Image Generation to Visualize the Battle Simulations.

## More Info

- Please click here [Battle Star 21 API](https://github.com/officialyenum/battlestar21-api.git) to access the Node Express Api Repository

## Contribute

- Issue Tracker: https://www.github.com/officialyenum/battlestar21-api/issues
- Source Code: https://www.github.com/officialyenum/battlestar21-api

## Support

If you are having issues, please let me know.
I have a mailing list located at: oponechukwuyenum@gmail.com OR oponechukwuyenum@icloud.com

## License

The project is licensed under the MIT license.
