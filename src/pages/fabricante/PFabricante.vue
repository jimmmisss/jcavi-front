<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="fabricante" />
      </q-breadcrumbs>
    </div>

    <div class="row justify-center">
      <div class="col-6">
        <q-form
          class="q-gutter-md q-mt-lg"
        >
          <q-input
            filled
            v-model="fabricante.nome"
            label="Fabricante *"
            hint="Digite o nome do fabricante"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />

          <div>
            <q-btn @click="gravar()" label="adicionar" color="primary"/>
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
      fabricante: {
        nome: ''
      }
    }
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.fabricante))
      this.$axios.post('http://localhost:8081/v1/fabricante', cloned)
        .then(function (response) {
          console.log('salvou fabricante')
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'success',
            message: 'Fabricante salvo com sucesso' + response.message
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
      this.fabricante.nome = ''
    }
  }

}
</script>
