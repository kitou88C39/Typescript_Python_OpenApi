from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/no-cors-block")
def no_cors_block():
    return jsonify(message:"This response has no CORS headers")

@app.route("/cors-no-preflight-pass")
def cors_no_preflight_pass():
    response = jsonify(message="This response allows your origin")
    response.headers.add("Access-Control-Allow-Origin", "https://localhost:3000")
    return response