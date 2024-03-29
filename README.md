This Application has 9 components. 

App component has a hash router that will redirect the user to multiple pages.

The Navbar has the Home, Profile, Spaces, and Login/Logout buttons.

The Home button redirect the user to the homepage. (Default page)

The Profile button
    (If the user is not logged in)
        - will redirect the user to the login page.
    (If the user is logged in) 
        - will go to the profile page filled with their attributes.
        - The user attributes can be found in the AuthService file in the services folder.

The Spaces button will show all the spaces available.
    (If the user is not logged in)
        - They can still view the spaces
            -Spaces are made by SpaceComponents
                -SpaceComponents are filled with data from the DataServices file
        - They can not reserve a spot
    (If the user is logged in)
        - They will reserve a spot in the paris hotel
            -The ConfirmModalComponent will pop up (The showModal state is changed to true) and will tell them they have done it
        - Any other spot will be fully booked
            -The ConfirmModalComponent will pop up (The showModal state is changed to true) and will tell them they have not done it

The button will show as login if the user is not logged in.

The button will show as logout if the user is logged in.

Testing 

Currently most components are tested besides Profile and App.

Home 100% passed
Login 100% passed
Logout 100% passed
Navbar 100% passed
Profile 0% 
Spaces 71% tested (All test are failing)
SpaceComponent 100% passed
ConfirmModalComponent 100% passed
    

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
#   t y p e s c r i p t - j e s t 
 
 