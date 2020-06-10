<template>
  <q-page padding>
    <div class="row col-10 justify-center text-h5">Lista Categoria</div>
    <div class="row q-pa-md justify-center">
      <q-table class="col-10"
        dense
        :data="categorias"
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
        { name: 'nome', align: 'left', label: 'nome', field: 'nome', sortable: true }
      ],
      categorias: []
    }
  },

  mounted () {
    this.buscarCategorias()
  },

  methods: {

    buscarCategorias () {
      this.$axios.get('http://localhost:8081/v1/categorias')
        .then((response) => {
          this.categorias = response.data
        })
    }

  }
}
</script>
