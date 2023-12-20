# pip install flask-cors

from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

produtos = [
    {
        "id": 1,
        "nome": "Produto A",
        "quantidade": 10,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/ornament_decoration_tree_christmas_icon_259928.png",
        "descricao": "Descricao do Produto A"
    },
    {
        "id": 2,
        "nome": "Produto B",
        "quantidade": 5,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/holiday_winter_christmas_claus_santa_icon_259932.png",
        "descricao": "Descricao do Produto B"
    },
    {
        "id": 3,
        "nome": "Produto C",
        "quantidade": 22,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/ball_balls_christmas_icon_259933.png",
        "descricao": "Descricao do Produto C"
    },
    {
        "id": 4,
        "nome": "Produto D",
        "quantidade": 0,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/lollipop_holiday_christmas_candy_icon_259935.png",
        "descricao": "Descricao do Produto D"
    },
    {
        "id": 5,
        "nome": "Produto E",
        "quantidade": 54,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/cold_holiday_winter_christmas_sock_icon_259936.png",
        "descricao": "Descricao do Produto E"
    }, 
    {
        "id": 6,
        "nome": "Produto F",
        "quantidade": 100,
        "imagem": "https://cdn.icon-icons.com/icons2/4100/PNG/96/snow_winter_holiday_deer_christmas_icon_259934.png",
        "descricao": "Descricao do Produto F"
    }
]

@app.route('/api/produtos', methods=['GET'])
def get_produtos():
    return jsonify(produtos)


@app.route('/cadastro', methods=['POST'])
def post_produtos():
    data = request.json
    arquivo = './data.json'
    dados_existentes = []

    print(data)

    with open(arquivo, 'r') as file:
        dados_existentes = json.load(file)

    dados_existentes.append(data)

    with open(arquivo, 'w') as file:
        json.dump(dados_existentes, file, indent=4)

    return "Adicionado", 201
    

if __name__ == '__main__':
    app.run(debug=True, port=5001)
