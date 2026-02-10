from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    message = "Welcome to Flask API"
    return message

@app.route("/info")
def info():
    data = {
        "language": "Python",
        "framework": "Flask",
        "type": "Web API"
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
