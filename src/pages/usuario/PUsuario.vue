<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="usuário" />
      </q-breadcrumbs>
    </div>

    <q-form
      class="q-gutter-md q-mt-lg"
    >
      <div class="row justify-center q-gutter-md row items-start">
        <div class="col-10">
          <q-input
            filled
            v-model="usuario.nome"
            label="Usuário *"
            hint="Digite o nome do usuário"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />
        </div>
      </div>

      <div class="row justify-center q-gutter-md row items-start">
        <div class="col-8 ">
          <q-input
            filled
            v-model="usuario.email"
            label="Email *"
            hint="Digite o email do usuário"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />
        </div>

        <div class="col-2 justify-center">
          <q-input v-model="usuario.senha" filled :type="isPwd ? 'password' : 'text'" hint="Digite a senha">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center q-gutter-md row items-start">
          <div class="col-6">
            <q-input
              filled
              v-model="usuario.profissao"
              label="Profissão *"
              hint="Digite o profisão do usuário"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
          </div>

          <div class="col-4 justify-center">
            <q-input
              filled
              v-model="usuario.salario"
              label="Salário *"
              hint="Digite salário"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
          </div>
        </div>

        <div class="row justify-center q-gutter-md row items-start">
          <div class="col-2">
            <select>
              <option value="" disabled selected>Escolha uma Função</option>
              <option v-for="funcao in usuario.funcoes" :key="funcao.id" :value="funcao.id">{{ funcao.nome }}</option>
            </select>
          </div>
        </div>

    </q-form>

    <div class="row justify-center q-gutter-md row items-start q-mt-md">
      <div>
        <q-btn @click="gravar()" label="adicionar" color="primary"/>
        <q-btn label="limpar" type="reset" color="primary" flat class="q-ml-sm" />
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
        funcoes: [],
        enderecos: []

      },
      value: '',
      isPwd: true
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
          this.usuario.funcoes = response.data
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
