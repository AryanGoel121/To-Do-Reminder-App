from plyer import notification
import os
current_dir = os.path.dirname(os.path.abspath(__file__))

def displayNotif(data):
    notification.notify(
        title = "Task Reminder Application",
        message = data,
        # app_icon = r"C:\Users\aryan\OneDrive\Desktop\Software Development\Reminder-Application\checklist.ico",
        app_icon = os.path.join(current_dir, 'checklist.ico'),
        timeout = 10
    )

if __name__ == '__main__':
    displayNotif("Hello World")