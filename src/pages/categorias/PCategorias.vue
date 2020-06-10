<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="categoria" />
      </q-breadcrumbs>
    </div>

    <div class="row justify-center">
      <div class="col-6">
        <q-form
          class="q-gutter-md q-mt-lg"
        >
          <q-input
            filled
            v-model="categoria.nome"
            label="Categria *"
            hint="Digite o nome da categoria"
          />

          <div>
            <q-btn @click="gravar()" label="adicionar" color="primary" to="/categorias-lista"/>
            <q-btn label="limpar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
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
      },
      funcoes: []
    }
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.categoria))
      this.$axios.post('http://localhost:8081/v1/categoria', cloned)
        .then(function (response) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'success',
            message: 'Categoria salva com sucesso'
          })
          console.log('salvou categoria')
        })
        .catch(function (error) {
          console.log(error)
        })
      this.reset()
    },

    reset () {
      this.categoria.nome = ''
    }
  }

}
</script>
