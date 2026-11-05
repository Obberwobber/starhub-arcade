# Black Snap Sender

A static site that generates a black 9:16 image and sends it into Snapchat's
share flow, so you can send it as a snap to a friend.

## Run it

Any static server works. Needs a secure context for `navigator.share`
(localhost counts):

```sh
npx serve snap-sender
```

Then open it on your phone — deploy it (GitHub Pages, etc.) for real use,
since `navigator.share` requires HTTPS outside of localhost.

## How it works

1. A black 1080x1920 PNG is generated on a canvas.
2. **Send black snap** calls `navigator.share({ files })`. On mobile, pick
   **Snapchat** in the share sheet — the image opens in Snapchat's preview
   screen.
3. Inside Snapchat you pick the friend and press send. The snap counts
   toward your score like any sent snap.

If file sharing is unsupported, the button falls back to downloading the
image so you can share it to Snapchat from your camera roll manually.

A Snap Creative Kit share button is also embedded (desktop-friendly), but
note it only shares a *link* to the page — Snap's web SDK cannot inject
media into a snap.

## What this can't do (Snap platform limits)

- **No Snapchat login on the web.** There is no OAuth/API that lets a website
  act as your Snapchat account. You are already logged in inside the app,
  which is where the send actually happens.
- **No friend list or auto-send.** Snap exposes no way to enumerate friends
  or send a snap programmatically. "Share to Preview" (fullscreen media) is
  only available to approved native iOS/Android apps via Creative Kit.
- **No automation.** One button press per snap — bulk/auto sending isn't
  possible through sanctioned APIs.
