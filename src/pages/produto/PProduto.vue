<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="produto" />
      </q-breadcrumbs>
    </div>

    <q-form
      class="q-gutter-md q-mt-lg"
    >
      <div class="row justify-center q-gutter-md row items-start">

        <div class="col-5">
          <q-input
            filled
            v-model="produto.nome"
            label="Produto *"
            hint="Digite o nome do produto"
          />
        </div>

        <div class="col-5">
          <q-input
            filled
            v-model="produto.descricao"
            label="Descrição *"
            hint="Digite a descrição do produto"
          />
        </div>

      </div>

      <div class="row justify-center q-gutter-md row items-start">

        <div class="col-5">
          <q-input
            filled
            v-model="produto.preco"
            label="Preço *"
            hint="Digite preço do produto"
          />
        </div>

        <div class="col-5">
            <q-select filled
              v-model="produto.fabricante"
              :options="fabricantes"
              option-value="id"
              option-label="nome"
              />
          </div>

      </div>

    </q-form>

    <div class="row justify-center q-gutter-md row items-start q-mt-md">
      <div>
        <q-btn @click="gravar()" label="adicionar" color="primary" to="/produto-lista"/>
        <q-btn label="limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      produto: {
        nome: '',
        descricao: '',
        preco: '',
        fabricante: []
      },
      fabricantes: []
    }
  },

  mounted () {
    this.buscarFabricante()
  },

  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.produto))
      console.log(cloned)
      this.$axios.post('http://localhost:8081/v1/produto', cloned)
        .then(function (response) {
        })
        .catch(function (error) {
          console.log('erro ao salvar usuário', error.message)
        })
    },

    buscarFabricante () {
      this.$axios.get('http://localhost:8081/v1/fabricantes')
        .then((response) => {
          this.fabricantes = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

  }

}
</script>
