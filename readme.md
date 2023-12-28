# safer-url

Wrapper around the native `URL` type but returns `null` for invalid URLs instead of throwing an error.

## Installation

Install `safer-url` with your favorite package manager:

```shell
npm install safer-url
```

## Usage

```typescript
import safeURL from 'safer-url';

console.log(safeURL('https://tunnel.dev')); // new URL(...)
console.log(safeURL('invalid')); // null
```
