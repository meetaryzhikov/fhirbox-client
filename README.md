# FHIRbox Client

A React TypeScript application for interacting with a FHIR server. This client provides a simple interface to perform health checks, view server metadata, and create patient resources.

## Features

- **Health Check**: Verify the FHIR server status
- **Metadata**: Retrieve and display FHIR server capabilities
- **Create Patient**: Add new patient records to the FHIR server

## Prerequisites

- Node.js (v16 or higher)
- A running FHIR server on `http://127.0.0.1:3001`

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/meetaryzhikov/fhirbox-client.git
   cd fhirbox-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── CreatePatient.tsx    # Patient creation form
│   ├── HealthCheck.tsx      # Server health check component
│   └── Metadata.tsx         # Metadata display component
├── App.tsx                  # Main application component
├── api.ts                   # FHIR API client functions
└── main.tsx                 # Application entry point
```

## API Endpoints

The client communicates with the FHIR server at `http://127.0.0.1:3001`:

- `GET /` - Health check
- `GET /metadata` - Server metadata
- `POST /Patient` - Create patient resource

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private.
