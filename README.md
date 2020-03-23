# allowed-characters
Throw an error if a string contains unallowed characters

## Installation

```bash
npm i --save allowed-characters
```

## Usage

allowedCharacters -> allowed -> string -> string|error

### 1. Correct characters
```javascript
allowedCharacters('123', '123') === '123';
```

### 2. Incorrect characters
```javascript
allowedCharacters('123', '1234')
// throws error: 'contained unallowed character "4"'
```
