function status(request, response) {
  response.status(200).json({
    "mensagem" : "Alunos do curso.dev estão no ar!."
  });
}

export default status;