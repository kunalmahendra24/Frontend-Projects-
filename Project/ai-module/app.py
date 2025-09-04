from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data['text']
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    mood = 'positive' if sentiment > 0 else 'negative' if sentiment < 0 else 'neutral'
    return jsonify({ 'sentiment': sentiment, 'mood': mood })

if __name__ == '__main__':
    app.run(debug=True, port=5001)