odoo.define('azlogistik_pos.TicketScreen', function(require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const TicketScreen = require('point_of_sale.TicketScreen');
    const { posbus } = require('point_of_sale.utils');

    const TicketScreenAzLogistik = (TicketScreen) => class extends TicketScreen {
        async _onDeleteOrder({ detail: order }) {
            const screen = order.get_screen_data();
            if (['ProductScreen', 'PaymentScreen'].includes(screen.name) && order.get_orderlines().length > 0) {
                const { confirmed } = await this.showPopup('ConfirmPopup', {
                    title: this.env._t('Existing orderlines'),
                    body: _.str.sprintf(
                      this.env._t('%s has a total amount of %s, are you sure you want to delete this order ?'),
                      order.name, this.getTotal(order)
                    ),
                });
                if (!confirmed) return;
                console.log(order.orderlines.models)
                order.orderlines.models.map(async line => await this.rpc({
                    model: 'product.product',
                    method: 'increase_product_stock',
                    args: [line.product.id, [line.product.id], line.quantity],
                }))
            }
            if (order && (await this._onBeforeDeleteOrder(order))) {
                order.destroy({ reason: 'abandon' });
                posbus.trigger('order-deleted');
            }
        }
    }

    Registries.Component.extend(TicketScreen, TicketScreenAzLogistik);
    return TicketScreenAzLogistik;
})