## Testable React Components

- no internal state
- no side effects
  - ajax, ui change, side effects in sagas / thunks etc
- no lifecycle hooks

## Testing React Redux Components

- test container and display separately
- unit test verify methods / properties passed by container accurate
- use snapshot tests for display component

## Testing stateful react components

- mock dependencies then test
- use spies for side effects
- move logic from lifecycle to services
- prevent regression w/ snapshots
- inject values with mocks for services
- make stateless components when possible
