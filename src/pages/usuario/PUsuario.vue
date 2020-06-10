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
            />
          </div>

          <div class="col-4 justify-center">
            <q-input
              filled
              v-model="usuario.salario"
              label="Salário *"
              hint="Digite salário"
            />
          </div>
        </div>

        <!-- endereço -->
        <div class="row justify-center q-gutter-md row items-start">
          <div class="col-3">
            <q-input
              filled
              v-model="usuario.enderecos[0].cep"
              label="CEP *"
              hint="Digite cep" />
          </div>
          <div class="col-4">
            <q-input
              filled
              v-model="usuario.enderecos[0].logradouro"
              label="Logradouro *"
              hint="Digite logradouro" />
          </div>
          <div class="col-3">
            <q-input
              filled
              v-model="usuario.enderecos[0].bairro"
              label="Bairro *"
              hint="Digite bairro" />
          </div>
        </div>

        <div class="row justify-center q-gutter-md row items-start">
          <div class="col-7">
            <q-input
              filled
              v-model="usuario.enderecos[0].cidade"
              label="Cidade *"
              hint="Digite cidade" />
          </div>
          <div class="col-3">
            <q-input
              filled
              v-model="usuario.enderecos[0].uf"
              label="UF *"
              hint="Digite uf" />
          </div>
        </div>

        <div class="row justify-center q-gutter-md row items-start">
          <div class="col-2">
            <q-select filled multiple
              v-model="usuario.funcoes"
              :options="funcoes"
              option-value="id"
              option-label="nome"
              label="Funções" use-chips counter hint="Total:"
              />
          </div>
        </div>

    </q-form>

    <div class="row justify-center q-gutter-md row items-start q-mt-md">
      <div>
        <q-btn @click="gravar()" label="adicionar" color="primary" to="/usuario/lista"/>
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
        enderecos: [
          {
            bairro: '',
            cep: '',
            cidade: '',
            logradouro: '',
            uf: ''
          }
        ],
        funcoes: []
      },
      funcoes: [],
      isPwd: true,
      multiple: null
    }
  },

  mounted () {
    this.buscarFuncao()
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.usuario))
      console.log(cloned)
      this.$axios.post('http://localhost:8081/v1/usuario', cloned)
        .then(function (response) {
          console.log('sucesso')
        })
        .catch(function (error) {
          console.log('erro ao salvar usuário', error.message)
        })
    },

    buscarFuncao () {
      this.$axios.get('http://localhost:8081/v1/funcoes')
        .then((response) => {
          this.funcoes = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }

}
</script>
