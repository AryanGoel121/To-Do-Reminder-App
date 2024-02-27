from pymongo import MongoClient
# import pprint

MONGODB_URI = 'mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/?retryWrites=true&w=majority&appName=To-DoList'
client = MongoClient(MONGODB_URI)

# Pointing to the right collection
tasks_collection = client.to_do.tasks

def fetchDataFromDB(current_date):
    # Query to import documents having a reminder after current time & date
    query = {"date": { "$gte": current_date} }

    result = tasks_collection.find(query)
    return result
    # print(result)
    # for docs in result:
    #     pprint.pprint(docs)