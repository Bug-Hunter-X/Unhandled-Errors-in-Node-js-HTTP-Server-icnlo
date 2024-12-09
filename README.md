# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: insufficient error handling in HTTP servers.  The `bug.js` file showcases a server with minimal error handling, while `bugSolution.js` provides an improved version with more robust error management.

## Problem

The `bug.js` server lacks comprehensive error handling.  If an error occurs (e.g., port already in use), the server will crash without providing informative error messages.

## Solution

The `bugSolution.js` file demonstrates how to gracefully handle errors.  It includes an `'error'` event listener that logs detailed error information, preventing server crashes.  It also includes more robust checks before starting the server to avoid issues.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` to see the initial flawed implementation.
4. Run `node bugSolution.js` to see the improved implementation with error handling.