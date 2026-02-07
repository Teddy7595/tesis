function apiLogin(email, password) {
  if (!email || !password) {
    throw new Error('Credenciales inválidas');
  }

  return {
    email,
    name: 'Usuario Demo'
  };
}
