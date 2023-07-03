# answer-sheet-oj

This project is to create a small toolkit for some exam preparations. 

## Overview
- Motivations
  - Troublesome to record answers for multiple choices quiz
  - Especially when using mobile phone while doing something else (e.g. exercise, transpotations) 
- Inspirations
  - An answer recording toolkit is needed
  - For mobile devices
  - Enter your starting question number and go
  - Simple UI: Only show option, next and submit buttons
  
## Basic Functions
  - Client end
    - Home page
      - Inspiration phrases
      - Enter wanted quiz number and go
    - Answering page
      - Buttons
        - Choices
        - Other text field
        - Next
        - Submit
    - Reflecting Or Summary page
  - Backend
    - Answer CSV file upload 

## Infra & TechStack
- Serverless Backend
  - AWS API Gateway
  - AWS Lambda (Node?)
  - AWS RDS (Aurora?)
- Frontend
  - React with MUI
- Others
  - Swagger
  - Vite?
 

## API endpoints
- GET: `/api/v1/home`
- GET: `/api/v1/histories`
- GET: `/api/v1/answers/{id}`
- POST: `/api/v1/answers/{id}`
  - Payload: `answers`
- POST: `/api/v1/finish`
