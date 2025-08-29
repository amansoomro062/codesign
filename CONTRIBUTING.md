# Contributing to CoDesign

Thank you for your interest in contributing to CoDesign! This document provides guidelines and information for contributors.

## 🎯 Our Mission

CoDesign aims to democratize design tooling by offering a community-owned platform where anyone can contribute, extend, and innovate. We believe that design tools should be open, transparent, and accessible to everyone.

## 🤝 How to Contribute

### 1. **Report Bugs**
- Use the [GitHub Issues](https://github.com/amansoomro062/codesign/issues) page
- Include a clear description of the bug
- Provide steps to reproduce
- Include system information and screenshots if applicable

### 2. **Suggest Features**
- Open a new issue with the "enhancement" label
- Describe the feature and its benefits
- Consider the impact on existing functionality
- Discuss with the community before implementation

### 3. **Submit Code Changes**
- Fork the repository
- Create a feature branch
- Make your changes
- Add tests if applicable
- Submit a pull request

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Git

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/codesign.git
   cd codesign
   ```

2. **Install Dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start Development Servers**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style
- Use ESLint and Prettier for code formatting
- Follow TypeScript best practices
- Write meaningful commit messages
- Include JSDoc comments for complex functions

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Testing
- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Add integration tests for critical paths
- Test on multiple browsers/devices

## 🏗️ Project Structure

```
codesign/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # Reusable components
│   │   ├── lib/          # Utility functions
│   │   ├── hooks/        # Custom React hooks
│   │   └── types/        # TypeScript types
├── server/                # Express.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   └── services/         # Business logic
└── docs/                 # Documentation
```

## 🔧 Development Workflow

### 1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 2. **Make Changes**
   - Write code following project guidelines
   - Add tests for new functionality
   - Update documentation if needed

### 3. **Test Your Changes**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

### 4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### 5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR on GitHub
   ```

## 📚 Documentation

### Code Documentation
- Use JSDoc for function documentation
- Include examples for complex APIs
- Document configuration options
- Keep README files updated

### API Documentation
- Document all API endpoints
- Include request/response examples
- Specify authentication requirements
- Document error codes and messages

## 🧪 Testing

### Frontend Testing
- Unit tests with Jest and React Testing Library
- Component testing for UI components
- Integration tests for user workflows
- E2E tests for critical paths

### Backend Testing
- Unit tests for business logic
- API endpoint testing
- Database integration tests
- Performance and load testing

## 🚨 Security

### Reporting Security Issues
- **DO NOT** create public issues for security vulnerabilities
- Email security@codesign.dev (if available)
- Include detailed description and reproduction steps
- Allow time for response before public disclosure

### Security Best Practices
- Never commit sensitive information
- Use environment variables for secrets
- Validate all user inputs
- Implement proper authentication/authorization
- Regular dependency updates

## 🌟 Recognition

### Contributors
- All contributors will be listed in the README
- Significant contributions will be highlighted
- Contributors can add themselves to the contributors list

### Maintainers
- Active contributors may be invited to become maintainers
- Maintainers have merge access and can review PRs
- Maintainers help guide project direction

## 📞 Getting Help

### Community Support
- [GitHub Discussions](https://github.com/amansoomro062/codesign/discussions)
- [GitHub Issues](https://github.com/amansoomro062/codesign/issues)
- [Documentation](https://github.com/amansoomro062/codesign/wiki)

### Development Questions
- Use GitHub Discussions for questions
- Tag issues appropriately
- Provide context and code examples
- Be patient and respectful

## 📋 Issue Templates

### Bug Report Template
```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome, Firefox, Safari]
- Version: [e.g., 1.0.0]

## Additional Information
Screenshots, logs, or other relevant information
```

### Feature Request Template
```markdown
## Feature Description
Brief description of the feature

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other approaches were considered?

## Additional Context
Any other information that might be helpful
```

## 🎉 Thank You!

Thank you for contributing to CoDesign! Every contribution, no matter how small, helps make design tools more accessible and powerful for everyone.

---

**Remember**: This is a community project. Be kind, respectful, and helpful to other contributors. We're all here to learn and build something amazing together!
