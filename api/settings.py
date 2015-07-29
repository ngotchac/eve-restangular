# CORS Settings
X_DOMAINS = '*'
X_HEADERS = ['Content-Type', 'Accept', 'If-Match']

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.
MONGO_HOST = 'localhost'
MONGO_PORT = 27017
MONGO_DBNAME = 'eve-restangular'

# Enable reads (GET) and inserts (POST) for resources/collections
RESOURCE_METHODS = ['GET', 'POST']

# Enable reads (GET), edits (PATCH), replacements (PUT) and deletes (DELETE) 
# of individual items (defaults to read-only item access).
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

schema = {
    # Schema definition, based on Cerberus grammar. Check the Cerberus project
    # (https://github.com/nicolaiarocci/cerberus) for details.
    'firstname': {
        'type': 'string'
    },
    'lastname': {
        'type': 'string'
    }
}

user = {
    'schema': schema
}

DOMAIN = {
    'user': user,
}

