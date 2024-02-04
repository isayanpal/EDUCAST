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

3. Set up the MongoDB database and update the connection details in the server configuration.

4. Run the application:

```bash
cd client
npm start
cd ../server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access EdUCast.

## Contributing

We welcome contributions from the community. If you'd like to contribute to EdUCast, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out to us with any feedback or suggestions. Happy blogging and chatting on EdUCast!
