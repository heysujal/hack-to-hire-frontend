# IndiGo Hack to Hire FrontEnd
## Real-Time Indigo-Flight Status and Notification System

#### For backend Code(and detailed API docs) : https://github.com/heysujal/hack-to-hire-backend

### Preview
User View

![Screenshot (19)](https://github.com/user-attachments/assets/3e9fb789-594c-4d4c-b652-c7c53e36a100)
![Screenshot (20)](https://github.com/user-attachments/assets/5dc80010-570d-41a2-a3a0-aa1bbff777dc)
![Screenshot (23)](https://github.com/user-attachments/assets/5f046aac-1d5f-4c4c-87bf-25229040e3d2)
![Screenshot (24)](https://github.com/user-attachments/assets/0dd6e4da-025c-44fb-b08a-0e8d1437a308)

#### Admin View

`/admin` route

![Screenshot (26)](https://github.com/user-attachments/assets/b97c775a-0e5b-43ef-b8a9-b1cda79416ac)
![Screenshot (27)](https://github.com/user-attachments/assets/54018278-b7d9-48d3-bc7b-637fab2501d1)

Changing the status of Flight 1003 From "Arrived" to "Delayed"

![Screenshot (29)](https://github.com/user-attachments/assets/21f5fae8-1b21-48da-a994-9bde7f2fdaab)

#### User View
Notification Received on Tracker Page

![Screenshot (30)](https://github.com/user-attachments/assets/283c2c05-33b3-41b7-b6e6-13e9e109135a)


### How to Run?
1. `npm i`
2. Configure SERVER_URL and SERVER_ENDPOINT as per choice in `constants/api.ts`
2. `npm run dev`

### Assumptions
- **Departure Time**: The time at which the flight will depart from the source.
- **Arrival Time**: The time at which the flight will reach the destination.
- **App Notifications**: User will be able see app notifications only if, he is on `/tracker` route and has subscribed for app notifications for a flight. If the user refreshes the app he will not get notifications again.
- **Flights**: All flights are from IndiGo and their flight id starts with `6E ` (space is intentional)

### Tech Stack
- **Frontend**: React, CSS, JavaScript, TypeScript
- **Backend**: Express, Node.js, 
- **Database**: MongoDB

### Frameworks/Libraries
- **UI Frameworks**: Magic UI, Tailwind CSS, Mantine.dev
- **Frontend**: Zustand, React Router DOM, ThunderClient
- **Backend**: Mongoose, bcrypt, Twilio, Nodemailer, Nodemon

### User Flow
1. Enter flight details (flight ID is optional).
2. View all matching flights.
3. Expand results for more details.
4. Subscribe using email, phone, or app notifications.
5. Duplicate details for the same flightId will throw error.

### Admin Route
- **Route**: `/admin`
- **Access**: Requires login. Upon login redirects to `/update` route. For Signup no UI is there, only API is available.
- **Functionality**:
  - Enter a specific flightId to update details.
  - Editable fields: Scheduled/actual arrival, scheduled/actual departure, gates, status.
  - Read-only fields: Flight number, source, destination.
  - On Clicking the update button the backend fetches all the subscribers for the particular flight_id and sends them notifications in their preferred way.
  - wait for the alert message to show up.

### APIs
- **Flights API** (`/api/flights/`):
  - `GET /` - Get all flights
  - `POST /` - Create a new flight
  - `GET /search` - Search for flights
  - `GET /:id` - Get a flight by ID

- **Admin API** (`/api/admin/`):
  - `POST /signup` - Admin signup
  - `POST /login` - Admin login
  - `GET /flights/:id` - Get flight details by ID
  - `PUT /flights/:id` - Update flight details by ID

- **Subscription API** (`/api/subscriptions/`):
  - `POST /:flightId/subscribe` - Add a subscriber to a flight
  - `GET /:flightId` - Get all subscribers for a flight

### Design Architecture
- **Models**: Define the schema for flights, admins, and subscriptions.
- **Controllers**: Handle the business logic for each API endpoint.
- **Routes**: Define the endpoints and link them to the appropriate controllers.

### Authentication
- **Admin Login**: Uses bcrypt for password hashing and JWT for authentication.

### Note
I do not own any copyrighted images used in the webapp. They are either taken from Flaticon or IndiGo Website for sake of this project.
