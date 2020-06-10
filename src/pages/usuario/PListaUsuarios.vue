<template>
  <q-page padding>
    <div class="row col-10 justify-center text-h5">Lista Usuários</div>
    <div class="row q-pa-md justify-center">
      <q-table class="col-10"
        dense
        :data="usuarios"
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
        { name: 'email', align: 'left', label: 'email', field: 'email', sortable: true },
        { name: 'profissao', align: 'left', label: 'profissao', field: 'profissao', sortable: true },
        { name: 'salario', align: 'left', label: 'salario', field: 'salario', sortable: true }
      ],
      usuarios: []
    }
  },

  mounted () {
    this.buscarUsuarios()
  },

  methods: {

    buscarUsuarios () {
      this.$axios.get('http://localhost:8081/v1/usuarios')
        .then((response) => {
          this.usuarios = response.data
        })
    }

  }
}
</script>
