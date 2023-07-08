from odoo import fields, models, _
from odoo.exceptions import UserError

class ProductProduct(models.Model):
    _inherit = 'product.product'

    product_stock = fields.Integer("Product Stock")

    def get_product_stock(self, product_id):
        return self.env['product.product'].search([('id', '=', product_id)]).product_stock

    def reduce_product_stock(self, product_id):
        product = self.env['product.product'].search([('id', '=', product_id)])
        product.product_stock -= 1
        return product.product_stock

    def increase_product_stock(self, product_id, qty):
        product = self.env['product.product'].search([('id', '=', product_id)])
        product.product_stock += qty
        return product.product_stock