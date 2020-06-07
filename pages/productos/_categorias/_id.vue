<template>
  <section class="ProductoEnEspecifico">
    <section v-if="$fetchState.pending" class="loading">
      <vcl-instagram v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    </section>
    <section v-else-if="$fetchState.error" class="loading_error">
      <ErrorDeComponents :error="$fetchState.error.message " />
    </section>
    <section v-else>
      <div v-for="producto in productos.Articulos" :key="producto.id">
        <div v-if="producto.id == id">
          <section class="Contenido container">
            <section class="Contenido-Principal">
              <div class="row">
                <div class="col-12">
                  <h1 class="page-header">
                    {{ producto.nombreProducto }}
                  </h1>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="">
                    <div class="main-product-image">
                      <img :src="producto.urlImagen" :srcset="producto.urlImagen" :alt="producto.nombreProducto" class="img-fluid">
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <form class="form-horizontal" action="/cart/add/3514285" method="post" enctype="multipart/form-data" name="buy">
                    <div class="form-group price_elem row">
                      <label class="col-sm-3 col-md-3 form-control-label nopaddingtop">Precio:</label>
                      <div class="col-sm-8 col-md-9">
                        <span id="product-form-price" class="product-form-price">$80.000</span>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Cantidad:</label>
                      <div class="col-sm-8 col-md-9">
                        <input
                          id="input-qty"
                          type="number"
                          class="qty form-control"
                          name="qty"
                          maxlength="5"
                          value="1"
                        >
                      </div>
                    </div>

                    <div class="form-group product-stock product-available row visible">
                      <label class="col-sm-3 col-md-3 form-control-label" />
                      <div class="col-sm-8 col-sm-offset-3 col-md-9 col-md-offset-3">
                        <!--<input type="submit" class="adc btn btn-primary" value="Add to Shopping Cart">-->
                        <a type="button" class="btn btn-secondary" :href="'https://api.whatsapp.com/send?phone=51983475092&text=Hola!%20JadeFashion,%20deseo%20comprar%20el%20producto%20' + producto.nombreProducto + '%20,:)'">Comprar por Whatsapp</a>

                        <!--<a href="javascript:history.back()" class="btn btn-link btn-sm" title="Continue Shopping">← Continue Shopping</a>-->
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-3 col-md-3 form-control-label">Descripcion:</label>
                      <div class="col-sm-8 col-md-9 description" />
                    </div>

                    <input type="hidden" value="LQjgrs0/x+30ZDY01BM/OCaRZZpbPAp8UoPiYgLfDuQ=" name="authenticity_token">
                  </form>
                </div>
              </div>
            </section>

            <section class="Otros-Articulos">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-12">
                      <h3 class="page-header">
                        También te puede interesar:
                      </h3>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/wacom-tablet"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429444/resize/360/450?1439529365" srcset="https://cdnx.jumpseller.com/bootstrap/image/429444/resize/360/450?1439529365 1x, https://cdnx.jumpseller.com/bootstrap/image/429444/resize/720/900?1439529365 2x" alt="Wacom Bamboo Tablet"></a>

                        <div class="caption">
                          <h3><a href="/wacom-tablet">Wacom Bamboo Tablet</a></h3>
                          <div class="price-mob">
                            $100.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/smartphone-mtk6572"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429445/resize/360/450?1439529548" srcset="https://cdnx.jumpseller.com/bootstrap/image/429445/resize/360/450?1439529548 1x, https://cdnx.jumpseller.com/bootstrap/image/429445/resize/720/900?1439529548 2x" alt="Smartphone MTK6572 "></a>

                        <div class="caption">
                          <h3><a href="/smartphone-mtk6572">Smartphone MTK6572 </a></h3>
                          <div class="price-mob">
                            $500.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/imac-desktop-computer"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429446/resize/360/450?1439529839" srcset="https://cdnx.jumpseller.com/bootstrap/image/429446/resize/360/450?1439529839 1x, https://cdnx.jumpseller.com/bootstrap/image/429446/resize/720/900?1439529839 2x" alt="iMac Desktop Computer"></a>

                        <div class="caption">
                          <h3><a href="/imac-desktop-computer">iMac Desktop Computer</a></h3>
                          <div class="price-mob">
                            $1.200.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/ps4"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429450/resize/360/450?1439530709" srcset="https://cdnx.jumpseller.com/bootstrap/image/429450/resize/360/450?1439530709 1x, https://cdnx.jumpseller.com/bootstrap/image/429450/resize/720/900?1439530709 2x" alt="DualShock Controller for PlayStation 4"></a>

                        <div class="caption">
                          <h3><a href="/ps4">DualShock Controller for PlayStation 4</a></h3>
                          <div class="price-mob">
                            $20.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/keyboarded-tablet"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429448/resize/360/450?1439530289" srcset="https://cdnx.jumpseller.com/bootstrap/image/429448/resize/360/450?1439530289 1x, https://cdnx.jumpseller.com/bootstrap/image/429448/resize/720/900?1439530289 2x" alt="Asus Transformer Pad Tablet"></a>

                        <div class="caption">
                          <h3><a href="/keyboarded-tablet">Asus Transformer Pad Tablet</a></h3>
                          <div class="price-mob">
                            $200.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/dualshock-controller-for-playstation-4"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429451/resize/360/450?1439530880" srcset="https://cdnx.jumpseller.com/bootstrap/image/429451/resize/360/450?1439530880 1x, https://cdnx.jumpseller.com/bootstrap/image/429451/resize/720/900?1439530880 2x" alt="Dualshock Controller for PlayStation 4"></a>

                        <div class="caption">
                          <h3><a href="/dualshock-controller-for-playstation-4">Dualshock Controller for PlayStation 4</a></h3>
                          <div class="price-mob">
                            <span class="product-block-not-available">Out of Stock</span>
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-3 col-xs-12 product-block">
                      <div class="main-category-image">
                        <a href="/camara-nikon-reflex-d7200-lente-18-140"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/360/450?1564681025" srcset="https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/360/450?1564681025 1x, https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/720/900?1564681025 2x" alt="Camara Nikon Reflex D7200 + Lente 18-140"></a>

                        <div class="caption">
                          <h3><a href="/camara-nikon-reflex-d7200-lente-18-140">Camara Nikon Reflex D7200 + Lente 18-140</a></h3>
                          <div class="price-mob">
                            $1.290.000
                          </div>
                          <div class="clearfix" />
                          <p class="product-block-description d-none d-md-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { VclInstagram } from 'vue-content-loading'

export default {
  name: 'PageDeUnProductoEnEspecifico',
  components: {
    VclInstagram
  },
  async fetch () {
    this.productos = await this.$http.$get(this.url + '/data/' + this.$route.params.categorias + '.json')
    this.id = this.$route.params.id
  },
  data () {
    return {
      productos: [],
      id: [],
      url: 'https://web-bisuteria.now.sh'
    }
  },
  head () {
    return {
      title: this.productos.Categoria + ' - Jade Fashion'
    }
  }
}
</script>

<style>
.Contenido-Principal{
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
}
.Otros-Articulos{
  background-color: white;
  padding: 20px;
}
</style>
