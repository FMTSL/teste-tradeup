<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Digite aqui</h2>
      <form @submit.prevent="realizarConsulta">

        <label for="numero">Exemplo: 00000-000: </label>

        <input style="margin-bottom: 20px" placeholder="Digite aqui" class="input input-bordered w-full max-w-xs"
        v-model="numero" type="text" @input="formatarNumero" pattern="[0-9]{5}-[0-9]{3}" required />
        <button class="btn btn-success" type="submit">Procurar</button>

      </form>

      <p v-if="consultaEmAndamento">Buscando CEP</p>

      <p v-if="consultaErro">Erro ao buscar cep.</p>

      <div class="card-actions justify-end">

        <ul>
          <li v-for="consulta in consultas" :key="consulta.id">
            {{ consulta.numero }} {{ consulta.resultado }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
      return {
          numero: '',
          consultaEmAndamento: false,
          consultaErro: false,
        }
      },
      computed: {
        consultas() {
          return this.$store.getters.obterConsultas
        }
      },
      methods: {
        formatarNumero() {
          const numeroLimpo = this.numero.replace(/[^\d]/g, '').replace('-', '')
          if (numeroLimpo.length >= 5) {
            this.numero = `${numeroLimpo.slice(0, 5)}-${numeroLimpo.slice(5, 8)}`
          } else {
            this.numero = numeroLimpo
          }
        },
        async realizarConsulta() {
      try {
        this.consultaEmAndamento = true;
        this.consultaErro = false;
        const numeroSemHifen = this.numero.replace('-', '');
        
        const response = await fetch(`http://127.0.0.1:8000/api/getcep/${this.numero}`);
        const data = await response.json();

        if (data) {

          const consulta = {
            id: Date.now(),
            numero: numeroSemHifen,
            resultado: 'Rua: ' + data.logradouro + ', Bairro: ' + data.bairro +
                      ' Localidade: ' + data.localidade + ' - ' + data.uf
          };

          const consultasAtuais = this.$store.state.consultas;

          if (consultasAtuais.length >= 4) {
            consultasAtuais.shift();
          }

          this.$store.dispatch('adicionarConsulta', consulta);

          this.numero = '';
        } else {
          console.error('Formato não esperado.');
        }
      } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        this.consultaErro = true;
      } finally {
        this.consultaEmAndamento = false;
      }
    }
  }
}
</script>
  