# QuickNote

A lightweight application designed for creating and managing notes. It provides a convenient way to jot down and organize your thoughts, ideas, and reminders. With a clean and intuitive interface, this app focuses on simplicity and efficiency.

## Live preview
You can try live preview here: https://quick-note-steel.vercel.app <br /><br />
Credentials:
|          Email         |     Password     |
| :--------------------: | :--------------: |
| live.preview@gmail.com | RnDfTCZW6N58uEkJ |

## Technology stack
Technology stack used to create this application:
|   Technology    |              Usage               | 
| :-------------: | :------------------------------: |
|   TypeScript    |       Programming languge        |
|      React      |      User Interface Library      |
|     Next.js     |         Framework & SSR          |
|   TailwindCSS   |          CSS Framework           |
|    Storybook    |     UI Component Development     |
| TanStack Query  | Data Fetching & State Management |
| React Hook Form |          Forms Handling          |
|       PWA       |        Progressive Web App       |
|      tRPC       |       Type-Safe Backend API      |
|     Prisma      |           Database ORM           |
|   NextAuth.js   |      Authentication Library      |
|   PostgreSQL    |       Relational Database        |
|     Docker      |    Containerization Platform     | 
|     Vitest      |        Testing Framework         |

## Installation and usage
### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/xStrixU/quick-note.git
   ```
2. Navigate to the project directory:
   ```sh
   cd quick-note
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```
### Usage
Usage is different depending on the selected mode: *development* or *production*.
#### Development mode:
1. Copy the `.env.example` file to the `.env.development.local` file
2.  Fill the environment variables
3. Run the application in development mode:
   ```sh
   pnpm dev
   ```
#### Production mode:
1. Copy the `.env.example` file to the `.env.production.local` file
2.  Fill the environment variables
3. Build the application:
   ```sh
   pnpm next:build
   ```
4. Run the application in production mode:
   ```sh
   pnpm start
   ```

## Preview
![image](https://github.com/xStrixU/quick-note/assets/41890821/b2fe940a-e540-441b-adda-45d9771f2fbb)

Write notes:
![image](https://github.com/xStrixU/quick-note/assets/41890821/c002f3bb-c8fb-4fb3-a427-d6678f56d6a8)

Invite other people:
![image](https://github.com/xStrixU/quick-note/assets/41890821/43d3162b-9417-4fe8-9f1d-45daedba41ad)

Share notes:
![image](https://github.com/xStrixU/quick-note/assets/41890821/39988462-2934-4e12-9226-4fe51264c2bd)

## License
MIT License, see [LICENSE](LICENSE).
