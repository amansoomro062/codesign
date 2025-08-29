# 🖌️ CoDesign – Open-Source Collaborative Design Platform

> **CoDesign** is an open-source, AI-powered design platform for teams to create together in real time.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green.svg)](https://www.mongodb.com/)

## 🎯 Vision

Design is a fundamental building block of the modern web, yet the leading tools are closed and proprietary. CoDesign aims to democratize design tooling by offering a community-owned platform where anyone can contribute, extend, and innovate.

## ✨ Key Features

- **Real-time collaboration** → Multiple users editing on the same canvas
- **Vector tools & layers** → Shapes, text, grouping, constraints
- **AI design assistance**:
  - Auto-layout & responsive suggestions
  - Generate components from natural language prompts
  - Export design frames directly to React/Tailwind code
  - Accessibility checks & improvements
- **Versioning & snapshots** → Rollback, branching, and design history
- **Plugin ecosystem** → Extensible by the community
- **Self-hostable** → Run it on your own infra for privacy & control

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB 6+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amansoomro062/codesign.git
   cd codesign
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🏗️ Architecture

```
codesign/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Utility functions
│   │   └── services/     # API services
├── server/                # Node.js/Express backend
│   ├── routes/           # API routes
│   ├── models/           # MongoDB models
│   ├── middleware/       # Express middleware
│   └── services/         # Business logic
├── docs/                 # Documentation
└── shared/               # Shared types and utilities
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time server
- **JWT** - Authentication

### AI & ML
- **OpenAI API** - Design suggestions
- **TensorFlow.js** - Client-side ML
- **Design tokens** - Consistent design system

## 🔧 Development

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server:dev` - Start backend server with hot reload
- `npm run client:dev` - Start frontend with hot reload
- `npm run build` - Build frontend for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style

We use ESLint and Prettier for consistent code formatting. Run `npm run format` before committing.

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Figma, Sketch, and other design tools
- Built with love by the open-source community
- Special thanks to all contributors and supporters

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/amansoomro062/codesign/issues)
- **Discussions**: [GitHub Discussions](https://github.com/amansoomro062/codesign/discussions)
- **Documentation**: [Wiki](https://github.com/amansoomro062/codesign/wiki)

---

**Made with ❤️ by the CoDesign Community**
