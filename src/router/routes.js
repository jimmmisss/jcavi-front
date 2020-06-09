
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/PDashboard.vue') },
      { path: 'categorias', component: () => import('pages/categorias/PCategorias.vue') },
      { path: 'funcoes', component: () => import('pages/funcao/PFuncao.vue') },
      { path: 'usuarios', component: () => import('pages/usuario/PUsuario.vue') },
      { path: 'fabricantes', component: () => import('pages/fabricante/PFabricante.vue') },
      { path: 'pedidos', component: () => import('pages/pedido/PPedido.vue') },
      { path: 'produtos', component: () => import('pages/produto/PProduto') }

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
