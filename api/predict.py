import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Step 1: Load the dataset
data = pd.read_csv('Disease_symptom_and_patient_profile_dataset.csv')

# Step 2: Preprocess the data
# Encode categorical variables
label_encoders = {}
for column in data.select_dtypes(include=['object']).columns:
    label_encoders[column] = LabelEncoder()
    data[column] = label_encoders[column].fit_transform(data[column])

# Select features and target variable
X = data.drop(columns=['Disease', 'Outcome Variable'])
y = data['Outcome Variable']

# Step 3: Train the model
model = RandomForestClassifier()
model.fit(X, y)

# Step 4: Save the model
with open('random_forest_model.pkl', 'wb') as f:
    pickle.dump((model, label_encoders), f)

def predict_disease(symptoms):
    # Preprocess the input symptoms
    symptoms = pd.DataFrame([symptoms], columns=X.columns)
    for column in symptoms.select_dtypes(include=['object']).columns:
        symptoms[column] = label_encoders[column].transform(symptoms[column])

    # Make prediction
    with open('random_forest_model.pkl', 'rb') as f:
        model, label_encoders = pickle.load(f)
    probabilities = model.predict_proba(symptoms)[0]

    # Get the list of all diseases
    diseases = list(label_encoders['Outcome Variable'].classes_)

    # Create a dictionary to store the probabilities for each disease
    disease_probabilities = {}
    for disease, probability in zip(diseases, probabilities):
        disease_probabilities[disease] = probability

    return disease_probabilities

# Example usage:
symptoms = {
    'Fever': 'Yes',
    'Cough': 'No',
    'Fatigue': 'Yes',
    'Difficulty Breathing': 'No',
    'Age': 25,
    'Gender': 'Female',
    'Blood Pressure': 'Normal',
    'Cholesterol Level': 'Normal'
}
predicted_probabilities = predict_disease(symptoms)
print("Predicted probabilities for each disease:", predicted_probabilities)
