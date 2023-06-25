# Luna: React Native Boilerplate by Uje

React native using several libs

# Geting started

To rename app name

in IOS:

- go to ios/luna/info.plis
- rename "string" in CFBundleDisplayName key

in Android:

- go to android/app/src/main/res/values/strings.xml
- rename "app_name"

Generate APK

is IOS:

- run `xed ./ios`

- go to root, run `react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios`

- https://betterprogramming.pub/create-ipa-and-apk-from-react-native-72fe53c6a8db

in Android:

- go to root, run `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

- go to `android` folder

- execute `./gradlew assembleDebug`
