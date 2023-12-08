import boto3
# Get the service resource
dynamodb = boto3.resource("dynamodb")
# Instantiate a table resource object
table = dynamodb.Table("project_final")
# retrieve all items in a table using dynamodb.table.scan()
response = table.scan()
#print(type(response))
#print(response)
items = response["Items"]
print(items)

