odoo.define('azlogistik_pos.ProductScreen', function(require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const NumberBuffer = require('point_of_sale.NumberBuffer');

    const ProductScreenAzLogistik = (ProductScreen) => class extends ProductScreen {
        async _clickProduct(event) {
            const data = event.detail
            const product_stock = await this.rpc({
                model: 'product.product',
                method: 'get_product_stock',
                args: [data.id, [data.id]],
            }).then(res => {
                if (res <= 0) {
                    this.showPopup('ErrorPopup', {
                        title: this.env._t('Stock is not enough'),
                        body: this.env._t('Stock of product ' + data.display_name + ' is not enough'),
                    });
                    return false;
                }
                return true;
            })

            if (!product_stock) return;

            await this.rpc({
                model: 'product.product',
                method: 'reduce_product_stock',
                args: [data.id, [data.id]],
            })
            super._clickProduct(event);
        }
    }

    Registries.Component.extend(ProductScreen, ProductScreenAzLogistik);
    return ProductScreenAzLogistik;
})