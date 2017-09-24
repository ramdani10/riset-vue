<template>
  <div class="container">
    <div id="products" class="row group-item" >
        <div class="item col col-4 grid-group-item" v-for="p in dataWorkers">
            <div class="thumbnail">
                <img class="img-responsive" v-bind:src= "p.image" alt="">
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        {{ p.first_name+' '+p.last_name }}</h4>
                    <p class="group inner list-group-item-text">
                        Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="lead">$.{{ p.price }}</p>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-success" href="http://www.jquery2dotnet.com">Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'worker-index',
  data(){
    return {
      loading: false,
    }
  },
  created(){
    this.getWorkers()
  },
  destroyed(){
    // if (this.subscribed) store.dispatch('unsubscribeFromFruits')
  },
  methods: {
      ...mapActions(['getWorkers'])
  },
  computed: {
    ...mapGetters({
      dataWorkers: 'getListWorker'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glyphicon { margin-right:5px; }
.thumbnail
{
    margin-bottom: 20px;
    padding: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

.item.list-group-item
{
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
    background: #428bca;
}

.item.list-group-item .list-group-image
{
    margin-right: 10px;
}
.item.list-group-item .thumbnail
{
    margin-bottom: 0px;
}
.item.list-group-item .caption
{
    padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
    background: #eeeeee;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item img
{
    float: left;
}
.item.list-group-item:after
{
    clear: both;
}
.list-group-item-text
{
    margin: 0 0 11px;
}

.img-responsive{
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}


</style>
