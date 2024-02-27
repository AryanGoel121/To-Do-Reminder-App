from datetime import datetime
import notificationLogic as printNotif
import time
import mongoDBOps
import pprint

# Current Time & Date in a Specific Format
def current_time():
    return datetime.now().strftime(r"%H:%M")
def current_date():
    return datetime.now().strftime(r"%Y-%m-%d")


# Accessing Data from the database MONGODB


# Notify User about the task they have scheduled
while True:
    data = mongoDBOps.fetchDataFromDB(current_date())
    for task in data:
        if(task['date'] == current_date() and task['time'] == current_time()):
            printNotif.displayNotif(task['taskContent'])

    time.sleep(60)