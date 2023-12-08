import json
import boto3
from custom_encoder import CustomEncoder

dydbTable = boto3.resource("dynamodb").Table("XXXINSERT TABLE NAMEXXX")

def lambda_handler(event, context):
    
    response = dydbTable.get_item(
        Key={
            "pid":event["queryStringParameters"]["pid"]
            }
        )
        
    if response["Item"]:
        #createdAt is a number (Decimal) and it has to be encoded
        response ["Item"]["createdAt"] = json.dumps(response["Item"]["createdAt"], cls=CustomEncoder)
        return{
            "statusCode" : 200,
            "headers": {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
                    },
            "body": json.dumps(response["Item"])
            }
    else:
        return {
            "statusCode": 404,
            "headers": {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, POST, GET"  
                    },
            "body": json.dumps({"Message": "The property is not found."})
            }