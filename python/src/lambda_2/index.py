import json
import pandas as pd

def handler(event, context):

    print('request: {}'.format(json.dumps(event)))
    print(pd.Series([1, 3, 5, 6, 8]))
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain'
        },
        'body': 'Ran lambda_2 successfully!'
    }