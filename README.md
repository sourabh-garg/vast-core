# vast-core

A TypeScript library for handling VAST (Video Ad Serving Template) error codes and validation in video advertising applications. This module provides standardized error codes as defined by the IAB VAST specification, making it easier to handle and report video ad-related errors in a consistent manner.

## Features

- Comprehensive set of VAST error codes
- TypeScript support with type definitions
- Zero dependencies
- Fully tested
- IAB VAST specification compliant

## Installation

```bash
npm install vast-core
```

or using yarn:

```bash
yarn add vast-core
```

## Usage

### Basic Usage

```typescript
import { vastErrorCode } from 'vast-core';

// Example: Handling a VAST parsing error
function handleVastError(error: Error) {
  if (error instanceof XMLParseError) {
    return vastErrorCode.PARSING_ERROR; // Returns 100
  }
  
  if (error instanceof SchemaValidationError) {
    return vastErrorCode.SCHEMA_VALIDATION_ERROR; // Returns 101
  }
}
```

### Error Code Categories

The library provides the following error code categories:

#### Parsing Errors (100-102)
- `PARSING_ERROR` (100): XML parsing error
- `SCHEMA_VALIDATION_ERROR` (101): VAST schema validation error
- `INVALID_VAST_VERSION` (102): VAST version not supported

#### Trafficking Errors (200)
- `AD_TYPE_NOT_SUPPORTED` (200): Received unsupported ad type

#### Wrapper Errors (300-303)
- `GENERAL_WRAPPER_ERROR` (300): General wrapper error
- `TIMEOUT_ERROR` (301): VAST URI timeout
- `WRAPPER_LIMIT_REACHED` (302): Too many wrapper responses
- `NO_AD_FOUND_IN_WRAPPER` (303): No ads found in wrapper response

#### Linear Ad Errors (400-403)
- `GENERAL_LINEAR_ERROR` (400): Unable to display linear ad
- `FILE_NOT_FOUND` (401): Linear/mediaFile not found
- `MEDIA_MIME_TYPE_NOT_SUPPORTED` (403): Media type not supported

#### Non-Linear Ad Errors (500)
- `GENERAL_NON_LINEAR_AD` (500): General non-linear ads error

#### Companion Ad Errors (600)
- `GENERAL_COMPANION_ERROR` (600): General companion ad error

#### General Errors (900)
- `UNEXPECTED_ERROR` (900): Unexpected error
- `GENERAL_VPAID_ERROR` (900): General VPAID error

## Development

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Setting Up Development Environment

1. Clone the repository:
```bash
git clone https://github.com/sourabh-garg/vast-core.git
cd vast-core
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- `npm run build` - Builds the package for production
- `npm test` - Runs the test suite with coverage
- `npm run test:watch` - Runs tests in watch mode
- `npm run lint` - Lints the code
- `npm run format` - Formats the code using Prettier
- `npm run typecheck` - Runs TypeScript type checking

### Building

```bash
npm run build
```

The build output will be in the `lib` directory.

### Testing

```bash
# Run tests with coverage
npm test

# Run tests in watch mode
npm run test:watch
```

### Code Style

The project uses ESLint and Prettier for code formatting. Format your code using:

```bash
npm run format
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT Sourabh Garg

## Related Resources

- [IAB VAST Specification](https://www.iab.com/guidelines/vast/)
- [VAST Error Codes Reference](https://iabtechlab.com/standards/vast/)
