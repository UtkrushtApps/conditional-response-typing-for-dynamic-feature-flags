## Task Overview
You will refactor and harden a TypeScript event processing pipeline for a financial system. Your goal is to ensure that all plugin and event interactions are exhaustively and strictly type-safe: plugins must only receive events they support, event transformations and filters must not access invalid properties, and adding new event types or plugins must be guarded by compile-time type checks.

## Guidance  
- The project simulates a pluggable event processing system where events of various kinds stream through a dynamic pipeline.
- Each event kind carries distinct payloads (with a discriminant property) and plugins selectively operate on certain event types.
- TypeScript configuration uses strict checks: all event type and plugin mismatches must be caught at compile-time, leveraging discriminated unions and advanced typing.
- The code is structured modularly, separating event types, plugin interfaces, core processing, and utilities. 
- Future maintainers should be able to add new event kinds and plugins safely and have the compiler enforce all necessary exhaustiveness and type compatibility.

## Objectives
- Refactor the event pipeline system to enforce strict compile-time type-safety using TypeScript features.
- Ensure that all plugins only handle and access event payloads for event kinds they explicitly support.
- Enforce exhaustiveness so undefined event kinds or missing handlers surface as compile errors.
- Make the system easily extensible for introducing new event types or plugins while preserving type correctness and compile-time safety.

## How to Verify
- Check that all event kinds are handled with correct type constraints in the event processing pipeline.
- Confirm that plugins can only access properties for specific supported event kinds.
- Validate that adding a new event kind or plugin results in compiler errors unless all type guards and handlers are properly updated.
- Ensure no possible runtime type mismatches or property errors can occur in the plugin-event interactions as enforced by TypeScript's static analysis.