
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'categorias', component: () => import('pages/categorias/PCategorias') },
      { path: 'funcoes', component: () => import('pages/funcao/PFuncao') },
      { path: 'usuario', component: () => import('pages/usuario/PUsuario') },
      { path: 'fornecedor', component: () => import('pages/fornecedor/PFornecedor') },
      { path: 'pedido', component: () => import('pages/pedido/PPedido') },
      { path: 'produto', component: () => import('pages/produto/PProduto') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
