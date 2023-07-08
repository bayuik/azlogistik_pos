odoo.define('azlogistik_pos.user_inteface', function(require) {
	"User strict";
	const models = require('point_of_sale.models');

	models.load_fields("product.product", ['product_stock']);
});