<template>
  <q-page padding>
    <h5>Categorias</h5>
    <div class="row">
      <form>
        <div class="row justify-center">
          <div class="col-10">
            <q-field color="primary">
              <q-input v-model="categoria.nome" label="Categoria" />
            </q-field>
          </div>
        </div>
      </form>
      <div class="row justify-center">
        <q-btn @click="gravar()" class="q-mt-lg" color="primary" label="Adicionar" icon-right="home" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      categoria: {
        nome: ''
      }
    }
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.categoria))
      this.$axios.post('http://localhost:8081/v1/categoria', cloned)
        .then(function (response) {
          console.log('salvou categoria')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>>
