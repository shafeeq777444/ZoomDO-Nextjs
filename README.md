# Zoomdo - Video Conferencing App

Zoomdo is a real-time video conferencing application inspired by Zoom, built using WebRTC, Socket.io, and React. This project follows the implementation from **JavaScript Mastery**.

## Features
- Video and audio call functionality
- Room creation and joining via unique links
- Screen sharing
- Mute/unmute and video toggle
- Responsive UI

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, Socket.io
- **WebRTC** for real-time communication

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shafeeq777444/ZoomDO_Next-js.git
   cd zoomdo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the Clerk website and getstream website

Running the Project

npm run dev

## Reference
This project is inspired by and follows the tutorial from **JavaScript Mastery**. You can check out their tutorial [here](https://www.youtube.com/c/javascriptmastery).

## License
This project is for learning purposes only.

