from fastapi import FastAPI
import mysql.connector

app = FastAPI()

# MySQL connection setup
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="@Bu1fazl",  # Replace with your MySQL root password
    database="test_db"
)
cursor = db.cursor()

@app.get("/")
def read_root():
    return {"message": "Hello, World from FastAPI"}

@app.get("/items")
def get_items():
    cursor.execute("SELECT name FROM items")
    result = cursor.fetchall()
    return {"items": [item[0] for item in result]}
