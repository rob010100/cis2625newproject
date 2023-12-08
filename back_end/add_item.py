import boto3

#Get the service resource
dynamodb = boto3.resource("dynamodb")

#Use an existing Dynamo Table
table = dynamodb.Table("project_final")

#Populate data into table.
table.put_item(
    Item={
        
  "str_address": "1404 Pine Apt B",
  "zip": "64093",
  "city": "Warrensburg",
  "state": "MO",
  "year": "1993",
  "type": "Apartment",
  "sqft": "1230",
  "beds": "3",
  "baths": "2"
  
    }
)
