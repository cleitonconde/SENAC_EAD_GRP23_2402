const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
//const MONGO_URI = 'mongodb+srv://cleitaoconde:1AsqrAu7GRsSapZ0@cluster0.zcozz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const MONGO_URI = 'mongodb+srv://cleitaoconde:1AsqrAu7GRsSapZ0@cluster0.zcozz.mongodb.net/gcl_database?retryWrites=true&w=majority';

const JWT_SECRET = 'xd7C*g1PouPq50Md*JoQ)ZzQM4gP>+pX';

app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

// Definir uma rota para '/'
app.get('/', (req, res) => {
  res.send('Olá, mundo! O servidor está funcionando.');
});

// Modelo de Usuário
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Rota de Registro
app.post('/api/users/register', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
});

// Rota de Login
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
});

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

// Rota protegida de exemplo
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Você acessou uma rota protegida!', userId: req.user.userId });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
