# -*- encoding: utf-8 -*-
{
    'name': 'AZlogistik - POS',
    'version': '0.1.0',
    'license': 'LGPL-3',
    'category': 'point of sales',
    'summary': 'AZlogistik - Point of Sale ',
    'description': """

AZlogistik Customization Module for Point of Sale
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
            'azlogistik_pos/static/src/js/Screens/ProductScreen/ProductScreen.js',
            'azlogistik_pos/static/src/js/Screens/TicketScreen/TicketScreen.js',
            'azlogistik_pos/static/src/js/models.js',
        ],
        'web.assets_qweb': [
            'azlogistik_pos/static/src/xml/Screens/ProductScreen/ProductItem.xml',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
}
