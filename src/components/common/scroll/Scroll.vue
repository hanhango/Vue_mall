<template>
  <div ref="aaa" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.aaa,{
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        });

        if(this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', (position) => {
            this.$emit('backTopShow', position);
          });
        }

        this.scroll.on('pullingUp',() => {
          /*console.log('lalal');*/
          this.$emit('ispullup');
          this.scroll.finishPullUp();
        });
      })
    },

    methods: {
      refresh(){
        this.scroll && this.scroll.refresh();
      },
      scrollTo(x, y, time=400) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
    }
  }
</script>

<style scoped>

</style>