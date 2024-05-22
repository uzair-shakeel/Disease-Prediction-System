import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Step 1: Load the dataset
data = pd.read_csv('Disease_symptom_and_patient_profile_dataset.csv')

# Step 2: Preprocess the data
# Assuming you want to train a model for each disease, loop over each disease
for disease in data['Disease'].unique():
    # Filter the dataset for the current disease
    disease_data = data[data['Disease'] == disease]
    
    # Check if there are samples for the current disease
    if disease_data.shape[0] == 0:
        print(f"No samples available for {disease}. Skipping model training.")
        continue
    
    # Encode categorical variables
    label_encoders = {}
    for column in disease_data.select_dtypes(include=['object']).columns:
        label_encoders[column] = LabelEncoder()
        disease_data[column] = label_encoders[column].fit_transform(disease_data[column])

    # Select features and target variable
    X = disease_data.drop(columns=['Disease', 'Outcome Variable'])
    y = disease_data['Outcome Variable']
    
    # Step 3: Train the model
    model = RandomForestClassifier()
    model.fit(X, y)
    
    # Step 4: Save the model
    with open(f'{disease.lower().replace(" ", "_")}_model.pkl', 'wb') as f:
        pickle.dump((model, label_encoders), f)
