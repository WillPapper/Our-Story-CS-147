# Our-Story - CS-147

-
INSTALLATION REQUIREMENTS:
-
1. From the command line, run `git clone https://github.com/wpapper/Our-Story-CS-147.git`
2. Run `cd Our-Story-CS-147/OurStory; npm install;`
3. Open `ios/OurStory.xcodeproj` in Xcode and press Run to test on the iPhone 6 iOS simulator or on an iPhone 6 device








-
OPERATING INSTRUCTIONS:
-

To find a local video, users can use the home list-view (default screen but navigable by selecting the list view icon in the toobar) or tap the pin icon in the bottom toolbar to view a map view of nearby videos.
Upon selecting the video, the user can pause or exit. The user can also tap the snapping icon in the bottom right corner to "snap" to show support and appreciation. By selecting the i icon on the bottom left a user can view the snap info, a display of snap frequencies across the video recording. Upon finishing the video, the user can leave a short reaction response video with the record screen option that follows.

In order to record a video, a user can select the record icon in the bottom toolbar. To add a custom script (not on the reaction screen), a user can select the teleprompter icon in the top right and type to compose a script. They can then scroll through their text as they record their video (pressing the record button at the bottom of the screen). After recording (stopping the recording by pressing the stop recording icon at the bottom of the screen), a user can publish their video by selecting the arrow icon at the bottom right of the screen, or delete their video by tapping the X in the top right corner.


-
LIMITATIONS IN IMPLEMENTATION:
-

For our hi-fi prototype, there are the following limitations:

1) All video selections lead to the same sample video.

2) We have not added the ability to publish the recorded video to the application/database, and therefore a recorded and published video will not load into the home screen.

3) The map view is currently static, and not based on the true location of the user (the static view is Stanford's campus). The starting view is static, and users cannot view other surrounding areas.
