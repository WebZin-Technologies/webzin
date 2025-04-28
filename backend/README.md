# Webzin Backend

This is the backend server for the Webzin project, a portfolio website with admin features.

## Features

- Project management (CRUD operations)
- Visitor analytics with geolocation
- Secure admin authentication with JWT
- API rate limiting
- CORS protection
- Security headers with Helmet
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
5. Update the `.env` file with your configuration
6. Generate a hashed password for admin access:
   ```
   node -e "console.log(require('bcryptjs').hashSync('your_password', 10))"
   ```
7. Copy the hash to your `.env` file as `ADMIN_PASSWORD_HASH`

## Running the Server

### Development Mode
```
npm run dev
```

### Production Mode
```
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Projects
- `GET /api/projects` - Get all projects (public)
- `POST /api/projects` - Add a new project (admin only)
- `DELETE /api/projects/:id` - Delete a project (admin only)

### Visitors
- `POST /api/visitors` - Track a new visitor (public)
- `GET /api/visitors` - Get visitor analytics (admin only)

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting to prevent abuse
- CORS protection
- Security headers with Helmet
- Input validation
- Error handling

## Development

### Linting
```
npm run lint
```

### Testing
```
npm test
```

## Environment Variables

See `.env.example` for all required environment variables.

## License

MIT 