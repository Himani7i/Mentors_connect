import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import json

# Generate a dataset of 200 students
data = {
    'Student_ID': range(1, 201),
    'CGPA': [round(np.random.uniform(6.0, 10.0), 2) for _ in range(200)],
    'Skills': [np.random.choice([
        'Python', 'Java', 'C++', 'JavaScript', 'SQL', 'AI', 'ML', 'FullStack', 'DSA', 'React',
        'Tailwind', 'Backend', 'Frontend', 'Express', 'Node.js', 'Angular', 'Vue.js', 'Ruby',
        'Swift', 'PHP', 'Go', 'Rust', 'Kotlin', 'TypeScript', 'MongoDB'
    ]) for _ in range(200)],
    'Internship': [np.random.choice(['Yes', 'No']) for _ in range(200)],
    'Placed': [np.random.choice(['Yes', 'No']) for _ in range(200)]
}

df = pd.DataFrame(data)

# Map categorical variables to numerical values
skills_map = {
    'Python': 0, 'Java': 1, 'C++': 2, 'JavaScript': 3, 'SQL': 4, 'AI': 5, 'ML': 6, 'FullStack': 7, 'DSA': 8, 'React': 9,
    'Tailwind': 10, 'Backend': 11, 'Frontend': 12, 'Express': 13, 'Node.js': 14, 'Angular': 15, 'Vue.js': 16, 'Ruby': 17,
    'Swift': 18, 'PHP': 19, 'Go': 20, 'Rust': 21, 'Kotlin': 22, 'TypeScript': 23, 'MongoDB': 24
}
df['Skills'] = df['Skills'].map(skills_map)
df['Internship'] = df['Internship'].map({'Yes': 1, 'No': 0})
df['Placed'] = df['Placed'].map({'Yes': 1, 'No': 0})

# Split the dataset into features and target
X = df[['CGPA', 'Skills', 'Internship']]
y = df['Placed']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a random forest classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Model Accuracy: {accuracy:.3f}')

def predict_placement(cgpa, skills, internship):
    skills = [skills_map.get(skill, 0) for skill in skills]
    internship = 1 if internship == 'Yes' else 0
    probability = model.predict_proba([[cgpa, np.mean(skills), internship]])[0][1]
    return {'placement_chance': f'{probability * 100:.2f}%'}

if __name__ == "__main__":
    import sys
    cgpa = float(sys.argv[1])
    skills = sys.argv[2].split(',')
    internship = sys.argv[3]
    result = predict_placement(cgpa, skills, internship)
    print(json.dumps(result))
