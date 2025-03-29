function alterarCampos() {
    const tipoUsuario = document.getElementById('tipoUsuario').value;

    // Oculta todos os campos
    document.getElementById('comumCampos').style.display = 'block';
    document.getElementById('personalCampos').style.display = 'none';
    document.getElementById('proprietarioCampos').style.display = 'none';

    // Exibe campos específicos com base na seleção
    if (tipoUsuario === 'personal') {
        document.getElementById('personalCampos').style.display = 'block';
    } else if (tipoUsuario === 'proprietario') {
        document.getElementById('proprietarioCampos').style.display = 'block';
    }
}
