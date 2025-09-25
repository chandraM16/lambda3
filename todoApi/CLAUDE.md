# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` (uses nodemon for auto-reload)
- **Install dependencies**: `npm install`

## Project Architecture

This is a Node.js Express REST API for managing todos with a layered architecture:

### Architecture Pattern
- **Repository Layer** (`src/repository/`): Data access layer with in-memory storage
- **Service Layer** (`src/services/`): Business logic layer
- **Controller Layer** (`src/controllers/`): HTTP request/response handling
- **Validator Layer** (`src/validators/`): Input validation middleware
- **Routes Layer** (`src/routes/`): API routing with versioning (v1)

### Key Components
- **Entry Point**: `src/index.js` - Express app setup with body parser and routing
- **Configuration**: `config.js` - Loads environment variables (PORT)
- **API Structure**: All endpoints are under `/api/v1/` prefix
- **Data Storage**: In-memory array in TodoRepository (no database)

### API Endpoints
- `POST /api/v1/todo` - Create todo (requires title, description, deadline)
- `GET /api/v1/todos` - Get all todos
- `GET /api/v1/todo/:id` - Get todo by ID
- `PUT /api/v1/todo/:id` - Update todo (requires title, description, deadline)
- `DELETE /api/v1/todo/:id` - Delete todo

### Data Flow
Controller → Service → Repository → In-memory array

### Dependencies
- Express 5.x for web framework
- uuid for generating unique IDs
- dotenv for environment configuration
- nodemon for development auto-reload

### Important Notes
- Uses in-memory storage (data resets on restart)
- All string inputs are trimmed in controllers
- Dates are converted to ISO string format
- UUIDs are generated for todo IDs