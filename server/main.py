from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.post("/login")
def login(data: dict):
    email = data.get("email")
    password = data.get("password")

    if email == "test@gmail.com" and password == "123456":
        return {"success": True}

    return {"success": False}

users = []  # simple memory storage (temporary)

@app.post("/signup")
def signup(data: dict):
    email = data.get("email")
    password = data.get("password")

    # check if user exists
    for user in users:
        if user["email"] == email:
            return {"success": False, "message": "User already exists"}

    users.append({
        "email": email,
        "password": password
    })

    return {"success": True, "message": "Signup successful"}