<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="usuário" />
      </q-breadcrumbs>
    </div>

    <div class="row justify-center">
      <div class="col-6">
        <q-form
          class="q-gutter-md q-mt-lg"
        >
          <q-input
            filled
            v-model="usuario.nome"
            label="Usuário *"
            hint="Digite o nome do usuário"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />

          <q-select filled v-model="usuario.funcoes" :options="funcoes" label="Função do usuário" />

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
      usuario: {
        nome: '',
        email: '',
        senha: '',
        profissao: '',
        salario: '',
        enderecos: []

      },
      funcoes: [],
      value: ''
    }
  },

  mounted () {
    this.buscarFuncao()
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.usuario))
      this.$axios.post('http://localhost:8081/v1/usuario', cloned)
        .then(function (response) {
          console.log('salvou usuário', response.message)
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'success',
            message: 'Usuário salva com sucesso'
          })
        })
        .catch(function (error) {
          console.log('erro ao salvar usuário', error.message)
        })
      this.reset()
    },

    buscarFuncao () {
      this.$axios.get('http://localhost:8081/v1/funcoes')
        .then((response) => {
          console.log('Dados: ', response.data)
          this.funcoes = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    },

    reset () {
      this.usuario.nome = ''
    }
  }

}
</script>
