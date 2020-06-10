<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="função" />
      </q-breadcrumbs>
    </div>

    <div class="row justify-center">
      <div class="col-6">
        <q-form
          class="q-gutter-md q-mt-lg"
        >
          <q-input
            filled
            v-model="funcao.nome"
            label="Função *"
            hint="Digite o nome da função"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />

          <div>
            <q-btn @click="gravar()" label="adicionar" color="primary" to="funcao-lista"/>
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
      funcao: {
        nome: ''
      }
    }
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.funcao))
      this.$axios.post('http://localhost:8081/v1/funcao', cloned)
        .then(function (response) {
          console.log('salvou categoria')
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'success',
            message: 'Função salva com sucesso' + response.message
          })
        })
        .catch(function (error) {
          console.log(error)
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: error.message
          })
        })
      this.reset()
    },

    reset () {
      this.funcao.nome = ''
    }
  }

}
</script>
