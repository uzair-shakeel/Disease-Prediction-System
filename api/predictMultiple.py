import pandas as pd
import pickle

input_data = {
    'Fever': 'Yes',
    'Cough': 'No',
    'Fatigue': 'Yes',
    'Difficulty Breathing': 'No',
    'Age': "25",  # Change 'age' to 'Age'
    'Gender': 'Female',
    'Blood Pressure': 'Normal',
    'Cholesterol Level': 'Normal'
}

# Print out the keys of the input_data dictionary
print("Keys in input_data:", input_data.keys())

# Loop over each disease and make predictions
for disease in ['influenza', 'common_cold', 'eczema', 'asthma', 'hyperthyroidism', 'allergic_rhinitis', 'anxiety_disorders']:
    print(f"Processing {disease.capitalize()}...")
    # Load the trained model
    try:
        with open(f'./Trained_Models/{disease.capitalize()}_model.pkl', 'rb') as f:  # Fix naming convention inconsistency
            model, label_encoders = pickle.load(f)
    except FileNotFoundError:
        print(f"Model file not found for {disease.capitalize()}. Skipping prediction.")
        continue

    # Print out the keys of the input_data dictionary
    print("Keys in input_data:", input_data.keys())

    # Iterate over the keys of the input_data dictionary and transform the values
    encoded_input = [label_encoders[col].transform([input_data[col]])[0] for col in input_data.keys()]

    # Make prediction
    prediction = model.predict([encoded_input])[0]

    # Print the prediction
    print(f"For {disease.capitalize()}, predicted outcome: {prediction}")
