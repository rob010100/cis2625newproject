import boto3
# Get the service resource
dynamodb = boto3.resource("dynamodb")
# Instantiate a table resource object
table = dynamodb.Table("cis2625table")
# Update attributes of the item in the table using dynaodb.table.update.item()
table.update_item(
    Key={
        "pid": "356a2db8-ecf8-47ec-a228-535ab31cf99e"
    },
    UpdateExpression="Set year = val1",
    ExpressionAttributeValues={
        ":val1": 2007
    }
)