# Problem List Manager

A modern React application for managing and tracking programming problems or questions. Built with React and Tailwind CSS, featuring a responsive design with sidebar navigation and detailed problem tracking capabilities.

<img width="1512" alt="Screenshot 2024-12-25 at 10 19 44 AM" src="https://github.com/user-attachments/assets/bf1a0792-dc7b-4d4e-a42d-881157c47b3e" />


## Features

- **Responsive Sidebar Navigation**
  - Collapsible sidebar for better space management
  - Lists management with private/public status indicators

- **Comprehensive Problem Tracking**
  - Progress visualization with circular progress indicator
  - Difficulty-based categorization (Easy, Medium, Hard)
  - Problem completion status tracking
  - Visual indicators for solved problems

- **Advanced Filtering System**
  - Filter problems by difficulty level
  - Multi-select filter options
  - Quick filter reset functionality
  - Active filter indicators

- **Responsive Design**
  - Mobile-friendly layout
  - Adaptive content arrangement
  - Smooth transitions and animations

## Tech Stack

- React
- Tailwind CSS
- Lucide React Icons
- random-sentence (for demo data)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── components/
    ├── SideBar      # Sidebar navigation component
    └── MainContent  # Main content area component
```

## Usage

### Sidebar Navigation

The sidebar provides access to your lists and can be toggled using the panel icon. It displays:
- Personal lists
- List privacy status
- Quick access to favorites

### Main Content

The main section displays:
- Problem list with difficulty indicators
- Progress tracking
- Filtering options
- Completion status

### Filtering

To filter problems:
1. Click the "Filter" button
2. Select desired difficulty levels
3. Active filters will appear as tags
4. Use the reset button to clear all filters

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Insert License Here]

## Contact

[Your Name] - [your.email@example.com]

Project Link: [https://github.com/username/repo]
