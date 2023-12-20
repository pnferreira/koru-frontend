from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

produtos = [
    {"id":1, "nome":"Produto 1", "preco":23.90},
    {"id":2, "nome":"Produto 2", "preco":24.90},
    {"id":3, "nome":"Produto 3", "preco":25.90}
]


@app.route('/api/produtos', methods=['GET'])
def get_produtos():
    
    return jsonify(produtos), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)