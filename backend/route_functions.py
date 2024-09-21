import heapq

def getLatitudeAndLongitude(place_name: str):
  """ Pass a place name to get latitude and longitude """

  loc = Nominatim(user_agent="GetLoc")

  location = loc.geocode(place_name)

  if(location is None):
    return location
  return [location.latitude, location.longitude]


def dijkstra(graph, start):
    queue = []
    heapq.heappush(queue, (0, start))  # (distance, node)
    distances = [float('inf') for user in graph]
    distances[start] = 0
    shortest_path = {user: [] for user in graph}

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                shortest_path[neighbor] = shortest_path[current_node] + [current_node]
                heapq.heappush(queue, (distance, neighbor))

    return distances, shortest_path

def create_graph(nodes):
    graph = {idx:[] for idx in range(len(nodes))}

    for first in range(len(nodes)):
      for second in range(first+1, len(nodes)):
        print(first, second)
        print(nodes[first], nodes[second])
        distance = calculate_haversian_distance(nodes[first], nodes[second])
        print(distance)
        graph[first].append([second, distance])
        graph[second].append([first, distance])



    return graph
