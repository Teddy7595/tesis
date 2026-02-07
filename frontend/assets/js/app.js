/* =========================
   LOGIN
========================= */
function loginPage() {
  return {
    email: '',
    password: '',
    error: '',

    doLogin() {
      if (!this.email || !this.password) {
        this.error = 'Email y contraseña requeridos';
        return;
      }

      localStorage.setItem(
        'auth',
        JSON.stringify({
          email: this.email,
          name: 'Usuario Demo'
        })
      );

      window.location.href = '/views/dashboard.html';
    }
  };
}

/* =========================
   DASHBOARD (CARPETAS RAÍZ)
========================= */
function dashboardPage() {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth) {
    window.location.href = '/views/login.html';
  }

  return {
    user: auth,

    repos: [],
    showCreateModal: false,
    newRepoName: '',
    error: '',

    init() {
      const saved = localStorage.getItem('repos');
      this.repos = saved ? JSON.parse(saved) : [];
    },

    openCreateModal() {
      this.newRepoName = '';
      this.error = '';
      this.showCreateModal = true;
    },

    createRepo() {
      if (!this.newRepoName.trim()) {
        this.error = 'El nombre es obligatorio';
        return;
      }

      // 🔥 AQUÍ ESTABA EL ERROR: faltaba items:[]
      const repo = {
        id: Date.now(),
        name: this.newRepoName.trim(),
        createdAt: new Date().toISOString(),
        items: [] // ← CLAVE
      };

      this.repos.push(repo);
      localStorage.setItem('repos', JSON.stringify(this.repos));

      this.showCreateModal = false;
    },

    openRepo(repo) {
      window.location.href = `/views/repo.html?id=${repo.id}`;
    },

    logout() {
      localStorage.removeItem('auth');
      window.location.href = '/views/login.html';
    }
  };
}

/* =========================
   REPO / SUBCARPETAS
========================= */
function repoPage() {
  const params = new URLSearchParams(window.location.search);
  const repoId = Number(params.get('id'));
  const path = params.get('path') || '';

  const repos = JSON.parse(localStorage.getItem('repos')) || [];
  const repo = repos.find(r => r.id === repoId);

  if (!repo) {
    window.location.href = '/views/dashboard.html';
  }

  // 🔥 PROTECCIÓN para repos viejos
  if (!repo.items) {
    repo.items = [];
  }

  // Buscar carpeta según path
  function findFolder(items, segments) {
    if (segments.length === 0) return items;

    const [current, ...rest] = segments;
    const folder = items.find(
      i => i.type === 'folder' && i.name === current
    );

    if (!folder) return items;
    return findFolder(folder.items, rest);
  }

  const segments = path ? path.split('/') : [];
  const currentItems = findFolder(repo.items, segments);

  return {
    repo,
    repos,
    currentPath: path,
    currentItems,

    showModal: false,
    modalType: '',
    modalTitle: '',
    newItemName: '',
    error: '',

    goDashboard() {
      window.location.href = '/views/dashboard.html';
    },

    openFolder(folder) {
      const newPath = this.currentPath
        ? `${this.currentPath}/${folder.name}`
        : folder.name;

      window.location.href =
        `/views/repo.html?id=${repoId}&path=${encodeURIComponent(newPath)}`;
    },

    openCreateFolder() {
      this.modalType = 'folder';
      this.modalTitle = 'Nueva carpeta';
      this.newItemName = '';
      this.error = '';
      this.showModal = true;
    },

    openCreateFile() {
      this.modalType = 'file';
      this.modalTitle = 'Nuevo documento';
      this.newItemName = '';
      this.error = '';
      this.showModal = true;
    },

    createItem() {
      if (!this.newItemName.trim()) {
        this.error = 'El nombre es obligatorio';
        return;
      }

      this.currentItems.push({
        id: Date.now(),
        type: this.modalType,
        name: this.newItemName.trim(),
        items: this.modalType === 'folder' ? [] : undefined
      });

      localStorage.setItem('repos', JSON.stringify(this.repos));
      this.showModal = false;
    },

    goBack() {
      // Si estamos dentro de subcarpetas, subimos un nivel.
      if (this.currentPath) {
        const parts = this.currentPath.split('/');
        parts.pop();
        const parentPath = parts.join('/');

        const base = `/views/repo.html?id=${repoId}`;
        window.location.href = parentPath
          ? `${base}&path=${encodeURIComponent(parentPath)}`
          : base;

        return;
      }

      // Si ya estamos en la raíz del repo, volvemos al dashboard
      this.goDashboard();
    }
  };
}

