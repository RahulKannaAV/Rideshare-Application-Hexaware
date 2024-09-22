from haversine import haversine as h
from typing import List
import yagmail
import os
import smtplib
from dotenv import load_dotenv

load_dotenv()

A = [41.8781, -87.6298] # Chicago
B =  [39.7684, -86.1581] # Indianapolis
X = [45.010773, -87.662888] # Evanston
Y = [39.1653, -86.5264] # Bloomington


def calculate_similarity(o1_lat, o1_long, d1_lat, d1_long, o2_lat, o2_long, d2_lat, d2_long):
    l1 = h((o1_lat, o1_long), (d1_lat, d1_long))
    l2 = h((o2_lat, o2_long), (d2_lat, d2_long))
    od = h((o1_lat, o1_long), (o2_lat, o2_long))
    dd = h((d1_lat, d1_long), (d2_lat, d2_long))

    sim = (l1+l2)/(l1+l2+od+dd)
    return sim

# o1 denotes A (Origin of 1st Trip)
# d1 denotes B (Destination of 1st Trip)
# o2 denotes X (Origin of 2nd Trip)
# d2 denotes Y (Destination of 2nd Trip)

def calculate_payment(total_distance: int,
                      total_riders: int,
                      pickup_points: List[int],
                      drop_points: List[int]):
    # Calculate distance between pickup points to drop_points

    fare_dicts = dict()

    for idx in range(len(pickup_points)):
        rider_fare = dict()
        rider_fare["distance"] = h(pickup_points[idx], drop_points[idx], unit='km')
        rider_fare["fare"] = 7.35 * rider_fare["distance"]

        fare_dicts[idx] = rider_fare

    return fare_dicts

def send_notifications(type: str,
                       receiver: str):
    yag = yagmail.SMTP(os.environ['GMAIL'], os.environ['PASSWORD'])
    if(type == "ride request"):
        content = "Dear M Arjunan, Your ride request has been submitted successfully. Thank you"
        yag.send(to=receiver,
                 contents=content,
                 subject="Regarding Ride Request from Rideshare Application")
        print("Message sent successfully")

    # Similarly, do the same for all types of notifications and use the same function to send notifications

send_notifications("ride request", "marjunan45@gmail.com")