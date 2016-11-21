// This might be heavier than what we need, but we could use it if we wanted to: https://github.com/maxs15/react-native-screcorder
// Otherwise, we'll want to use built-in camera support for React Native
// Note that the SCRecorder plugin is iOS only, so we'd need to standardize on that if we are going to use it (which shouldn't be an issue since none of our UI is iOS-specific)
// Teleprompter can be handled by Overlay: https://github.com/brentvatne/react-native-overlay
// Within the Overlay, we'll want a ScrollView: https://facebook.github.io/react-native/docs/using-a-scrollview.html
// Can anyone find info on auto-advancing the ScrollView? It wouldn't be bad if we had users scroll it though, since they're already holding the phone
