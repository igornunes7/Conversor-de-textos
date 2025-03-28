const { PythonShell } = require('python-shell');

window.addEventListener('DOMContentLoaded', () => {
  //login
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      console.log("enviando login:", username, password);

      const options = {
        args: [username, password],
        pythonPath: 'python3',
        pythonOptions: ['-u'] 
      };

      PythonShell.run('auth.py', options)
        .then(results => {
          console.log("resposta do python:", results);

          const resposta = results[0];
          if (resposta === 'ok') {
            console.log("🔓 Login aprovado. Redirecionando...");
            window.location.href = 'main.html';
          } else {
            document.getElementById('error').textContent = 'Usuário ou senha incorretos.';
          }
        })
        .catch(err => {
          console.error("deu erro no auth:", err);
          document.getElementById('error').textContent = 'Erro na autenticação.';
        });
    });
  }

  //puxando o conversos do python
  const enviarBtn = document.getElementById('enviarTexto');
  if (enviarBtn) {
    enviarBtn.addEventListener('click', () => {
      const texto = document.getElementById('texto').value;
      console.log("🧪 Texto para converter:", texto);

      const options = { 
        args: [texto],
        pythonPath: 'python3',
        pythonOptions: ['-u']
      };

      PythonShell.run('converter.py', options)
        .then(results => {
          const resultado = results[0];
          console.log("✅ Texto convertido:", resultado);
          document.getElementById('resultado').textContent = resultado;
        })
        .catch(err => {
          console.error("❌ Erro na conversão:", err);
          document.getElementById('resultado').textContent = 'Erro na conversão.';
        });
    });
  }
});
