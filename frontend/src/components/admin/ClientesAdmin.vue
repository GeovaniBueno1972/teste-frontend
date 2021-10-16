<template>
  <div class="clientes-admin">
      <b-form>
          <input id="produto-id" type="hidden" v-model="produto.id">
          <b-row>
              <b-col md="3" sm="12">
                  <b-form-group label="Código:" label-for="produto-codigo">
                      <b-form-input id="produto-codigo" type="text"
                        v-model="produto.codigo" required
                        placeholder="Informe o Código do Produto..." />
                  </b-form-group>
              </b-col>
              <b-col md="9" sm="12">
                  <b-form-group label="Nome:" label-for="Cliente-nome">
                      <b-form-input id="produto-nome" type="text"
                        v-model="produto.name" required
                        placeholder="Informe Nome do Produto..." />
                  </b-form-group>
              </b-col>
          </b-row>
          
          <b-button variant="primary" v-if="mode === 'save'"
            @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove'"
            @click="remove">Salvar</b-button>
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </b-form>
      <hr>
      <b-table hover small striped :items="produtos" :fields="fields">
          <template slot="actions" slot-scope="data"> 
              <b-button variant="warning" @click="loadProduto(data.item)" class="mr-2">
                  <i class="fa fa-pencil"></i>
              </b-button>
              <b-button variant="danger" @click="loadProduto(data.item, 'remove')">
                  <i class="fa fa-trash"></i>
              </b-button>
          </template>
      </b-table>
  </div>
</template>

<script>
import {baseApiUrl, showError} from '@/global'
import axios from 'axios'


export default {
    name: 'ClientesAdmin',
    data: function(){
        return {
            mode: 'save',
            Cliente: {},
            Clientes: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'fone', label: 'Telefone'},
                {key: 'bairro', label: 'Bairro', sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    }, 
    methods: {
        loadClientes(){
            const url = `${baseApiUrl}/clientes`
            axios.get(url).then(res => {
                this.clientes = res.data
            })
        }, 
        reset(){
            this.mode = 'save'
            this.cliente = {}
            this.loadUsers()
        },
        save(){
            const method = this.cliente.id ? 'put' : 'post'
            const id = this.cliente.id ? `/${this.cliente.id}` : ''
            axios[method](`${baseApiUrl}/clientes${id}`, this.cliente)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)

        },
        remove(){
            const id = this.cliente.id
            axios.delete(`${baseApiUrl}/clientes/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadUser(cliente, mode = 'save'){
            this.mode = mode
            this.cliente = {...cliente}
        }
    },
    mounted(){
        this.loadClientes()
    }
}
</script>

<style>

</style>