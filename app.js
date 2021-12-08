const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      // fullName: ''
    };
  },

  watch: {
    // name(value) {
    //   if (value.trim() === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + 'Hidayat';
    //   }
    // },

    // lastName(value) {
    //   if (value.trim() === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }

    counter(value) {
      if (value >= 50 || value <= -25) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    }
  },

  computed: {
    fullName() {
      console.log('Computed fullName Running');
      if (this.name.trim() === '' || this.lastName.trim() === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    // setName(event, lastName) {
    //   this.name = event.target.value;
    // },

    // outputFullName() {
    //   console.log('Output Full Name Running');
    //   if (this.name.trim() === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Hidayat';
    // },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
