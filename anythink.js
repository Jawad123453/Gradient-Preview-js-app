const app=Vue.createApp({
  data(){
    return{
      dirction:"to right",
      one:"rgb(2,0,36)",
      two:"rgb(9,9,121)",
      there:"rgb(68,0,255)"
    }
  },
  mounted() {
    console.log(`linear-gradient(`+this.dirction+`,`+ this.one+`,` +this.two + `,` + this.there + `);`)
  },
})
app.mount(`#app`)