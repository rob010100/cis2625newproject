import boto3

dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("project_final")

table.delete_item(
    Key={
        "pid": "356a2db8-ecf8-47ec-a228-535ab31cf99e"
    }
)

print(table.item_count)