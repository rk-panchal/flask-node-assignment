from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return "Flask Backend Running"


@app.route("/submit", methods=["POST"])
def submit():

    data = request.json

    return jsonify({
        "message": "Data received",
        "data": data
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000
    )