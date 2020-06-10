<template>
  <q-page padding>
    <div class="row col-10 justify-center text-h5">Lista Produtos</div>
    <div class="row q-pa-md justify-center">
      <q-table class="col-10"
        :data="produtos"
        :columns="colunas"
        row-key="nome"
      />
    </div>
  </q-page>
</template>

<script>
export default {

  data () {
    return {
      colunas: [
        { name: 'id', align: 'right', label: 'ID', field: 'id', sortable: true },
        { name: 'nome', align: 'left', label: 'nome', field: 'nome', sortable: true },
        { name: 'descricao', align: 'left', label: 'nome', field: 'nome', sortable: true },
        { name: 'preco', align: 'left', label: 'nome', field: 'nome', sortable: true },
        { name: 'fabricante', align: 'left', label: 'nome', field: 'nome', sortable: true }
      ],
      produtos: []
    }
  },

  mounted () {
    this.buscarProdutos()
  },

  methods: {

    buscarProdutos () {
      this.$axios.get('http://localhost:8081/v1/produtos')
        .then((response) => {
          this.produtos = response.data
        })
    }

  }
}
</script>
