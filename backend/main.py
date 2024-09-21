from route_functions import *
def main():
    print("Driver can go from Sholinganallur to Tambaram")

    routes = {}
    nodes = []

    source = input("Enter the source location: ")
    destination = input("Enter the Destination Location: ")

    source_node = getLatitudeAndLongitude(source)
    routes[f"{source_node}"] = source
    nodes.append(source_node)

    dest_node = getLatitudeAndLongitude(destination)
    routes[f"{dest_node}"] = destination
    nodes.append(dest_node)

    driver_source = "Not found" if getLatitudeAndLongitude("Navalur") is None else getLatitudeAndLongitude("Navalur")
    driver_target = "Not found" if getLatitudeAndLongitude("Tambaram Chennai") is None else getLatitudeAndLongitude(
        "Tambaram Chennai")

    nodes.extend([driver_source, driver_target])

    routes[f"{driver_source}"] = "Navalur"
    routes[f"{driver_target}"] = "Tambaram"
    print(f"Driver Source Coordinates: {driver_source}")
    print(f"Driver Target Coordinates: {driver_target}")

    print(nodes)
    graphs = create_graph(nodes)
    print(graphs)

if __name__ == "__main__":
    main()