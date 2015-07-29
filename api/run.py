from eve import Eve
import os

app = Eve()

if __name__ == '__main__':
    port = None
    host = None

    if os.environ.get('EVE_PORT'):
        port = int(os.environ.get('EVE_PORT'));
    if os.environ.get('EVE_HOST'):
        host = os.environ.get('EVE_HOST');

    app.run(port=port, host=host)

