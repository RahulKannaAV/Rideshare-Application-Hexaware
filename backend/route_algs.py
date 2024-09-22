from haversine import haversine as h


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