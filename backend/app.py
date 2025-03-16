from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# ✅ Load the dataset once when the server starts
df = pd.read_csv('processed_songs.csv')

@app.route('/')
def home():
    return jsonify({"message": "Flask API is running!"})

# ✅ New route to display the CSV data
@app.route('/songs', methods=['GET'])
def get_songs():
    # will change the 10 to x so we can take in how many songs the users want
    data = df.head(10).to_dict(orient='records')  # Convert to JSON format
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

