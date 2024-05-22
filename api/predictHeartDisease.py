import sys
import numpy as np
import pickle
import warnings

# Suppress UserWarning from scikit-learn
warnings.filterwarnings("ignore", category=UserWarning)

# Load the trained model
with open('./Trained_Models/heart_disease_model.pkl', 'rb') as f:
    model = pickle.load(f)

def predict_heart_disease(input_data):
    # Convert the input data to a numpy array
    input_array = np.array([input_data])

    # Make predictions for the input data
    prediction = model.predict(input_array)

    # Interpret the prediction
    if prediction[0] == 1:
        return "The patient is predicted to have heart disease."
    else:
        return "The patient is predicted not to have heart disease."

if __name__ == "__main__":
    # Check if the input data is provided as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python model.py '[83,1,3,145,233,1,0,150,0,2.3,0,0,1]'")
        sys.exit(1)

    # Parse the input data from the command-line argument
    try:
        input_data = eval(sys.argv[1])
    except:
        print("Error: Invalid input data. Please provide the input data as a list.")
        sys.exit(1)

    # Call the function to predict heart disease
    result = predict_heart_disease(input_data)

    # Print the prediction result
    print(result)
