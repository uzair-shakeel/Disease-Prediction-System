import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Step 1: Load the dataset
data = pd.read_csv('heart (heart disease).csv')

# Step 2: Prepare the data
X = data.drop('target', axis=1)  # Features
y = data['target']               # Target variable

# Step 3: Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 4: Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Step 5: Evaluate the model
accuracy = model.score(X_test, y_test)
print("Model Accuracy:", accuracy)

# Step 6: Save the trained model
with open('./Trained_Models/heart_disease_model.pkl', 'wb') as f:
    pickle.dump(model, f)
