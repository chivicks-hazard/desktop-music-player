- 2025-08-09 feat(music): add audio streaming 

 The app can finally play music. Using streams from the backend/electron
process wasn't ideal due to memory overhead that I could possibly face.
By disabling webSecurity, it allows the frontend to go into the
computer's filesystem and read the audio file from it's location.

I relearnt how states work, especially with React's asynchronous
re-rendering. I learnt how to use React's Context API, enabling me to
pass the audio player's reference throughout the application's frontend.

My next focus now is to improve the app's UI and 'complete' it.

- 2025-07-28 feat: randow 

 
- 2025-07-04 feat(all-tracks): add getSongList to /#/all-tracks 

 I was able to add the getSongList feature to the AllTracks page compo-
nent, bringing life to the route. A really satisfying experience it was.
The next step now is to add audio to the page so that it can start pla-
ying.

PS: I still need to go back and learn asynchronous JavaScript.

- 2025-07-03 feat(main): add preload script 

 I really learnt a lot on how preload scripts work in Electron. There
were a lot of bugs on the way 😅, but at least I now know how to
structure the app better.

- 2025-07-03 feat(main): add preload script 

 I really learnt a lot on how preload scripts work in Electron. There
were a lot of bugs on the way 😅, but at least I now know how to
structure the app better.

- 2025-06-30 feat(music): added songlist list and stream fn 

 I was able to configure the src/electron/music.ts file to read song
files from the system. With this, I was able to create two functions:
one for getting the list of files in the specified folder and another
for getting the song stream.

I ran into a lot of compatability issues reading extracting the metadata
of some files, and I suspected the root of it to be 'jsmediatags'. I'll
see what I can do to resolve it in future updates.

- 2025-06-17 feat: add getSongs function 

 I created the music.js (to be .ts soon) file for the music logic of the
app. The music stream and song details are works in progress.
I also created the preload script which I'll work on in the future.

- 2025-06-13 Remote Merge 1 

 Check Changelog
- 2025-06-13 feat: added a lot 

 Most of the changes include:
* Completing the scaffolding of the "Recently Playing" section
* Added two new sections for /#/
* Added a new page, /#/all-tracks

- 2025-06-02 feat: add routing and sidebar for app navigation 

 
- 2025-05-24 feat: add playing screen 

 The playing screen is now a work in progress and the first step to
building this application. More will be coming soon.

- 2025-05-11 chore: initialize project 

 I initialize the project today, preparing it to be pushed to GitHub.
