# expo-deeplink-test

Test Deep Linking with Expo in a blank App with 2 Screens...

hints:
https:docs.expo.io/versions/latest/workflow/linking/
https:reactnavigation.org/docs/en/deep-linking.html

$ cd deeplink

test deep link with Expo Client:
$ expo start 

open in browser with html a tag
exp:192.168.0.102:19000/--/profile/Eric


test deep link with standalone app:
$ expo build:android

install APK 

open in browser with html a tag
deep://profile/Eric
