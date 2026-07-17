import pandas as pd
import pickle

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression


data = pd.read_csv("../dataset/news.csv")


X = data["text"]
y = data["label"]


vectorizer = TfidfVectorizer()

X_vector = vectorizer.fit_transform(X)


model = LogisticRegression()

model.fit(X_vector, y)


pickle.dump(model, open("model.pkl","wb"))

pickle.dump(vectorizer, open("vectorizer.pkl","wb"))


print("AI Model Trained Successfully")