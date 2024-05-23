new Vue({
    el: '#main-id',
    data: {
        name: 'developer',
        job: 'mern stack',
        website: "https://www.google.com",
        websiteTag: '<a href="https://www.google.com" >Website</a>',

        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        isShow: false,
        isUser: false,
        isError: false,
        success: false,
        characters:['adnan','ahmad','salman','adil'],
        arrayOfObject:[
            {name: 'pc-1', modle: 1998},
            {name: 'pc-2', modle: 1999},
            {name: 'pc-3', modle: 1920},
            {name: 'pc-4', modle: 1931},
        ],
        refData: '',
    },
    methods: {
        greet: function (time) {
            return "Good" + ' ' + time + " " + this.name
        },
        add: function(param) {
            this.age += param;
        },
        subtract: function(param){
            this.age -= param;
        },
        offset: function(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        /*addToA: function(){
            console.log("addtoa");
            return this.age + this.a
        },
        addToB: function(){
            console.log("addtob");
            return this.age + this.b
        }*/

        // Ref methods

        readRef: function(params) {
            this.refData = this.$refs.inputRef.value
            console.log(this.$refs);
        }
        
    },
    computed: {
        addToA: function(){
            console.log(this.author);
            return this.age + this.a
        },
        addToB: function(){
            console.log("addto");
            return this.age + this.b
        },
        multipleClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
})