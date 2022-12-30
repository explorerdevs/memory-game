# memory-game 🧠

This is a simple memory game built using React, Vite, Tailwind CSS and TypeScript.

## How to play ⛹🏼

The goal of the game is to flip over pairs of matching cards. Click on a card to flip it over and reveal its image. If the image on the card matches the image on the previously flipped card, the pair will disappear from the board. If the images do not match, the cards will flip back over. The game ends when all pairs have been matched.

## Setup 🏁

To run this project locally, follow these steps:

1. Clone this repository:

`git clone https://github.com/[your-username]/memory-game.git`

2. Navigate to the project directory:

`cd memory-game`

3. Install dependencies:

`yarn install`

4. Start the development server:

`yarn dev`

The game will be available at http://localhost:3000.

## Deployment

To build and deploy the project, run the following command:

`yarn build`

This will create a production-ready build in the dist directory.

## Screenshot 🖨️

- Photo of the Website

## Links 🔗

- Link to Live Site

## Features 📡

- A board with a grid of cards that can be flipped over
- A timer to track the time it takes to complete the game
- A score counter to track the number of correct and incorrect matches
- A difficulty setting to adjust the size of the grid and the number of pairs of cards
- A shuffle button to randomly rearrange the cards on the board
- An option to play with different themes or images on the cards
- A leaderboard or high score list to track the best scores
- Sound effects or music to enhance the gameplay experience
- A "reset" button to start a new game after the current game has been completed or abandoned.

## Contributing 👯‍♂️

- If you would like to contribute to this project by forking it, you can follow these steps:

1. Go to the project's GitHub repository.
2. Click the "Fork" button in the top right corner of the page. This will create a copy of the repository in your own GitHub account.
3. Clone the forked repository to your local machine using the git clone command and the URL of the repository.
4. Create a new branch on your local machine using the git branch command. This is where you will make your changes.
5. Checkout the new branch using the git checkout command.
6. Make your changes to the code on this branch.
7. Test your changes to make sure they are working as intended.
8. Commit your changes to the branch using the git commit command.
9. Push your changes to your forked repository using the git push command.
10. Go to the original repository on GitHub and create a new pull request. This will allow the maintainers of the original repository to review your changes and potentially merge them into the main codebase.

- It's important to keep in mind that the maintainers of the original repository have the final say on whether or not to merge your changes. They may request that you make additional changes or discuss the changes with you before deciding to merge them.

## Known Issues ䷅

- Performance issues: The app might be slow to load or have lag when flipping cards, especially on low-end devices or in older browsers.
- Incorrect matching: The app might not correctly identify when two cards match, either due to a bug in the code or incorrect image files.
- Incorrect scoring: The app might not accurately track the score, either due to a bug in the code or user error (e.g. clicking on the same card twice).
- UI/UX issues: The app might be difficult to use or have a confusing interface, leading to a poor user experience.
- Compatibility issues: The app might not work correctly on certain devices or browsers due to differences in how they support certain technologies or features.

## Reporting bugs 🐛

- To report a bug in the memory game app, you can follow these steps:

1. Identify the problem: First, you need to determine what the issue is and how it is affecting your use of the app. Be specific and include as much detail as possible. For example, "When I double-click on a card, it counts as one turn' or 'The score is incorrect when I use x theme."
2. Reproduce the issue: Try to reproduce the problem to confirm that it is a bug and not just a one-time occurrence. This can also help you gather more information about the issue.
3. Collect information about the bug: In order to help the fix the bug, you will need to provide as much information as possible. This may include the the operating system you are using, any error messages or codes you received, and the steps you took to reproduce the bug.
4. Create a bug report: There are several ways you can create a bug report, including using a bug tracking tool, creating a document or spreadsheet, or even just writing down the information in a note. Be sure to include all of the information you collected about the bug, as well as any suggestions you have for how the issue could be fixed.
5. Submit the bug report: Once you have created your bug report, you can submit the report through a bug tracking tool by <a href="mailto:hello@ashmoreno.dev">email</a>.

By following these steps, you can help fix the bug and improve the app for all users.

## Authors 👸🏼

- Connect with ASTHER MORENO on [LinkedIn](https://www.linkedin.com/in/asthermoreno10/) and [Twitter](https://twitter.com/sexy_gravy)
- Connect with SAMUEL CHUKWUZUBE on [LinkedIn](https://www.linkedin.com/in/princemuel) and [Twitter](https://twitter.com/iamprincemuel)
- Connect with JOLENE KEARSE on [LinkedIn](https://www.linkedin.com/in/jolene-kearse-2562ba218) and [Twitter](https://twitter.com/FromJolene)

## Credits 📽️

- List any contributors or third-party libraries used in the app

--------------------------- _Notes_ --------------------------------

installed [React Icons](https://www.npmjs.com/package/react-icons) [docs](https://react-icons.github.io/react-icons/search?q=alien)

Usage

```
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

- [ ] syringe: GiSyringe
- [ ] gear: GiGears
- [ ] anchor: FaAnchor
- [ ] bacteria: FaBacteria
- [ ] microscope: FaMicroscope
- [ ] rocket: RxRocket
- [ ] planet: BiPlanet
- [ ] computer: RiComputerLine
- [ ] trash bin: FaTrashRestore
- [ ] mask: GiStarStruck
- [ ] truck: FaTruckMonster
- [ ] storm: BsCloudLightningRain
- [ ] skull: GiGooSkull
- [ ] alien: RiAliensLine; RiAliensFill
