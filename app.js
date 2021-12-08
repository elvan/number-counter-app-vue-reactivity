const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    // setName(event, lastName) {
    //   this.name = event.target.value;
    // },

    outputFullName() {
      console.log('Output Full Name Running');
      if (this.name.trim() === '') {
        return '';
      }

      return this.name + ' ' + 'Hidayat';
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
