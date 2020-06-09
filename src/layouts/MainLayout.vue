<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          JCAVI
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <MenuLink
          v-for="link in menuItems"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuLink from 'components/MenuLink'

export default {
  name: 'MainLayout',

  components: {
    MenuLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      menuItems: [
        {
          title: 'Categoria',
          caption: 'cadastrar/listar categorias',
          icon: 'category',
          link: '/categorias'
        },
        {
          title: 'Função do usuário',
          caption: 'cadastrar/listar funções',
          icon: 'functions',
          link: '/funcoes'
        },
        {
          title: 'fabricante',
          caption: 'cadastrar/listar fabricante',
          icon: 'airport_shuttle',
          link: '/fabricantes'
        },
        {
          title: 'Produto',
          caption: 'cadastrar/listar produto',
          icon: 'dashboard',
          link: '/produtos'
        },
        {
          title: 'Usuário',
          caption: 'cadastrar/listar usuário',
          icon: 'person_add',
          link: '/usuarios'
        },
        {
          title: 'Pedido',
          caption: 'cadastrar/listar pedido de venda',
          icon: 'domain',
          link: '/pedidos'
        }
      ]
    }
  }
}
</script>
