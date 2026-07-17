from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Fake News Detector AI Server Running"


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    news = data["news"]

    # Temporary AI logic (we will add ML model later)
    fake_words = [
        "shocking",
        "secret",
        "miracle",
        "100%",
        "breaking"
    ]

    result = "Real News"

    for word in fake_words:
        if word in news.lower():
            result = "Fake News"
            break

    return jsonify({
        "prediction": result,
        "confidence": "85%"
    })


if __name__ == "__main__":
    app.run(debug=True)