// script.js

// Dicionário inicial de comentários
const commentDictionary = {
    '1': {'name': 'professora', 'comment': 'Bem-vindos à aula de hoje!'},
    '2': {'name': 'aluna', 'comment': 'Obrigada, estou ansiosa pela aula!'}
};

document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar comentários do dicionário
    function loadComments() {
        Object.values(commentDictionary).forEach(comment => {
            addComment(comment.name, comment.comment)
        });
    }

    // Chama função para carregar comentários ao carregar a página
    loadComments();
});
const button = document.getElementById('enviar');
button.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#0056b3';
});

button.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '#007bff';
});

button.addEventListener('click', addNewComment);

function addComment(nameInput, commentInput){
    const newComment = document.createElement('div');
      newComment.classList.add('comment', nameInput);
      // Usando concatenação clássica
      newComment.textContent = nameInput.charAt(0).toUpperCase() + nameInput.slice(1) + ': ' + commentInput;
      
      const commentsContainer = document.getElementById('comments-container');
      commentsContainer.appendChild(newComment);
}

function addNewComment() {
    const nameInput = document.getElementById('name-input').value.trim().toLowerCase();
    const commentInput = document.getElementById('comment-input').value.trim();
  
    if ((nameInput === "professora" || nameInput === "aluna") && commentInput) {
      
      addComment(nameInput, commentInput);
      document.getElementById('name-input').value = '';
      document.getElementById('comment-input').value = '';

      // Atualiza o dicionário de comentários
      const newId = Object.keys(commentDictionary).length + 1;
      commentDictionary[newId] = {name: nameInput, comment: commentInput};
      console.log('Dicionário de comentários atualizado:', JSON.stringify(commentDictionary, null));

    } else {
      alert('Por favor, digite "professora" ou "aluna" como nome e preencha o campo de comentário.');
    }
  }
