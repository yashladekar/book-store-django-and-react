# Book E-commerce Project

This is a Book E-commerce Project that utilizes Django and Django Rest Framework for the backend API, and React for the frontend. 

## Project Overview

The project includes features such as viewing a list of books, searching for books by title or author, sorting books by different categorizing books. 

## Getting Started

### Prerequisites

- Python 3.11.4
- Node.js and npm



## Installation

1. Clone the repository

```bash
  git Clone https://github.com/yashladekar/book-store-django-and-react.git
```
2. Change to the project directory
```bash
cd bookstore
```
3. Install backend Python dependencies
```bash
pip install -r requirements.txt
```
4. Migrate the database
```bash
python manage.py migrate
```
5. Install frontend dependencies
```bash
cd ..
cd reactapp
npm install
```
6. Start frontend
```bash
npm start
```
7. start backend
```bash
cd ..
cd bookstore
python manage.py runserver 
```



## Appendix

The Django API will be running at http://localhost:8000/ and the React application will be running at http://localhost:3000/

## Features

- **Book List:** View a list of available books.
- **Search:** Search for books by title or author.
- **Categories:** View books by different categories.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
