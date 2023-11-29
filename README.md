# Word counter

## Server app

### Setup and install packages

1. Go to `server` folder and create a virtual environment: `python3 -m venv venv`
2. Activate the virtual env: `source venv/bin/activate`
3. Install the python packages: `pip install -r requirements.txt`

### Run app

1. Go to `server` folder
2. Execute: `uvicorn main:app --reload`
3. (Optional) Go to `http://127.0.0.1:8000` in the browser if you want to test the GET endpoints

## Client app

### Setup and install packages

1. Go to `client` folder
2. Install the npm packages: `npm install`

### Run app

1. Go to `client` folder
2. Execute: `npm run dev`
3. Go to `http://127.0.0.1:3000` in the browser to interact with the UI
