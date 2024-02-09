![image](https://github.com/isayanpal/EDUCAST/assets/102523492/90abbfa8-e15f-47f4-ab71-a81aa31b8dcc)


# EdUCast - Student Blog and Community Platform

EdUCast is a blog application designed for students, offering a platform for creating, reading, updating, and deleting posts. In addition to individual posts, EdUCast provides a community chat feature with private rooms, allowing multiple users to engage in discussions on various topics.

## Features

- **Post Management:** Users can create, read, update, and delete posts, sharing their thoughts and experiences with the community.

- **Community Chat:** Engage in real-time discussions within private rooms, fostering a collaborative environment for students to connect and share ideas.

- **Future Enhancements:**
  - **Voting System:** Upvote and downvote posts to highlight popular content and encourage meaningful interactions.
  - **Voice Spaces:** EdUCast will analyze user interactions and suggest joining voice spaces for audio interactions, enhancing the user experience.
  - **Podcast Subscriptions:** Users can add podcasts, allowing others to subscribe to their favorite creators. This feature also opens up opportunities for creators to monetize their content.

## Tech Stack

- **Database:** MongoDB , Firebase
- **Backend:** Express.js, Node.js
- **Frontend:** React.js
- **Post Editing:** ReactQuill library
- **Image Uploads:** Multer library

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/educast.git
cd educast
```

2. Install dependencies:

```bash
cd client
npm install
cd ../server
npm install
```

3. Set up the MongoDB database and update the connection details in the server configuration. Create your own .env file by taking example from the .env.example .

4. Run the application:

```bash
cd client
npm run dev
cd ../server
nodemon index.js
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to access EdUCast.
