# Mergington High School - Extracurricular Activities Portal

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

A modern web application that allows students to view and sign up for extracurricular activities at Mergington High School.

## Tech Stack

### Backend
- **ASP.NET Core Web API** (.NET 8.0)
- RESTful API design
- In-memory data storage

### Frontend
- **Angular** (Standalone components)
- TypeScript
- Responsive CSS design

## Features

- View all available extracurricular activities
- See activity details (description, schedule, availability)
- Sign up for activities via email
- Real-time availability updates

## Available Activities

1. **Chess Club** - Learn strategies and compete in chess tournaments (Fridays 3:30-5:00 PM, max 12 participants)
2. **Programming Class** - Learn programming fundamentals and build software projects (Tue/Thu 3:30-4:30 PM, max 20 participants)
3. **Gym Class** - Physical education and sports activities (Mon/Wed/Fri 2:00-3:00 PM, max 30 participants)

## Getting Started

### Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0) or higher
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Running the Backend

```bash
cd Backend
dotnet restore
dotnet run --urls "http://localhost:5000"
```

The backend API will be available at `http://localhost:5000`

### Running the Frontend

```bash
cd Frontend
npm install
ng serve
```

The frontend application will be available at `http://localhost:4200`

### API Endpoints

- `GET /api/activities` - Get all activities
- `POST /api/activities/{activityName}/signup?email={email}` - Sign up for an activity

## Development

### Backend Structure
```
Backend/
├── Controllers/
│   └── ActivitiesController.cs    # API endpoints
├── Models/
│   └── Activity.cs                # Activity data model
└── Program.cs                     # Application entry point
```

### Frontend Structure
```
Frontend/src/app/
├── models/
│   └── activity.model.ts          # TypeScript interfaces
├── services/
│   └── activity.service.ts        # API communication service
├── app.ts                         # Main component logic
├── app.html                       # Main component template
└── app.css                        # Component styles
```

## License

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)


