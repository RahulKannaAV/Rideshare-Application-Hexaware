import ollama

# res = ollama.generate(model='llama3', prompt='Why is the sky blue?')

data = [["Distance (km)", "Time Diff (hours)", "Route Similarity (%)", "Gender Match", "Smoking Match", "Driver Rating",	"Available Seats", "Match Success (Y)"],
        [5.0, 0.5,0.85, 1,1,4.8	,3,1],
        [10.0, 1.5, 0.65, 0, 1, 4.5, 2, 0],
        [3.0, 0.2, 0.95, 1,1,5.0,4,1],
        [8.0, 1.0, 0.75, 0, 0, 4.0,1, 0]]


def generate_historical_data(datalist):
    ROWS = 5
    print(f"Generating {ROWS} rows of data")
    PROMPT = f"I have these data in list {datalist}. Just generate {ROWS} more rows in JSON format by observing patterns in this data without introduction."
    result = ollama.generate(model='llama3',
                             prompt=PROMPT)

    print(f"Data Generated")
    print(result)

generate_historical_data(data)