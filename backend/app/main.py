# backend/app/main.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/transcribe', methods=['POST'])
def transcribe():
    data = request.json
    video_url = data.get('video_url')

    # Implement transcription logic below

    # Test transcription
    transcription = f"Mock transcription for the video URL: {video_url}"
    return jsonify({"transcription": transcription})

if __name__ == '__main__':
    app.run(debug=True)