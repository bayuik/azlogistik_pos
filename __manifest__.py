# -*- encoding: utf-8 -*-
{
    'name': 'Odoo - POS',
    'version': '0.1.0',
    'license': 'LGPL-3',
    'category': 'point of sales',
    'summary': 'Point of Sale Custom',
    'description': """

Customization Module for Point of Sale
================================================
Features : Custom Point Of Sales
""",
    'author': 'Bayuik',
    'website': 'https://www.bayuik.my.id/',
    'depends': ['base', 'point_of_sale', 'product'],
    'data': [
        'views/product_product.xml'
    ],
    'assets': {
        "point_of_sale.assets": [
            'static/src/js/Screens/ProductScreen/ProductScreen.js',
            'static/src/js/Screens/TicketScreen/TicketScreen.js',
            'static/src/js/models.js',
        ],
        'web.assets_qweb': [
            'static/src/xml/Screens/ProductScreen/ProductItem.xml',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
}
