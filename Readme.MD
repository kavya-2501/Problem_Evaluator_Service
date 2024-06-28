# Problem Evaluator Service

## Overview
The Problem Evaluator Service is a TypeScript-based application that allows users to submit problems and handles these submissions through a message queue implemented using Redis. This service is designed to efficiently manage problem submissions and includes a UI dashboard for monitoring the queues.

## Features
- **Problem Submission**: Users can submit problems that will be processed by the service.
- **Message Queue**: Integrates Redis to queue problem submissions, ensuring smooth handling of multiple submissions.
- **UI Dashboard**: A web-based dashboard to monitor and manage the message queues.

## Requirements
- Node.js
- Redis
- WSL (Windows Subsystem for Linux)

## Getting Started

### Install Dependencies
First, install the necessary dependencies by running:

```sh

npm install

```

To run the project, ensure Redis server is running on WSL. You can start Redis by using the following command in your WSL terminal:

```sh

redis-server

```

Once Redis is running, you can start the application by running:

```sh

npm run dev

```

## Accessing the Service

- **Main Service**: Accessible at [http://localhost:4000](http://localhost:4000)
- **Queue Dashboard**: Accessible at [http://localhost:4000/admin/queues](http://localhost:4000/admin/queues)



