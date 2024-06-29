# Basic React App

This is a basic React Native app that includes Drawer Navigation, Bottom Navigation, Stack Navigation, and Bottom Sheet implementation with multiple screens.

## Features

- **Drawer Navigation**: Navigate between different sections using a drawer.
- **Bottom Navigation**: Quickly access different screens using bottom tabs.
- **Stack Navigation**: Manage the navigation history with stack-based navigation.
- **Bottom Sheet**: Pull-up component with additional information or actions.
- **Multi-screens**: Separate screens for Home, Settings, Details, and Bottom Sheet.

## Getting Started

To get started, fork this repository and follow the steps below to set up and run the app.

### Prerequisites

- Node.js and npm (Node Package Manager)
- React Native CLI or Expo CLI
- Android Studio or Xcode (for running on Android or iOS simulators/emulators)

### Installation

1. **Clone the Repository**:
   ```sh
   git clone <repository-link>
   cd <repository-name>
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Install Additional Packages**:
   Make sure you have installed the following packages:
   ```sh
   npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack @react-navigation/drawer
   npm install react-native-screens react-native-safe-area-context
   npm install @gorhom/bottom-sheet
   npm install @expo/vector-icons
   ```

### Running the App

1. **Start the Metro Bundler**:
   ```sh
   npm start
   ```

2. **Run on Android**:
   ```sh
   npm run android
   ```

3. **Run on iOS**:
   ```sh
   npm run ios
   ```

### Folder Structure

- **App.js**: Main entry point of the application, includes navigation setup.
- **/app/context/store.js**: Redux store configuration.
- **/app/screens**: Contains all the screen components (`HomeScreen`, `SettingsScreen`, `DetailsScreen`, `BottomSheetScreen`).
- **/app/components**: Contains reusable components like `BottomSheet`.
- buttons and styling is resused across the app.
- Logo is in file **/Native/logo/logo.png**.
- there are two logos used.

### Code Overview

**App.js**:
Sets up the navigation containers including the Drawer, Bottom Tabs, and Stack navigators, and provides the Redux store to the entire app.

**HomeScreen.js**:
A simple screen component displaying a home message.

**SettingsScreen.js**:
A simple screen component displaying settings message.

**DetailsScreen.js**:
A screen component used for displaying detailed information.

**BottomSheetScreen.js**:
Includes a button to trigger the bottom sheet.

**BottomSheet.js**:
Implements the bottom sheet component using `@gorhom/bottom-sheet`.

### Example Usage

To add a new screen, create a new file in the `/app/screens` directory and add the necessary navigation configuration in `App.js`.



### Screenshots
Splash Screen
screenshots/IMG-20240629-WA0011.jpg 

Home Screen/Settings Screen/Details Screen
screenshots/IMG-20240629-WA0015.jpg
screenshots/IMG-20240629-WA0012.jpg
screenshots/IMG-20240629-WA0014.jpg

Drawer View
screenshots/IMG-20240629-WA0013.jpg

BottomSheet
screenshots/IMG-20240629-WA0016.jpg


### Contributing

Feel free to contribute to this or suggest anythings i can do to learn new things in this project by submitting a pull request or opening an issue.

### License

This project is licensed under the MIT License.

---