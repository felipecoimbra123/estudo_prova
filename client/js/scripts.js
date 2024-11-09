async function loadClients() {
    const response = await fetch('http://localhost:3000/clients');
    const data = await response.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 
    data.clients.forEach(client => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${client.id}</td>
        <td>${client.name}</td>
        <td>${client.cellphone}</td>
        <td>R$ ${client.adress}</td>
        <td>
          <button onclick="editClient(${client.id})">Editar</button>
          <button onclick="deleteClient(${client.id})">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  document.querySelector('#clienteForm form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const cellphone = document.getElementById('cellphone').value;
    const adress = document.getElementById('adress').value;
  
    await fetch('http://localhost:3000/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, cellphone, adress })
    });
  
    document.querySelector('#clienteForm form').reset();
    loadClients();
  });
  
  async function deleteClient(id) {
    await fetch(`http://localhost:3000/clients/${id}`, {
      method: 'DELETE'
    });
    loadClients();
  }

  async function editClient(id) {
    const name = prompt("Novo nome do cliente:");
    const cellphone = prompt("Novo telefone do cliente:");
    const adress = prompt("Novo endereço do cliente:");
  
    await fetch(`http://localhost:3000/clients/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, cellphone, adress})
    });
    loadClients();
  }

  loadClients();
  

const form = document.getElementById('#clienteForm')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const name = document.getElementById('nome').value
        const cellphone = document.getElementById('telefone').value
        const adress = document.getElementById('endereco').value

    const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, cellphone, adress})
    })

    const result = await response.json()
    console.log(result)

    if (result.success) {
        alert("Cliente cadastrado!")
        window.location.href = './animais.html'
    } else {
        alert('Errou!')
    }
})

const formAnimals = document.getElementById('clienteForm')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const name = document.getElementById('nome').value
        const age = document.getElementById('idade').value
        const type = document.getElementById('tipo').value

    const response = await fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, age, type})
    })

    const result = await response.json()
    console.log(result)

    if (result.success) {
        alert("Pet cadastrado!")
    } else {
        alert('Pet não cadastrado!')
    }
})

