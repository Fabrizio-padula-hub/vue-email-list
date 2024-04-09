// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const { createApp } = Vue;

createApp({
  data() {
    return {
        // creare una variabile all'inizio vuota
        myEmail: null,
        // array vuoto per pushare le mail
        listEmail: [],
    };
  },
  methods: {
    generateEmail(){
        // ciclare per 10 volte listEmail 
        // in modo da avere 10 mail
        for(let i = 0; i <= 9; i++){
            // usare l'API per creare le Email 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const serverData = response.data;
                this.myEmail = serverData.response;
                // pusharle nel'array da stampare
                this.listEmail.push(this.myEmail)
                console.log(this.listEmail);
            });
        }
    },
  },
  mounted() {
    this.generateEmail();
  }
}).mount('#app');

